# Quiz Single Choice (JS/TS)

**Дата:** 2026-02-18

---

## Задачи

- Наметить пользовательский флоу: выбор сложности, отображение вопросов, сбор ответов
- Продумать структуру запроса/ответа сервера для квиза (сервер хранит все данные + правильные ответы)

---

## Ход работы

Определение логики работы квиза:

- Вопросы рендерятся по одному
- Пользователь выбирает вариант ответа
- После завершения всех вопросов ответы отправляются на сервер
- Сервер проверяет и возвращает результаты

### Пользовательский флоу

```
Пользователь выбирает сложность (easy/medium/hard)
  → QuizFetchRequest { difficulty, quizNumber }
  → QuizFetchResponse { questions[] }
  → Пользователь отвечает на все вопросы
  → QuizSubmitRequest { answers[] }
  → QuizSubmitResponse { results[] }
  → Отображение результатов на фронте
```

### TypeScript интерфейсы

```typescript
// Вариант ответа на вопрос
interface QuizOption {
  id: number;     // идентификатор варианта
  text: string;   // текст варианта
}

// Вопрос + варианты ответов
interface QuizQuestion {
  id: number;              // идентификатор вопроса
  question: string;        // текст вопроса
  options: QuizOption[];   // варианты ответа
  type: string;            // тип вопроса / квиза (Single Choice)
}

// Запрос квиза с сервера
interface QuizFetchRequest {
  difficulty: number; // 1 = easy, 2 = medium, 3 = hard
  quizNumber: number; // порядковый номер квиза в выбранной сложности
}

// Ответ сервера на запрос квиза
interface QuizFetchResponse {
  id: string;                // идентификатор квиза
  section: string;           // раздел / тема квиза
  type: string;              // тип квиза
  difficulty: number;        // сложность
  questions: QuizQuestion[]; // массив вопросов
}

// Ответ пользователя на вопрос
interface UserAnswer {
  questionId: number; // к какому вопросу относится ответ
  optionId: number;   // выбранный вариант
}

// Отправка ответов на проверку
interface QuizSubmitRequest {
  quizId: string;        // идентификатор квиза
  answers: UserAnswer[]; // ответы пользователя
}

// Ответ сервера с результатами квиза
interface QuizSubmitResponse {
  totalCorrect: number;   // количество правильных ответов
  totalIncorrect: number; // количество неправильных ответов
}
```

---

## Вопрос

Необходимо унифицировать формат запросов и ответов между фронтом и бэком, чтобы можно было добавлять новые типы квизов и уровни сложности без переделок.
