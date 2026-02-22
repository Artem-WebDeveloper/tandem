# Quiz - Унификация типов (JS/TS)

Дата: 2026-02-20

---

## Задачи

- Обсудить с командой формат запросов и ответов для всех типов квизов
- Унифицировать контракт между фронтом и бэкендом
- Финализировать общие TypeScript-интерфейсы
- Место в проекте

- Все задания будут храниться и отображаться на странице **Library**

---

## Ход работы

Сегодня в команде обсуждали унификацию запросов и ответов.

Глеб предложил структуру на основе своего квиза Code Completion.

### Пример от Глеба (Code Completion)

Ответ сервера при загрузке задания:

```json
{
  "id": "cc-001",
  "section": "Core JS",
  "type": "code-completion",
  "difficulty": 2,
  "questions": [
    {
      "id": 1,
      "code": "const result = arr.___(x => x > 0);",
      "blanks": ["___"],
      "hint": "This method returns a new array with elements that pass the test"
    }
  ]
}
```

Отправка ответов пользователя на сервер:

```json
{
  "taskId": "cc-001",
  "userAnswers": [
    { "questionId": 1, "payload": "filter" },
    { "questionId": 2, "payload": "map" }
  ]
}
```

Ответ сервера с результатами:

```json
[
  { "questionId": 1, "isCorrect": true },
  { "questionId": 2, "isCorrect": false }
]
```

---

## Итоговая архитектура типов

Предположил, что будет удобно в простых квизах унифицировать их.

Можно разделить на универсальные и кастомные(для типа задания).

---

### Универсальные типы

Используются для всех простых квизов(названы лёгкими в документации).

#### Enums

```typescript
// Пока что планируется три вида сложности
export enum Difficulty {
  Easy   = 1,
  Medium = 2,
  Hard   = 3,
}

// Пример типов заданий
export enum TaskType {
  SingleChoice   = "single_choice",
  MultipleChoice = "multiple_choice",
  TrueFalse      = "true_false",
}
```

#### BaseTask — базовая информация квиза

```typescript
// Общие поля, которые есть у любого задания на сервере.
// Фронт использует поле type как discriminator — определяем, какой компонент рендерить.
export interface BaseTask {
  id: string;             // уникальный идентификатор задания
  type: TaskType;         // тип задания — discriminator для фронта
  difficulty: Difficulty; // уровень сложности
}
```

#### TaskListItem — мета для страницы Library

```typescript
// Отображение и фильтрация списка заданий.
export interface TaskListItem {
  id: string;
  title: string;       // название квиза для отображения
  section: string;     // "Core JS", "TypeScript", "Advanced JS"
  difficulty: Difficulty;
  type: TaskType;
  tags?: string[];     // Дополнительной фильтрация?
}
```

#### TaskFetchResponse — union всех возможных ответов сервера

```typescript
// Practice.tsx получает один из этих типов по discriminator type.
// Расширяется когда кто-то из команды добавляет новый квиз —
// универсальные типы при этом не трогаются.
export type TaskFetchResponse =
  | SingleChoiceTaskResponse
  | TrueFalseTaskResponse;
  // | another quize
```

```
GET /api/tasks/:id → TaskFetchResponse  (Practice - получение нужного квиза)
```

#### Отправка ответов на сервер

```typescript
// Ответ пользователя на один вопрос.
// payload - универсальное поле: каждый тип квиза кладёт своё значение.
// Single Choice → string (id выбранного варианта)
// True/False    → boolean
export interface UserAnswer {
  questionId: number;
  payload: unknown;
}

// Запрос на проверку ответов - одинаков для всех квизов
export interface TaskSubmitRequest {
  taskId: string;
  userAnswers: UserAnswer[];
}
```

#### Получение результатов от сервера

```typescript
// Результат по одному вопросу.
// Сервер возвращает только результат проверки — правильно или нет.
export interface QuestionResult {
  questionId: number;
  isCorrect: boolean;
}

// Итоговый ответ сервера после проверки.
// На фронте сопоставляем questionResults[] с userAnswers[]
// Можно по questionId и красить ответы.
// Процент выполнения считается на фронте:
export interface TaskSubmitResponse {
  taskId: string;
  totalQuestions: number;
  correctAnswers: number;
  questionResults: QuestionResult[];
  // score = correctAnswers / totalQuestions * 100 можно посчитать на фронте
}
```

---

## Расположение в проекте

### Общие типы

```
src/
  core/
    types/
      quiz.ts
```

### кастомные

```
src/
  features/
    singleChoice/
      types/
        index.ts
```
