## 2026-02-22

### Задачи

- Создать компонент SingleChoiceQuiz.tsx

### Ход работы

Создал компонент `SingleChoiceQuiz.tsx` - отображение вопросов по очереди, выбор варианта кликом, кнопка Next / Submit. 
Добавил простые стили `SingleChoiceQuiz.module.scss`

Обновлены `SingleChoiceTaskResponse` и моковые данные (добавлены поля `section` и `tags`), которые ожидает header.
Т.к. получал ошибку `PracticeHeader.tsx:26 Uncaught TypeError: Cannot read properties of undefined (reading 'map')`.

### Результат
Квиз открывается по адресу `/practice/sc-001..003`

### TODO

Финальный сабмит и переход на Results.