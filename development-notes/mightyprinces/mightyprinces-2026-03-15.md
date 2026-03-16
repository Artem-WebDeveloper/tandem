# 2026-03-15

## Задачи
- добавить тесты, минимум 5
  
## Ход работы:
- Подтянула обновления ребят, увидела там vitest, так что часть задачи уже выполнена
- Добавила нужные тесты
```tsx
import { render, screen } from '@testing-library/react';
import { MOCK_CODE_ORDERING_DATA } from '@/core/mock/codeOrderingData';

import CodeOrderingWidget from './CodeOrderingWidget';
import CodeOrderingQuizBody from './CodeOrderingQuizBody/CodeOrderingQuizBody';

describe('CodeOrderingWidget', () => {
  // Проверка на рендер без ошибок 
  it('renders without errors', () => { 
    render(<CodeOrderingWidget data={MOCK_CODE_ORDERING_DATA[0]} />); 
  });

  // Проверка на верное отображение номера вопроса в прогресс баре
  it('renders current question number in progress bar', () => {
    render(<CodeOrderingWidget data={MOCK_CODE_ORDERING_DATA[0]} />);
    expect(screen.getByText('Вопрос 1 из 5')).toBeInTheDocument();
  });

  // Проверка на верное отображение процента прогресса в прогресс баре
  it('renders progress percent in progress bar', () => {
    render(<CodeOrderingWidget data={MOCK_CODE_ORDERING_DATA[0]} />);
    expect(screen.getByText('20%')).toBeInTheDocument();
  });

  // Проверка на отображение заголовка
  it('renders current question title', () => {
    render(<CodeOrderingQuizBody questions={MOCK_CODE_ORDERING_DATA[0].questions} />);
    expect(screen.getByText('Расставьте строки в правильном порядке')).toBeInTheDocument();
  });

  // Проверка на отображение текста задания
  it('renders current question text', () => {
    render(<CodeOrderingQuizBody questions={MOCK_CODE_ORDERING_DATA[0].questions} />);
    expect(screen.getByText('Создайте функцию debounce')).toBeInTheDocument();
  });
});
```
