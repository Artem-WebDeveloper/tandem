// render - рендер компоненти в виртуальный DOM
// screen - поиск элемента в виртуальном DOM (screen.getByText('Question 1'))
import { render, screen } from '@testing-library/react';
// describe - группировка тестов
// it - разбивка на тесты
// Проверка на соответствие ожидаемому результату
import { describe, it, expect } from 'vitest';
// Симуляция действий пользователя
import userEvent from '@testing-library/user-event';

import SingleChoiceQuiz from './SingleChoiceQuiz';
import type { SingleChoiceTaskResponse } from './types';
import { TaskType, Difficulty } from '@/core/types/quiz';

const mockQuizData: SingleChoiceTaskResponse = {
  id: 'sc-test-001',
  type: TaskType.SingleChoice,
  title: 'Test Quiz',
  section: 'Testing',
  tags: ['test'],
  difficulty: Difficulty.Easy,
  questions: [
    {
      id: 1,
      text: 'Question 1',
      options: [
        { id: 'a', text: 'Option A' },
        { id: 'b', text: 'Option B' },
      ],
    },
    {
      id: 2,
      text: 'Question 2',
      options: [
        { id: 'c', text: 'Option C' },
        { id: 'd', text: 'Option D' },
      ],
    },
    {
      id: 3,
      text: 'Question 3',
      options: [
        { id: 'e', text: 'Option E' },
        { id: 'f', text: 'Option F' },
      ],
    },
  ],
};

describe('SingleChoiceQuiz', () => {
  // Проверка на рендер без ошибок
  it('renders without errors', () => {
    render(<SingleChoiceQuiz data={mockQuizData} />);
  });

  // Ищем в DOM 'Question 1'
  it('renders question text', () => {
    render(<SingleChoiceQuiz data={mockQuizData} />);
    expect(screen.getByText('Question 1')).toBeInTheDocument();

    // Проверяем отсутствие
    expect(screen.queryByText('Question 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Question 3')).not.toBeInTheDocument();
  });

  it('renders options', () => {
    render(<SingleChoiceQuiz data={mockQuizData} />);
    expect(screen.getByText('Option A')).toBeInTheDocument();
    expect(screen.getByText('Option B')).toBeInTheDocument();
  });

  //  /anyText /i игнорируем регистр
  it('renders progress bar', () => {
    render(<SingleChoiceQuiz data={mockQuizData} />);
    expect(screen.getByText(/вопрос 1 из 3/i)).toBeInTheDocument();
  });

  // Ищем button c текстом
  it('renders navigation buttons', () => {
    render(<SingleChoiceQuiz data={mockQuizData} />);
    expect(screen.getByRole('button', { name: /назад/i })).toBeInTheDocument();
  });

  it('shows second question after clicking next', async () => {
    render(<SingleChoiceQuiz data={mockQuizData} />);
    const user = userEvent.setup();

    // Выбор ответа
    await user.click(screen.getByLabelText('Option A'));

    // Далее...
    await user.click(screen.getByRole('button', { name: /следующий вопрос/i }));

    // Находим новый вопрос
    expect(screen.getByText('Question 2')).toBeInTheDocument();

    // Проверка отсутствия первого
    expect(screen.queryByText('Question 1')).not.toBeInTheDocument();
  });
});
