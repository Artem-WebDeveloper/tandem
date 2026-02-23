// MOCK DATA - Single Choice

import { Difficulty, TaskType } from '../../../types/quiz';
import type { SingleChoiceTaskResponse } from '../types';

export const MOCK_SINGLE_CHOICE_DATA: SingleChoiceTaskResponse[] = [
  {
    id: 'sc-001',
    type: TaskType.SingleChoice,
    title: 'JavaScript: Типы данных',
    section: 'Core JS',
    tags: ['types', 'typeof'],
    difficulty: Difficulty.Easy,
    questions: [
      {
        id: 1,
        text: 'Что вернёт typeof null?',
        options: [
          { id: 'a', text: 'null' },
          { id: 'b', text: 'undefined' },
          { id: 'c', text: 'object' },
          { id: 'd', text: 'NaN' },
        ],
      },
      {
        id: 2,
        text: 'Какой тип данных является примитивным в JavaScript?',
        options: [
          { id: 'a', text: 'Array' },
          { id: 'b', text: 'Object' },
          { id: 'c', text: 'Symbol' },
          { id: 'd', text: 'Function' },
        ],
      },
      {
        id: 3,
        text: 'Что вернёт typeof undefined?',
        options: [
          { id: 'a', text: 'null' },
          { id: 'b', text: 'undefined' },
          { id: 'c', text: 'object' },
          { id: 'd', text: 'string' },
        ],
      },
    ],
  },
  {
    id: 'sc-002',
    type: TaskType.SingleChoice,
    title: 'JavaScript: Массивы',
    section: 'Core JS',
    tags: ['arrays', 'array-methods'],
    difficulty: Difficulty.Medium,
    questions: [
      {
        id: 1,
        text: 'Какой метод возвращает новый массив с отфильтрованными элементами?',
        options: [
          { id: 'a', text: 'map()' },
          { id: 'b', text: 'filter()' },
          { id: 'c', text: 'reduce()' },
          { id: 'd', text: 'find()' },
        ],
      },
      {
        id: 2,
        text: 'Что вернёт [1, 2, 3].indexOf(4)?',
        options: [
          { id: 'a', text: '0' },
          { id: 'b', text: 'undefined' },
          { id: 'c', text: '-1' },
          { id: 'd', text: 'null' },
        ],
      },
    ],
  },
  {
    id: 'sc-003',
    type: TaskType.SingleChoice,
    title: 'TypeScript: Основы',
    section: 'TypeScript',
    tags: ['typescript', 'types', 'interfaces'],
    difficulty: Difficulty.Hard,
    questions: [
      {
        id: 1,
        text: 'Что такое discriminated union в TypeScript?',
        options: [
          {
            id: 'a',
            text: 'Тип, который может быть одним из нескольких типов с общим полем-меткой',
          },
          { id: 'b', text: 'Тип, который запрещает использование null' },
          { id: 'c', text: 'Тип для работы с асинхронным кодом' },
          { id: 'd', text: 'Обёртка над enum' },
        ],
      },
      {
        id: 2,
        text: 'Чем отличается interface от type в TypeScript?',
        options: [
          { id: 'a', text: 'interface нельзя расширить' },
          { id: 'b', text: 'type не поддерживает примитивы' },
          { id: 'c', text: 'interface можно декларировать повторно, type — нет' },
          { id: 'd', text: 'Никакой разницы нет' },
        ],
      },
    ],
  },
];
