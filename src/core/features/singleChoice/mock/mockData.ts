// MOCK DATA - Single Choice

import { Difficulty, TaskType } from '../../../types/quiz';
import type { SingleChoiceTaskResponse } from '../types';

export const MOCK_SINGLE_CHOICE_DATA: SingleChoiceTaskResponse[] = [
  {
    id: 'sc-008',
    type: TaskType.SingleChoice,
    title: 'HTML: Basics',
    section: 'HTML',
    tags: ['html', 'basics', 'markup'],
    difficulty: Difficulty.Easy,

    questions: [
      {
        id: 1,
        text: 'Какой тег используется для самого большого заголовка?',
        options: [
          { id: 'a', text: '<h6>' },
          { id: 'b', text: '<heading>' },
          { id: 'c', text: '<h1>' },
          { id: 'd', text: '<head>' },
        ],
      },
      {
        id: 2,
        text: 'Какой тег используется для ссылки?',
        options: [
          { id: 'a', text: '<a>' },
          { id: 'b', text: '<link>' },
          { id: 'c', text: '<href>' },
          { id: 'd', text: '<url>' },
        ],
      },
      {
        id: 3,
        text: 'Какой атрибут указывает адрес ссылки?',
        options: [
          { id: 'a', text: 'src' },
          { id: 'b', text: 'href' },
          { id: 'c', text: 'link' },
          { id: 'd', text: 'url' },
        ],
      },
      {
        id: 4,
        text: 'Какой тег используется для изображения?',
        options: [
          { id: 'a', text: '<image>' },
          { id: 'b', text: '<img>' },
          { id: 'c', text: '<pic>' },
          { id: 'd', text: '<src>' },
        ],
      },
      {
        id: 5,
        text: 'Какой атрибут обязателен для <img>?',
        options: [
          { id: 'a', text: 'href' },
          { id: 'b', text: 'alt' },
          { id: 'c', text: 'title' },
          { id: 'd', text: 'link' },
        ],
      },
      {
        id: 6,
        text: 'Какой тег используется для абзаца?',
        options: [
          { id: 'a', text: '<paragraph>' },
          { id: 'b', text: '<p>' },
          { id: 'c', text: '<text>' },
          { id: 'd', text: '<span>' },
        ],
      },
      {
        id: 7,
        text: 'Какой тег создаёт нумерованный список?',
        options: [
          { id: 'a', text: '<ul>' },
          { id: 'b', text: '<list>' },
          { id: 'c', text: '<ol>' },
          { id: 'd', text: '<li>' },
        ],
      },
      {
        id: 8,
        text: 'Какой тег используется для элемента списка?',
        options: [
          { id: 'a', text: '<li>' },
          { id: 'b', text: '<ul>' },
          { id: 'c', text: '<ol>' },
          { id: 'd', text: '<item>' },
        ],
      },
      {
        id: 9,
        text: 'Какой тег подключает внешний CSS?',
        options: [
          { id: 'a', text: '<style>' },
          { id: 'b', text: '<css>' },
          { id: 'c', text: '<script>' },
          { id: 'd', text: '<link>' },
        ],
      },
      {
        id: 10,
        text: 'В каком теге размещается мета-информация?',
        options: [
          { id: 'a', text: '<meta>' },
          { id: 'b', text: '<body>' },
          { id: 'c', text: '<head>' },
          { id: 'd', text: '<footer>' },
        ],
      },
      {
        id: 11,
        text: 'Какой тег используется для кнопки?',
        options: [
          { id: 'a', text: '<button>' },
          { id: 'b', text: '<btn>' },
          { id: 'c', text: '<click>' },
          { id: 'd', text: '<input>' },
        ],
      },
      {
        id: 12,
        text: 'Какой тег используется для контейнера блока?',
        options: [
          { id: 'a', text: '<div>' },
          { id: 'b', text: '<block>' },
          { id: 'c', text: '<span>' },
          { id: 'd', text: '<section>' },
        ],
      },
      {
        id: 13,
        text: 'Какой тег используется для жирного текста?',
        options: [
          { id: 'a', text: '<strong>' },
          { id: 'b', text: '<bold>' },
          { id: 'c', text: '<b>' },
          { id: 'd', text: '<em>' },
        ],
      },
      {
        id: 14,
        text: 'Какой тег используется для курсива?',
        options: [
          { id: 'a', text: '<i>' },
          { id: 'b', text: '<italic>' },
          { id: 'c', text: '<em>' },
          { id: 'd', text: '<style>' },
        ],
      },
      {
        id: 15,
        text: 'Какой тег используется для нижнего индекса?',
        options: [
          { id: 'a', text: '<sub>' },
          { id: 'b', text: '<low>' },
          { id: 'c', text: '<bottom>' },
          { id: 'd', text: '<small>' },
        ],
      },
      {
        id: 16,
        text: 'Какой тег используется для верхнего индекса?',
        options: [
          { id: 'a', text: '<sup>' },
          { id: 'b', text: '<up>' },
          { id: 'c', text: '<top>' },
          { id: 'd', text: '<high>' },
        ],
      },
      {
        id: 17,
        text: 'Какой тег создаёт горизонтальную линию?',
        options: [
          { id: 'a', text: '<hr>' },
          { id: 'b', text: '<line>' },
          { id: 'c', text: '<br>' },
          { id: 'd', text: '<divider>' },
        ],
      },
      {
        id: 18,
        text: 'Какой тег используется для переноса строки?',
        options: [
          { id: 'a', text: '<br>' },
          { id: 'b', text: '<lb>' },
          { id: 'c', text: '<break>' },
          { id: 'd', text: '<nl>' },
        ],
      },
      {
        id: 19,
        text: 'Какой тег содержит основное содержимое страницы?',
        options: [
          { id: 'a', text: '<main>' },
          { id: 'b', text: '<content>' },
          { id: 'c', text: '<body>' },
          { id: 'd', text: '<article>' },
        ],
      },
      {
        id: 20,
        text: 'Какой тег содержит навигацию сайта?',
        options: [
          { id: 'a', text: '<nav>' },
          { id: 'b', text: '<menu>' },
          { id: 'c', text: '<navigate>' },
          { id: 'd', text: '<navigation>' },
        ],
      },
      {
        id: 21,
        text: 'Какой тег используется для таблицы?',
        options: [
          { id: 'a', text: '<table>' },
          { id: 'b', text: '<grid>' },
          { id: 'c', text: '<tab>' },
          { id: 'd', text: '<tbody>' },
        ],
      },
      {
        id: 22,
        text: 'Какой тег используется для строки таблицы?',
        options: [
          { id: 'a', text: '<tr>' },
          { id: 'b', text: '<row>' },
          { id: 'c', text: '<td>' },
          { id: 'd', text: '<th>' },
        ],
      },
      {
        id: 23,
        text: 'Какой тег используется для ячейки таблицы?',
        options: [
          { id: 'a', text: '<td>' },
          { id: 'b', text: '<cell>' },
          { id: 'c', text: '<tr>' },
          { id: 'd', text: '<tablecell>' },
        ],
      },
      {
        id: 24,
        text: 'Какой тег используется для заголовка таблицы?',
        options: [
          { id: 'a', text: '<th>' },
          { id: 'b', text: '<thead>' },
          { id: 'c', text: '<title>' },
          { id: 'd', text: '<caption>' },
        ],
      },
      {
        id: 25,
        text: 'Какой тег используется для HTML документа?',
        options: [
          { id: 'a', text: '<html>' },
          { id: 'b', text: '<document>' },
          { id: 'c', text: '<root>' },
          { id: 'd', text: '<page>' },
        ],
      },
    ],
  },
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
