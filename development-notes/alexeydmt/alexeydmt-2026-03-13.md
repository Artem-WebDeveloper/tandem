# Quiz, fix logic

## Решена проблема с хранением выбраных результатов при движении назад/вперед

При навигации по квизу возникала проблема с сохранением выбранных ответов.

При движении вперёд `selectedOptionId` всегда сбрасывался в `null`, даже если ответ уже был сохранён.

Убрал отдельный state для `selectedOptionId` — теперь всё берётся из массива `userAnswers`:

## Рефакторинг навигации

Упростил компонент на основе code review:

## Обработчик выбора опции

Добавлен отдельный handler для изменения выбранного варианта, всё сразу сохраняется в `userAnswers`
```typescript
const handleOptionChange = (optionId: string) => {
  setUserAnswers((prev) => {
    const updated = [...prev];
    updated[currentIndex] = {
      questionId: currentQuestion.id,
      payload: optionId,
    };
    return updated;
  });
};
```

### Итого

- Навигация работает корректно в обоих направлениях  
- Выбранные ответы сохраняются корректно
- Убраны лишние проверки блдагодаря `QuizNavigation`  
