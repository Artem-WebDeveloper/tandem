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
  id: 1,
  time_limit: 300,
  type: TaskType.SingleChoice,
  title: {
    en: 'Test Quiz',
    ru: 'Тестовый квиз',
  },
  section: 'Algorithms',
  tags: ['test'],
  difficulty: Difficulty.Easy,
  questions: [
    {
      id: 1,
      text: {
        en: 'Question 1',
        ru: 'Вопрос 1',
      },
      options: [
        {
          id: 'a',
          text: {
            en: 'Option A',
            ru: 'Вариант A',
          },
        },
        {
          id: 'b',
          text: {
            en: 'Option B',
            ru: 'Вариант B',
          },
        },
      ],
    },
    {
      id: 2,
      text: {
        en: 'Question 2',
        ru: 'Вопрос 2',
      },
      options: [
        {
          id: 'c',
          text: {
            en: 'Option C',
            ru: 'Вариант C',
          },
        },
        {
          id: 'd',
          text: {
            en: 'Option D',
            ru: 'Вариант D',
          },
        },
      ],
    },
    {
      id: 3,
      text: {
        en: 'Question 3',
        ru: 'Вопрос 3',
      },
      options: [
        {
          id: 'e',
          text: {
            en: 'Option E',
            ru: 'Вариант E',
          },
        },
        {
          id: 'f',
          text: {
            en: 'Option F',
            ru: 'Вариант F',
          },
        },
      ],
    },
  ],
};

describe('SingleChoiceQuiz', () => {
  function setup() {
    render(<SingleChoiceQuiz data={mockQuizData} />);
  }

  // Проверка на рендер без ошибок
  it('renders without errors', () => {
    setup();
  });

  // Ищем в DOM 'Question 1'
  it('renders question text', () => {
    setup();
    expect(screen.getByText('Вопрос 1')).toBeInTheDocument();

    // Проверяем отсутствие
    expect(screen.queryByText('Вопрос 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Вопрос 3')).not.toBeInTheDocument();
  });

  it('renders options', () => {
    setup();
    expect(screen.getByText('Вариант A')).toBeInTheDocument();
    expect(screen.getByText('Вариант B')).toBeInTheDocument();
  });

  it('renders progress bar', () => {
    setup();
    expect(screen.getByText('progressBar.question 1 progressBar.of 3')).toBeInTheDocument();
  });

  // Ищем button c текстом
  it('renders navigation buttons', () => {
    setup();
    expect(screen.getByRole('button', { name: 'navigation.back' })).toBeInTheDocument();
  });

  it('shows second question after clicking next', async () => {
    setup();
    const user = userEvent.setup();

    // Выбор ответа
    await user.click(screen.getByLabelText('Вариант A'));

    // Далее...
    await user.click(screen.getByRole('button', { name: 'navigation.next' }));

    // Находим новый вопрос
    expect(screen.getByText('Вопрос 2')).toBeInTheDocument();

    // Проверка отсутствия первого
    expect(screen.queryByText('Вопрос 1')).not.toBeInTheDocument();
  });
});
