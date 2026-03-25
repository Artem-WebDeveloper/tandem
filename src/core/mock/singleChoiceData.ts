// MOCK DATA - Single Choice

import { Difficulty, TaskType } from '../types/quiz';
import type { SingleChoiceTaskResponse } from '../feature/SingleChoiceWidget/types';

export const MOCK_SINGLE_CHOICE_DATA: SingleChoiceTaskResponse[] = [
  {
    id: 'sc-001',
    type: TaskType.SingleChoice,
    title: {
      ru: 'Основы HTML',
      en: 'HTML Basics',
    },
    section: 'HTML',
    tags: ['html', 'basics', 'markup'],
    difficulty: Difficulty.Easy,
    time_limit: 5,
    questions: [
      {
        id: 1,
        text: {
          ru: 'Какой тег является корневым для HTML документа?',
          en: 'Which tag is the root element?',
        },
        options: [
          {
            id: 'a',
            text: {
              ru: '<html>',
              en: '<html>',
            },
          },
          {
            id: 'b',
            text: {
              ru: '<body>',
              en: '<body>',
            },
          },
          {
            id: 'c',
            text: {
              ru: '<head>',
              en: '<head>',
            },
          },
          {
            id: 'd',
            text: {
              ru: '<root>',
              en: '<root>',
            },
          },
        ],
      },
      {
        id: 2,
        text: {
          ru: 'Какой тег содержит мета-информацию документа?',
          en: 'Which tag contains meta-information?',
        },
        options: [
          {
            id: 'a',
            text: {
              ru: '<meta>',
              en: '<meta>',
            },
          },
          {
            id: 'b',
            text: {
              ru: '<head>',
              en: '<head>',
            },
          },
          {
            id: 'c',
            text: {
              ru: '<header>',
              en: '<header>',
            },
          },
          {
            id: 'd',
            text: {
              ru: '<info>',
              en: '<info>',
            },
          },
        ],
      },
      {
        id: 3,
        text: {
          ru: 'Какой тег используется для заголовка страницы в браузере?',
          en: 'Which tag is used for the page title in the browser?',
        },
        options: [
          {
            id: 'a',
            text: {
              ru: '<h1>',
              en: '<h1>',
            },
          },
          {
            id: 'b',
            text: {
              ru: '<header>',
              en: '<header>',
            },
          },
          {
            id: 'c',
            text: {
              ru: '<title>',
              en: '<title>',
            },
          },
          {
            id: 'd',
            text: {
              ru: '<meta>',
              en: '<meta>',
            },
          },
        ],
      },
      {
        id: 4,
        text: {
          ru: 'Какой тег используется для основного содержимого страницы?',
          en: 'Which tag is used for the main content of the page?',
        },
        options: [
          {
            id: 'a',
            text: {
              ru: '<section>',
              en: '<section>',
            },
          },
          {
            id: 'b',
            text: {
              ru: '<article>',
              en: '<article>',
            },
          },
          {
            id: 'c',
            text: {
              ru: '<main>',
              en: '<main>',
            },
          },
          {
            id: 'd',
            text: {
              ru: '<body>',
              en: '<body>',
            },
          },
        ],
      },
      {
        id: 5,
        text: {
          ru: 'Какой тег используется для создания ссылки?',
          en: 'Which tag is used to create a link?',
        },
        options: [
          {
            id: 'a',
            text: {
              ru: '<a>',
              en: '<a>',
            },
          },
          {
            id: 'b',
            text: {
              ru: '<link>',
              en: '<link>',
            },
          },
          {
            id: 'c',
            text: {
              ru: '<href>',
              en: '<href>',
            },
          },
          {
            id: 'd',
            text: {
              ru: '<url>',
              en: '<url>',
            },
          },
        ],
      },
    ],
  },
];
