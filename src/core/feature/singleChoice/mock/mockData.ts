// MOCK DATA - Single Choice

import { Difficulty, TaskType } from '../../../types/quiz';
import type { SingleChoiceTaskResponse } from '../types';

export const MOCK_SINGLE_CHOICE_DATA: SingleChoiceTaskResponse[] = [
  // HTML EASY - 25 questions
  {
    id: 'sc-html-easy',
    type: TaskType.SingleChoice,
    title: 'HTML Basics',
    section: 'HTML',
    tags: ['html', 'basics', 'markup'],
    difficulty: Difficulty.Easy,

    questions: [
      {
        id: 1,
        text: 'Какой тег является корневым для HTML документа?',
        options: [
          { id: 'a', text: '<html>' },
          { id: 'b', text: '<body>' },
          { id: 'c', text: '<head>' },
          { id: 'd', text: '<root>' },
        ],
      },
      {
        id: 2,
        text: 'Какой тег содержит мета-информацию документа?',
        options: [
          { id: 'a', text: '<meta>' },
          { id: 'b', text: '<head>' },
          { id: 'c', text: '<header>' },
          { id: 'd', text: '<info>' },
        ],
      },
      {
        id: 3,
        text: 'Какой тег используется для заголовка страницы в браузере?',
        options: [
          { id: 'a', text: '<h1>' },
          { id: 'b', text: '<header>' },
          { id: 'c', text: '<title>' },
          { id: 'd', text: '<meta>' },
        ],
      },
      {
        id: 4,
        text: 'Какой тег используется для основного содержимого страницы?',
        options: [
          { id: 'a', text: '<section>' },
          { id: 'b', text: '<article>' },
          { id: 'c', text: '<main>' },
          { id: 'd', text: '<body>' },
        ],
      },
      {
        id: 5,
        text: 'Какой тег используется для создания ссылки?',
        options: [
          { id: 'a', text: '<a>' },
          { id: 'b', text: '<link>' },
          { id: 'c', text: '<href>' },
          { id: 'd', text: '<url>' },
        ],
      },
      {
        id: 6,
        text: 'Какой атрибут определяет путь ссылки?',
        options: [
          { id: 'a', text: 'src' },
          { id: 'b', text: 'href' },
          { id: 'c', text: 'path' },
          { id: 'd', text: 'url' },
        ],
      },
      {
        id: 7,
        text: 'Какой тег используется для изображения?',
        options: [
          { id: 'a', text: '<image>' },
          { id: 'b', text: '<pic>' },
          { id: 'c', text: '<img>' },
          { id: 'd', text: '<src>' },
        ],
      },
      {
        id: 8,
        text: 'Какой атрибут улучшает доступность изображения?',
        options: [
          { id: 'a', text: 'title' },
          { id: 'b', text: 'aria-label' },
          { id: 'c', text: 'description' },
          { id: 'd', text: 'alt' },
        ],
      },
      {
        id: 9,
        text: 'Какой тег используется для абзаца текста?',
        options: [
          { id: 'a', text: '<p>' },
          { id: 'b', text: '<text>' },
          { id: 'c', text: '<paragraph>' },
          { id: 'd', text: '<span>' },
        ],
      },
      {
        id: 10,
        text: 'Какой тег используется для навигации сайта?',
        options: [
          { id: 'a', text: '<menu>' },
          { id: 'b', text: '<nav>' },
          { id: 'c', text: '<aside>' },
          { id: 'd', text: '<navigation>' },
        ],
      },
      {
        id: 11,
        text: 'Какой тег используется для списка с маркерами?',
        options: [
          { id: 'a', text: '<ol>' },
          { id: 'b', text: '<list>' },
          { id: 'c', text: '<ul>' },
          { id: 'd', text: '<li>' },
        ],
      },
      {
        id: 12,
        text: 'Какой тег используется для элемента списка?',
        options: [
          { id: 'a', text: '<item>' },
          { id: 'b', text: '<ulitem>' },
          { id: 'c', text: '<listitem>' },
          { id: 'd', text: '<li>' },
        ],
      },
      {
        id: 13,
        text: 'Какой тег используется для таблицы?',
        options: [
          { id: 'a', text: '<table>' },
          { id: 'b', text: '<tbody>' },
          { id: 'c', text: '<grid>' },
          { id: 'd', text: '<tab>' },
        ],
      },
      {
        id: 14,
        text: 'Какой тег используется для строки таблицы?',
        options: [
          { id: 'a', text: '<td>' },
          { id: 'b', text: '<tr>' },
          { id: 'c', text: '<row>' },
          { id: 'd', text: '<line>' },
        ],
      },
      {
        id: 15,
        text: 'Какой тег используется для ячейки таблицы?',
        options: [
          { id: 'a', text: '<tr>' },
          { id: 'b', text: '<cell>' },
          { id: 'c', text: '<td>' },
          { id: 'd', text: '<data>' },
        ],
      },
      {
        id: 16,
        text: 'Какой тег используется для кнопки?',
        options: [
          { id: 'a', text: '<input>' },
          { id: 'b', text: '<click>' },
          { id: 'c', text: '<btn>' },
          { id: 'd', text: '<button>' },
        ],
      },
      {
        id: 17,
        text: 'Какой атрибут делает поле формы обязательным?',
        options: [
          { id: 'a', text: 'required' },
          { id: 'b', text: 'mandatory' },
          { id: 'c', text: 'validate' },
          { id: 'd', text: 'need' },
        ],
      },
      {
        id: 18,
        text: 'Какой input type используется для email?',
        options: [
          { id: 'a', text: 'mail' },
          { id: 'b', text: 'email' },
          { id: 'c', text: 'text' },
          { id: 'd', text: 'string' },
        ],
      },
      {
        id: 19,
        text: 'Какой тег используется для цитаты (блочной)?',
        options: [
          { id: 'a', text: '<quote>' },
          { id: 'b', text: '<cite>' },
          { id: 'c', text: '<blockquote>' },
          { id: 'd', text: '<q>' },
        ],
      },
      {
        id: 20,
        text: 'Какой тег используется для короткой (строчной) цитаты?',
        options: [
          { id: 'a', text: '<quote>' },
          { id: 'b', text: '<blockquote>' },
          { id: 'c', text: '<cite>' },
          { id: 'd', text: '<q>' },
        ],
      },
      {
        id: 21,
        text: 'Какой тег используется для логически важного (жирного) текста?',
        options: [
          { id: 'a', text: '<strong>' },
          { id: 'b', text: '<b>' },
          { id: 'c', text: '<bold>' },
          { id: 'd', text: '<em>' },
        ],
      },
      {
        id: 22,
        text: 'Какой тег используется для акцентированного (курсивного) текста?',
        options: [
          { id: 'a', text: '<i>' },
          { id: 'b', text: '<em>' },
          { id: 'c', text: '<italic>' },
          { id: 'd', text: '<style>' },
        ],
      },
      {
        id: 23,
        text: 'Какой атрибут отключает элемент формы?',
        options: [
          { id: 'a', text: 'readonly' },
          { id: 'b', text: 'block' },
          { id: 'c', text: 'disabled' },
          { id: 'd', text: 'disable' },
        ],
      },
      {
        id: 24,
        text: 'Какой тег используется для выпадающего списка?',
        options: [
          { id: 'a', text: '<list>' },
          { id: 'b', text: '<dropdown>' },
          { id: 'c', text: '<options>' },
          { id: 'd', text: '<select>' },
        ],
      },
      {
        id: 25,
        text: 'Какой тег используется для пункта выпадающего списка?',
        options: [
          { id: 'a', text: '<option>' },
          { id: 'b', text: '<item>' },
          { id: 'c', text: '<value>' },
          { id: 'd', text: '<selectitem>' },
        ],
      },
    ],
  },
  // HTML MEDUIUM - 20 questions
  {
    id: 'sc-html-medium',
    type: TaskType.SingleChoice,
    title: 'HTML Intermediate',
    section: 'HTML',
    tags: ['html', 'semantic', 'forms', 'media'],
    difficulty: Difficulty.Medium,

    questions: [
      {
        id: 1,
        text: 'Какой тег является семантическим аналогом <div> для навигации?',
        options: [
          { id: 'a', text: '<nav>' },
          { id: 'b', text: '<section>' },
          { id: 'c', text: '<header>' },
          { id: 'd', text: '<div>' },
        ],
      },
      {
        id: 2,
        text: 'Какой тег используется для группировки полей формы?',
        options: [
          { id: 'a', text: '<formgroup>' },
          { id: 'b', text: '<fieldset>' },
          { id: 'c', text: '<group>' },
          { id: 'd', text: '<section>' },
        ],
      },
      {
        id: 3,
        text: 'Какой тег используется для подписи группы полей (fieldset)?',
        options: [
          { id: 'a', text: '<label>' },
          { id: 'b', text: '<caption>' },
          { id: 'c', text: '<legend>' },
          { id: 'd', text: '<title>' },
        ],
      },
      {
        id: 4,
        text: 'Какой атрибут связывает label и input?',
        options: [
          { id: 'a', text: 'bind' },
          { id: 'b', text: 'idref' },
          { id: 'c', text: 'connect' },
          { id: 'd', text: 'for' },
        ],
      },
      {
        id: 5,
        text: 'Какой семантический тег лучше всего подходит для карточки товара или поста?',
        options: [
          { id: 'a', text: '<article>' },
          { id: 'b', text: '<section>' },
          { id: 'c', text: '<div>' },
          { id: 'd', text: '<aside>' },
        ],
      },
      {
        id: 6,
        text: 'Какой тег используется для боковой панели (косвенного контента)?',
        options: [
          { id: 'a', text: '<sidebar>' },
          { id: 'b', text: '<aside>' },
          { id: 'c', text: '<panel>' },
          { id: 'd', text: '<nav>' },
        ],
      },
      {
        id: 7,
        text: 'Какой атрибут позволяет полю ввода получать фокус при загрузке?',
        options: [
          { id: 'a', text: 'focus' },
          { id: 'b', text: 'auto' },
          { id: 'c', text: 'autofocus' },
          { id: 'd', text: 'default' },
        ],
      },
      {
        id: 8,
        text: 'Какой тип input используется для выбора одного значения из списка?',
        options: [
          { id: 'a', text: 'checkbox' },
          { id: 'b', text: 'select' },
          { id: 'c', text: 'text' },
          { id: 'd', text: 'radio' },
        ],
      },
      {
        id: 9,
        text: 'Какой тег используется для вывода прогресса выполнения задачи?',
        options: [
          { id: 'a', text: '<progress>' },
          { id: 'b', text: '<meter>' },
          { id: 'c', text: '<bar>' },
          { id: 'd', text: '<loading>' },
        ],
      },
      {
        id: 10,
        text: 'Какой тег используется для измерения значения в известном диапазоне (например, объем диска)?',
        options: [
          { id: 'a', text: '<progress>' },
          { id: 'b', text: '<meter>' },
          { id: 'c', text: '<range>' },
          { id: 'd', text: '<scale>' },
        ],
      },
      {
        id: 11,
        text: 'Какой атрибут в теге <a> заставляет ссылку открываться в новом окне?',
        options: [
          { id: 'a', text: 'new-tab' },
          { id: 'b', text: 'window' },
          { id: 'c', text: 'target="_blank"' },
          { id: 'd', text: 'rel="external"' },
        ],
      },
      {
        id: 12,
        text: 'Какой тег используется для хранения скриптов, которые не должны исполняться сразу?',
        options: [
          { id: 'a', text: '<noscript>' },
          { id: 'b', text: '<script>' },
          { id: 'c', text: '<code>' },
          { id: 'd', text: '<template>' },
        ],
      },
      {
        id: 13,
        text: 'Какой тег используется для добавления подписи к изображению (внутри figure)?',
        options: [
          { id: 'a', text: '<figcaption>' },
          { id: 'b', text: '<caption>' },
          { id: 'c', text: '<label>' },
          { id: 'd', text: '<description>' },
        ],
      },
      {
        id: 14,
        text: 'Какое значение атрибута type у input превращает его в ползунок?',
        options: [
          { id: 'a', text: 'slider' },
          { id: 'b', text: 'range' },
          { id: 'c', text: 'number' },
          { id: 'd', text: 'scroll' },
        ],
      },
      {
        id: 15,
        text: 'Какой тег позволяет встраивать другие HTML страницы?',
        options: [
          { id: 'a', text: '<embed>' },
          { id: 'b', text: '<object>' },
          { id: 'c', text: '<iframe>' },
          { id: 'd', text: '<frame>' },
        ],
      },
      {
        id: 16,
        text: 'Какой атрибут в теге <video> заставляет его играть бесконечно?',
        options: [
          { id: 'a', text: 'infinity' },
          { id: 'b', text: 'repeat' },
          { id: 'c', text: 'autoplay' },
          { id: 'd', text: 'loop' },
        ],
      },
      {
        id: 17,
        text: 'Какой атрибут позволяет указать несколько источников изображений для разных разрешений?',
        options: [
          { id: 'a', text: 'srcset' },
          { id: 'b', text: 'src-multi' },
          { id: 'c', text: 'sources' },
          { id: 'd', text: 'media' },
        ],
      },
      {
        id: 18,
        text: 'Какой тег используется для выделения текста как "помеченного" (желтый маркер)?',
        options: [
          { id: 'a', text: '<span>' },
          { id: 'b', text: '<mark>' },
          { id: 'c', text: '<highlight>' },
          { id: 'd', text: '<selected>' },
        ],
      },
      {
        id: 19,
        text: 'Какой атрибут предотвращает валидацию формы при отправке?',
        options: [
          { id: 'a', text: 'skip' },
          { id: 'b', text: 'ignore' },
          { id: 'c', text: 'novalidate' },
          { id: 'd', text: 'no-check' },
        ],
      },
      {
        id: 20,
        text: 'Какой тег используется для отображения машинописного кода?',
        options: [
          { id: 'a', text: '<pre>' },
          { id: 'b', text: '<kbd>' },
          { id: 'c', text: '<samp>' },
          { id: 'd', text: '<code>' },
        ],
      },
    ],
  },
  // HTML HARD - 15 questions
  {
    id: 'sc-html-hard',
    type: TaskType.SingleChoice,
    title: 'HTML Advanced',
    section: 'HTML',
    tags: ['html', 'advanced', 'accessibility', 'performance'],
    difficulty: Difficulty.Hard,

    questions: [
      {
        id: 1,
        text: 'Что делает атрибут loading="lazy" у тега <img>?',
        options: [
          { id: 'a', text: 'Загружает изображение только при попадании во viewport' },
          { id: 'b', text: 'Сжимает изображение на лету' },
          { id: 'c', text: 'Отключает загрузку до клика' },
          { id: 'd', text: 'Кэширует картинку в IndexedDB' },
        ],
      },
      {
        id: 2,
        text: 'Какой атрибут тега <script> позволяет выполнять его асинхронно, не блокируя парсинг, но сохраняя порядок выполнения?',
        options: [
          { id: 'a', text: 'async' },
          { id: 'b', text: 'defer' },
          { id: 'c', text: 'wait' },
          { id: 'd', text: 'parallel' },
        ],
      },
      {
        id: 3,
        text: 'Что означает роль ARIA "presentation"?',
        options: [
          { id: 'a', text: 'Создает слайд-шоу' },
          { id: 'b', text: 'Делает элемент интерактивным' },
          { id: 'c', text: 'Скрывает семантический смысл элемента для скринридеров' },
          { id: 'd', text: 'Добавляет стили презентации' },
        ],
      },
      {
        id: 4,
        text: 'Какой тег используется для предоставления альтернативных версий изображения (например, WebP и PNG)?',
        options: [
          { id: 'a', text: '<image>' },
          { id: 'b', text: '<source>' },
          { id: 'c', text: '<canvas>' },
          { id: 'd', text: '<picture>' },
        ],
      },
      {
        id: 5,
        text: 'Какой атрибут используется для описания элемента для скринридеров, если текст не виден глазами?',
        options: [
          { id: 'a', text: 'aria-label' },
          { id: 'b', text: 'title' },
          { id: 'c', text: 'description' },
          { id: 'd', text: 'alt' },
        ],
      },
      {
        id: 6,
        text: 'Что делает атрибут contenteditable?',
        options: [
          { id: 'a', text: 'Разрешает JS доступ к тексту' },
          { id: 'b', text: 'Позволяет пользователю редактировать текст внутри элемента' },
          { id: 'c', text: 'Создает форму из элемента' },
          { id: 'd', text: 'Сохраняет данные в localStorage' },
        ],
      },
      {
        id: 7,
        text: 'Какой атрибут определяет порядок фокуса при нажатии клавиши Tab?',
        options: [
          { id: 'a', text: 'order' },
          { id: 'b', text: 'focus-id' },
          { id: 'c', text: 'tabindex' },
          { id: 'd', text: 'step' },
        ],
      },
      {
        id: 8,
        text: 'Какой тег используется для динамического рисования графики через JS?',
        options: [
          { id: 'a', text: '<svg>' },
          { id: 'b', text: '<draw>' },
          { id: 'c', text: '<graphic>' },
          { id: 'd', text: '<canvas>' },
        ],
      },
      {
        id: 9,
        text: 'Какой атрибут тега <meta> используется для корректного отображения на мобильных устройствах?',
        options: [
          { id: 'a', text: 'name="viewport"' },
          { id: 'b', text: 'charset="UTF-8"' },
          { id: 'c', text: 'http-equiv="X-UA-Compatible"' },
          { id: 'd', text: 'name="mobile"' },
        ],
      },
      {
        id: 10,
        text: 'Что делает тег <base>?',
        options: [
          { id: 'a', text: 'Подключает шрифты' },
          { id: 'b', text: 'Задает базовый URL для всех относительных ссылок на странице' },
          { id: 'c', text: 'Сбрасывает стили браузера' },
          { id: 'd', text: 'Создает контейнер для сетки' },
        ],
      },
      {
        id: 11,
        text: 'Какой атрибут используется для указания машиночитаемой даты в теге <time>?',
        options: [
          { id: 'a', text: 'value' },
          { id: 'b', text: 'date' },
          { id: 'c', text: 'datetime' },
          { id: 'd', text: 'format' },
        ],
      },
      {
        id: 12,
        text: 'Что делает атрибут download в теге <a>?',
        options: [
          { id: 'a', text: 'Открывает окно печати' },
          { id: 'b', text: 'Считает количество кликов' },
          { id: 'c', text: 'Проверяет файл на вирусы' },
          { id: 'd', text: 'Указывает, что файл должен быть скачан, а не открыт' },
        ],
      },
      {
        id: 13,
        text: 'Какой тег используется для группировки нескольких элементов <h1>-<h6>, если они являются подзаголовками одного блока?',
        options: [
          { id: 'a', text: '<hgroup>' },
          { id: 'b', text: '<header>' },
          { id: 'c', text: '<section>' },
          { id: 'd', text: '<div>' },
        ],
      },
      {
        id: 14,
        text: 'Что произойдет, если в теге <script> указать атрибут async?',
        options: [
          { id: 'a', text: 'Скрипт будет загружен в фоне и выполнен сразу после загрузки' },
          { id: 'b', text: 'Скрипт будет выполнен только после парсинга всего DOM' },
          { id: 'c', text: 'Скрипт будет игнорироваться браузером' },
          { id: 'd', text: 'Скрипт будет выполнен синхронно' },
        ],
      },
      {
        id: 15,
        text: 'Какой атрибут тега <html> помогает поисковикам и скринридерам определить основной язык страницы?',
        options: [
          { id: 'a', text: 'charset' },
          { id: 'b', text: 'language' },
          { id: 'c', text: 'lang' },
          { id: 'd', text: 'content' },
        ],
      },
    ],
  },
  // CSS easy - 25 questions
  {
    id: 'sc-css-easy',
    type: TaskType.SingleChoice,
    title: 'CSS Basics',
    section: 'CSS',
    tags: ['css', 'basics', 'styles'],
    difficulty: Difficulty.Easy,
    questions: [
      {
        id: 1,
        text: 'Как правильно подключить внешний CSS файл?',
        options: [
          { id: 'a', text: '<link rel="stylesheet" href="style.css">' },
          { id: 'b', text: '<style src="style.css">' },
          { id: 'c', text: '<css href="style.css">' },
          { id: 'd', text: '<script src="style.css">' },
        ],
      },
      {
        id: 2,
        text: 'Какой символ используется для выбора элементов по классу?',
        options: [
          { id: 'a', text: '#' },
          { id: 'b', text: '.' },
          { id: 'c', text: '@' },
          { id: 'd', text: '*' },
        ],
      },
      {
        id: 3,
        text: 'Какой символ используется для выбора элемента по ID?',
        options: [
          { id: 'a', text: '.' },
          { id: 'b', text: '*' },
          { id: 'c', text: '#' },
          { id: 'd', text: '&' },
        ],
      },
      {
        id: 4,
        text: 'Какое свойство используется для изменения цвета текста?',
        options: [
          { id: 'a', text: 'text-color' },
          { id: 'b', text: 'font-color' },
          { id: 'c', text: 'foreground' },
          { id: 'd', text: 'color' },
        ],
      },
      {
        id: 5,
        text: 'Какое свойство устанавливает цвет фона?',
        options: [
          { id: 'a', text: 'background-color' },
          { id: 'b', text: 'bgcolor' },
          { id: 'c', text: 'background-style' },
          { id: 'd', text: 'color' },
        ],
      },
      {
        id: 6,
        text: 'Какое свойство отвечает за размер шрифта?',
        options: [
          { id: 'a', text: 'text-size' },
          { id: 'b', text: 'font-size' },
          { id: 'c', text: 'size' },
          { id: 'd', text: 'font-height' },
        ],
      },
      {
        id: 7,
        text: 'Как сделать текст жирным в CSS?',
        options: [
          { id: 'a', text: 'font-bold' },
          { id: 'b', text: 'text-bold' },
          { id: 'c', text: 'font-weight: bold' },
          { id: 'd', text: 'weight: bold' },
        ],
      },
      {
        id: 8,
        text: 'Какое свойство задает внутренние отступы элемента?',
        options: [
          { id: 'a', text: 'margin' },
          { id: 'b', text: 'border' },
          { id: 'c', text: 'spacing' },
          { id: 'd', text: 'padding' },
        ],
      },
      {
        id: 9,
        text: 'Какое свойство задает внешние отступы?',
        options: [
          { id: 'a', text: 'margin' },
          { id: 'b', text: 'padding' },
          { id: 'c', text: 'offset' },
          { id: 'd', text: 'space' },
        ],
      },
      {
        id: 10,
        text: 'Какое свойство используется для создания рамки?',
        options: [
          { id: 'a', text: 'outline' },
          { id: 'b', text: 'border' },
          { id: 'c', text: 'stroke' },
          { id: 'd', text: 'edge' },
        ],
      },
      {
        id: 11,
        text: 'Какой селектор выбирает абсолютно все элементы на странице?',
        options: [
          { id: 'a', text: '#' },
          { id: 'b', text: '.' },
          { id: 'c', text: '*' },
          { id: 'd', text: 'all' },
        ],
      },
      {
        id: 12,
        text: 'Как правильно скрыть элемент, чтобы он не занимал место на странице?',
        options: [
          { id: 'a', text: 'visibility: hidden' },
          { id: 'b', text: 'opacity: 0' },
          { id: 'c', text: 'hidden: true' },
          { id: 'd', text: 'display: none' },
        ],
      },
      {
        id: 13,
        text: 'Какое свойство делает углы элемента закругленными?',
        options: [
          { id: 'a', text: 'border-radius' },
          { id: 'b', text: 'corner-radius' },
          { id: 'c', text: 'border-round' },
          { id: 'd', text: 'radius' },
        ],
      },
      {
        id: 14,
        text: 'Какое свойство управляет межстрочным интервалом?',
        options: [
          { id: 'a', text: 'text-height' },
          { id: 'b', text: 'line-height' },
          { id: 'c', text: 'font-height' },
          { id: 'd', text: 'spacing' },
        ],
      },
      {
        id: 15,
        text: 'Какое свойство управляет прозрачностью элемента?',
        options: [
          { id: 'a', text: 'transparency' },
          { id: 'b', text: 'visibility' },
          { id: 'c', text: 'opacity' },
          { id: 'd', text: 'alpha' },
        ],
      },
      {
        id: 16,
        text: 'Как задать тень для блока?',
        options: [
          { id: 'a', text: 'shadow' },
          { id: 'b', text: 'block-shadow' },
          { id: 'c', text: 'element-shadow' },
          { id: 'd', text: 'box-shadow' },
        ],
      },
      {
        id: 17,
        text: 'Какое свойство выравнивает текст по центру?',
        options: [
          { id: 'a', text: 'text-align: center' },
          { id: 'b', text: 'align: center' },
          { id: 'c', text: 'text-position: center' },
          { id: 'd', text: 'content-align: center' },
        ],
      },
      {
        id: 18,
        text: 'Какое свойство используется для смены начертания шрифта (Arial, Roboto)?',
        options: [
          { id: 'a', text: 'font-style' },
          { id: 'b', text: 'font-family' },
          { id: 'c', text: 'font-name' },
          { id: 'd', text: 'text-font' },
        ],
      },
      {
        id: 19,
        text: 'Какой псевдокласс срабатывает при наведении курсора мыши?',
        options: [
          { id: 'a', text: ':focus' },
          { id: 'b', text: ':active' },
          { id: 'c', text: ':hover' },
          { id: 'd', text: ':visited' },
        ],
      },
      {
        id: 20,
        text: 'Какое свойство меняет вид курсора при наведении на элемент?',
        options: [
          { id: 'a', text: 'pointer' },
          { id: 'b', text: 'mouse' },
          { id: 'c', text: 'cursor-style' },
          { id: 'd', text: 'cursor' },
        ],
      },
      {
        id: 21,
        text: 'Какое значение свойства display превращает элемент в блочный?',
        options: [
          { id: 'a', text: 'block' },
          { id: 'b', text: 'inline-block' },
          { id: 'c', text: 'flex' },
          { id: 'd', text: 'grid' },
        ],
      },
      {
        id: 22,
        text: 'Какое свойство убирает подчеркивание у ссылок?',
        options: [
          { id: 'a', text: 'underline: none' },
          { id: 'b', text: 'text-decoration: none' },
          { id: 'c', text: 'link-style: none' },
          { id: 'd', text: 'text-style: none' },
        ],
      },
      {
        id: 23,
        text: 'Какое значение float прижимает элемент к правому краю?',
        options: [
          { id: 'a', text: 'left' },
          { id: 'b', text: 'center' },
          { id: 'c', text: 'right' },
          { id: 'd', text: 'none' },
        ],
      },
      {
        id: 24,
        text: 'Какое свойство задает высоту элемента?',
        options: [
          { id: 'a', text: 'width' },
          { id: 'b', text: 'size' },
          { id: 'c', text: 'length' },
          { id: 'd', text: 'height' },
        ],
      },
      {
        id: 25,
        text: 'Какое свойство задает ширину элемента?',
        options: [
          { id: 'a', text: 'width' },
          { id: 'b', text: 'height' },
          { id: 'c', text: 'breadth' },
          { id: 'd', text: 'size' },
        ],
      },
    ],
  },
  // CSS MEDIUM - 20 questions
  {
    id: 'sc-css-medium',
    type: TaskType.SingleChoice,
    title: 'CSS Intermediate',
    section: 'CSS',
    tags: ['css', 'selectors', 'flexbox', 'grid', 'positioning'],
    difficulty: Difficulty.Medium,
    questions: [
      {
        id: 1,
        text: 'Что произойдет, если у двух CSS правил одинаковая специфичность?',
        options: [
          { id: 'a', text: 'Будет применено последнее объявленное правило' },
          { id: 'b', text: 'Будет применено первое правило' },
          { id: 'c', text: 'Правила объединятся' },
          { id: 'd', text: 'Возникнет ошибка' },
        ],
      },
      {
        id: 2,
        text: 'Что имеет больший приоритет (специфичность) в CSS?',
        options: [
          { id: 'a', text: 'Класс' },
          { id: 'b', text: 'ID' },
          { id: 'c', text: 'Тег' },
          { id: 'd', text: 'Универсальный селектор (*)' },
        ],
      },
      {
        id: 3,
        text: 'Как работает position: relative?',
        options: [
          { id: 'a', text: 'Удаляет элемент из потока' },
          { id: 'b', text: 'Фиксирует элемент относительно окна' },
          { id: 'c', text: 'Смещает элемент относительно его обычного положения в потоке' },
          { id: 'd', text: 'Позиционирует относительно ближайшего родителя' },
        ],
      },
      {
        id: 4,
        text: 'Относительно чего позиционируется элемент с position: absolute?',
        options: [
          { id: 'a', text: 'Относительно окна браузера' },
          { id: 'b', text: 'Относительно родителя с display: block' },
          { id: 'c', text: 'Относительно предыдущего соседа' },
          { id: 'd', text: 'Относительно ближайшего позиционированного предка' },
        ],
      },
      {
        id: 5,
        text: 'Какое свойство заставляет padding и border входить в заданную ширину элемента?',
        options: [
          { id: 'a', text: 'box-sizing: border-box' },
          { id: 'b', text: 'box-sizing: content-box' },
          { id: 'c', text: 'display: inner' },
          { id: 'd', text: 'margin: include' },
        ],
      },
      {
        id: 6,
        text: 'Какое свойство в Flexbox меняет направление осей (строка/столбец)?',
        options: [
          { id: 'a', text: 'flex-wrap' },
          { id: 'b', text: 'flex-direction' },
          { id: 'c', text: 'justify-content' },
          { id: 'd', text: 'align-items' },
        ],
      },
      {
        id: 7,
        text: 'Какое свойство Flexbox выравнивает элементы по главной оси?',
        options: [
          { id: 'a', text: 'align-items' },
          { id: 'b', text: 'align-content' },
          { id: 'c', text: 'justify-content' },
          { id: 'd', text: 'flex-flow' },
        ],
      },
      {
        id: 8,
        text: 'Какое свойство Flexbox выравнивает элементы по поперечной оси?',
        options: [
          { id: 'a', text: 'flex-start' },
          { id: 'b', text: 'justify-items' },
          { id: 'c', text: 'order' },
          { id: 'd', text: 'align-items' },
        ],
      },
      {
        id: 9,
        text: 'Что делает свойство flex-grow: 1?',
        options: [
          { id: 'a', text: 'Позволяет элементу растягиваться, занимая свободное место' },
          { id: 'b', text: 'Запрещает элементу сжиматься' },
          { id: 'c', text: 'Устанавливает базовый размер элемента' },
          { id: 'd', text: 'Меняет порядок элемента' },
        ],
      },
      {
        id: 10,
        text: 'Какое свойство в Flexbox позволяет переносить элементы на новую строку?',
        options: [
          { id: 'a', text: 'flex-flow' },
          { id: 'b', text: 'flex-wrap' },
          { id: 'c', text: 'overflow' },
          { id: 'd', text: 'display: block' },
        ],
      },
      {
        id: 11,
        text: 'Какой псевдокласс выбирает каждый второй дочерний элемент?',
        options: [
          { id: 'a', text: ':last-child' },
          { id: 'b', text: ':even-element' },
          { id: 'c', text: ':nth-child(2n)' },
          { id: 'd', text: ':second-child' },
        ],
      },
      {
        id: 12,
        text: 'Какое свойство управляет наложением элементов друг на друга по вертикали (Z-ось)?',
        options: [
          { id: 'a', text: 'depth' },
          { id: 'b', text: 'layer' },
          { id: 'c', text: 'position' },
          { id: 'd', text: 'z-index' },
        ],
      },
      {
        id: 13,
        text: 'Что делает свойство overflow: hidden?',
        options: [
          { id: 'a', text: 'Обрезает контент, выходящий за границы элемента' },
          { id: 'b', text: 'Добавляет полосы прокрутки' },
          { id: 'c', text: 'Скрывает весь элемент целиком' },
          { id: 'd', text: 'Удаляет отступы' },
        ],
      },
      {
        id: 14,
        text: 'Какая единица измерения в CSS относительна размера шрифта родителя?',
        options: [
          { id: 'a', text: 'rem' },
          { id: 'b', text: 'em' },
          { id: 'c', text: 'px' },
          { id: 'd', text: 'vh' },
        ],
      },
      {
        id: 15,
        text: 'Какая единица измерения относительна размера шрифта корня (html)?',
        options: [
          { id: 'a', text: 'em' },
          { id: 'b', text: '%' },
          { id: 'c', text: 'rem' },
          { id: 'd', text: 'pt' },
        ],
      },
      {
        id: 16,
        text: 'Как расшифровывается селектор "div > p"?',
        options: [
          { id: 'a', text: 'Все p внутри div' },
          { id: 'b', text: 'p, стоящий сразу после div' },
          { id: 'c', text: 'p, являющийся соседом div' },
          { id: 'd', text: 'Только прямые потомки p внутри div' },
        ],
      },
      {
        id: 17,
        text: 'Какое свойство позволяет плавно изменять значения CSS свойств во времени?',
        options: [
          { id: 'a', text: 'transition' },
          { id: 'b', text: 'animation' },
          { id: 'c', text: 'transform' },
          { id: 'd', text: 'speed' },
        ],
      },
      {
        id: 18,
        text: 'Какое свойство используется для трансформаций (поворот, масштабирование)?',
        options: [
          { id: 'a', text: 'change' },
          { id: 'b', text: 'transform' },
          { id: 'c', text: 'rotate' },
          { id: 'd', text: 'scale' },
        ],
      },
      {
        id: 19,
        text: 'Какое свойство CSS Grid задает расстояние между колонками и строками?',
        options: [
          { id: 'a', text: 'margin' },
          { id: 'b', text: 'spacing' },
          { id: 'c', text: 'gap' },
          { id: 'd', text: 'grid-padding' },
        ],
      },
      {
        id: 20,
        text: 'Какое значение position фиксирует элемент относительно окна просмотра даже при скролле?',
        options: [
          { id: 'a', text: 'absolute' },
          { id: 'b', text: 'relative' },
          { id: 'c', text: 'sticky' },
          { id: 'd', text: 'fixed' },
        ],
      },
    ],
  },
  // CSS HARD - 15 question
  {
    id: 'sc-css-hard',
    type: TaskType.SingleChoice,
    title: 'CSS Advanced',
    section: 'CSS',
    tags: ['css', 'specificity', 'bfc', 'stacking-context', 'advanced'],
    difficulty: Difficulty.Hard,
    questions: [
      {
        id: 1,
        text: 'Какой селектор имеет наибольшую специфичность?',
        options: [
          { id: 'a', text: 'style="" (inline)' },
          { id: 'b', text: '#id' },
          { id: 'c', text: '.class' },
          { id: 'd', text: '!important' },
        ],
      },
      {
        id: 2,
        text: 'Что такое BFC (Block Formatting Context)?',
        options: [
          { id: 'a', text: 'Это способ центрирования блоков' },
          {
            id: 'b',
            text: 'Изолированная область верстки, где элементы позиционируются независимо',
          },
          { id: 'c', text: 'Система сеток Bootstrap' },
          { id: 'd', text: 'Формат хранения CSS в памяти' },
        ],
      },
      {
        id: 3,
        text: 'В чем разница между visibility: hidden и display: none?',
        options: [
          { id: 'a', text: 'Разницы нет' },
          { id: 'b', text: 'display: none сохраняет место элемента' },
          { id: 'c', text: 'visibility: hidden скрывает визуально, но сохраняет место в layout' },
          { id: 'd', text: 'display: none работает быстрее' },
        ],
      },
      {
        id: 4,
        text: 'Что делает свойство filter: blur(5px)?',
        options: [
          { id: 'a', text: 'Осветляет изображение' },
          { id: 'b', text: 'Делает элемент черно-белым' },
          { id: 'c', text: 'Обрезает края' },
          { id: 'd', text: 'Размывает содержимое элемента' },
        ],
      },
      {
        id: 5,
        text: 'Какое CSS правило позволяет применять стили в зависимости от размера экрана?',
        options: [
          { id: 'a', text: '@media' },
          { id: 'b', text: '@import' },
          { id: 'c', text: '@font-face' },
          { id: 'd', text: '@keyframes' },
        ],
      },
      {
        id: 6,
        text: 'Что произойдет с z-index элемента, если его родителю задать opacity: 0.9?',
        options: [
          { id: 'a', text: 'Ничего не изменится' },
          { id: 'b', text: 'Элемент создаст новый контекст наложения (stacking context)' },
          { id: 'c', text: 'z-index станет отрицательным' },
          { id: 'd', text: 'Элемент станет невидимым' },
        ],
      },
      {
        id: 7,
        text: 'Какое свойство CSS позволяет обрезать текст многоточием при переполнении?',
        options: [
          { id: 'a', text: 'text-wrap' },
          { id: 'b', text: 'overflow: cut' },
          { id: 'c', text: 'text-overflow: ellipsis' },
          { id: 'd', text: 'word-break' },
        ],
      },
      {
        id: 8,
        text: 'Как расшифровывается CSS единица "vh"?',
        options: [
          { id: 'a', text: 'Vertical Height' },
          { id: 'b', text: 'View Height' },
          { id: 'c', text: 'Video High' },
          { id: 'd', text: 'Viewport Height' },
        ],
      },
      {
        id: 9,
        text: 'Что делает псевдоэлемент ::after?',
        options: [
          { id: 'a', text: 'Вставляет контент после содержимого элемента' },
          { id: 'b', text: 'Выбирает следующий элемент в DOM' },
          { id: 'c', text: 'Срабатывает после клика' },
          { id: 'd', text: 'Добавляет стили в конце файла' },
        ],
      },
      {
        id: 10,
        text: 'Какое свойство позволяет элементам Grid занимать несколько ячеек?',
        options: [
          { id: 'a', text: 'grid-row / grid-column' },
          { id: 'b', text: 'grid-span' },
          { id: 'c', text: 'grid-area-size' },
          { id: 'd', text: 'grid-merge' },
        ],
      },
      {
        id: 11,
        text: 'Что такое специфичность (0, 1, 1, 2) для селектора ".class #id div"?',
        options: [
          { id: 'a', text: '0, 1, 0, 1' },
          { id: 'b', text: '0, 0, 1, 2' },
          { id: 'c', text: '0, 1, 1, 1' },
          { id: 'd', text: '1, 1, 1, 0' },
        ],
      },
      {
        id: 12,
        text: 'Какое свойство используется для реализации CSS переменных?',
        options: [
          { id: 'a', text: 'var-name' },
          { id: 'b', text: '$name' },
          { id: 'c', text: '@variable' },
          { id: 'd', text: '--variable-name' },
        ],
      },
      {
        id: 13,
        text: 'Что делает функция clamp(1rem, 5vw, 2rem)?',
        options: [
          { id: 'a', text: 'Ограничивает значение между минимумом и максимумом' },
          { id: 'b', text: 'Складывает значения' },
          { id: 'c', text: 'Округляет до целого' },
          { id: 'd', text: 'Выбирает случайное значение' },
        ],
      },
      {
        id: 14,
        text: 'Какой псевдокласс выбирает элемент, у которого нет дочерних элементов (даже текста)?',
        options: [
          { id: 'a', text: ':no-child' },
          { id: 'b', text: ':empty' },
          { id: 'c', text: ':blank' },
          { id: 'd', text: ':null' },
        ],
      },
      {
        id: 15,
        text: 'Что делает свойство pointer-events: none?',
        options: [
          { id: 'a', text: 'Меняет курсор на стрелку' },
          { id: 'b', text: 'Скрывает курсор' },
          { id: 'c', text: 'Делает элемент прозрачным для кликов мыши' },
          { id: 'd', text: 'Запрещает выделение текста' },
        ],
      },
    ],
  },
  // JS EASY - 25 questions
  {
    id: 'sc-js-easy',
    type: TaskType.SingleChoice,
    title: 'JavaScript Basics',
    section: 'JavaScript',
    tags: ['javascript', 'basics'],
    difficulty: Difficulty.Easy,
    questions: [
      {
        id: 1,
        text: 'Какой оператор используется для объявления переменной, которую можно переопределить?',
        options: [
          { id: 'a', text: 'let' },
          { id: 'b', text: 'const' },
          { id: 'c', text: 'define' },
          { id: 'd', text: 'fixed' },
        ],
      },
      {
        id: 2,
        text: 'Какой тип данных представляет значение "ничего" или "пусто"?',
        options: [
          { id: 'a', text: 'undefined' },
          { id: 'b', text: 'null' },
          { id: 'c', text: 'zero' },
          { id: 'd', text: 'empty' },
        ],
      },
      {
        id: 3,
        text: 'Как проверить тип переменной в JavaScript?',
        options: [
          { id: 'a', text: 'checkType()' },
          { id: 'b', text: 'isType()' },
          { id: 'c', text: 'typeof' },
          { id: 'd', text: 'instanceof' },
        ],
      },
      {
        id: 4,
        text: 'Какой символ используется для комментариев в одной строке?',
        options: [
          { id: 'a', text: '#' },
          { id: 'b', text: '' },
          { id: 'c', text: '/*' },
          { id: 'd', text: '//' },
        ],
      },
      {
        id: 5,
        text: 'Как вывести сообщение в консоль браузера?',
        options: [
          { id: 'a', text: 'console.log()' },
          { id: 'b', text: 'print()' },
          { id: 'c', text: 'alert()' },
          { id: 'd', text: 'log.write()' },
        ],
      },
      {
        id: 6,
        text: 'Какая функция преобразует строку в целое число?',
        options: [
          { id: 'a', text: 'toNumber()' },
          { id: 'b', text: 'parseInt()' },
          { id: 'c', text: 'parseFloat()' },
          { id: 'd', text: 'Number.cast()' },
        ],
      },
      {
        id: 7,
        text: 'Какой оператор используется для строгого сравнения (по значению и типу)?',
        options: [
          { id: 'a', text: '==' },
          { id: 'b', text: '=' },
          { id: 'c', text: '===' },
          { id: 'd', text: 'equal' },
        ],
      },
      {
        id: 8,
        text: 'Как создать пустой объект?',
        options: [
          { id: 'a', text: 'let obj = []' },
          { id: 'b', text: 'let obj = ()' },
          { id: 'c', text: 'let obj = "obj"' },
          { id: 'd', text: 'let obj = {}' },
        ],
      },
      {
        id: 9,
        text: 'Как добавить элемент в конец массива?',
        options: [
          { id: 'a', text: 'push()' },
          { id: 'b', text: 'pop()' },
          { id: 'c', text: 'shift()' },
          { id: 'd', text: 'unshift()' },
        ],
      },
      {
        id: 10,
        text: 'Какой метод удаляет последний элемент массива?',
        options: [
          { id: 'a', text: 'push()' },
          { id: 'b', text: 'pop()' },
          { id: 'c', text: 'removeLast()' },
          { id: 'd', text: 'delete()' },
        ],
      },
      {
        id: 11,
        text: 'Что делает метод Array.join()?',
        options: [
          { id: 'a', text: 'Разделяет строку на массив' },
          { id: 'b', text: 'Складывает числа в массиве' },
          { id: 'c', text: 'Объединяет все элементы массива в строку' },
          { id: 'd', text: 'Создает копию массива' },
        ],
      },
      {
        id: 12,
        text: 'Какое ключевое слово используется для создания функции?',
        options: [
          { id: 'a', text: 'method' },
          { id: 'b', text: 'def' },
          { id: 'c', text: 'func' },
          { id: 'd', text: 'function' },
        ],
      },
      {
        id: 13,
        text: 'Как называется функция, которая передается в другую функцию в качестве аргумента?',
        options: [
          { id: 'a', text: 'callback' },
          { id: 'b', text: 'call' },
          { id: 'c', text: 'event' },
          { id: 'd', text: 'promise' },
        ],
      },
      {
        id: 14,
        text: 'Какое событие срабатывает при клике на HTML элемент?',
        options: [
          { id: 'a', text: 'onhover' },
          { id: 'b', text: 'onclick' },
          { id: 'c', text: 'onpress' },
          { id: 'd', text: 'onchange' },
        ],
      },
      {
        id: 15,
        text: 'Какой оператор используется для логического "И"?',
        options: [
          { id: 'a', text: '||' },
          { id: 'b', text: '!' },
          { id: 'c', text: '&&' },
          { id: 'd', text: 'and' },
        ],
      },
      {
        id: 16,
        text: 'Какой оператор используется для логического "ИЛИ"?',
        options: [
          { id: 'a', text: '&&' },
          { id: 'b', text: '!' },
          { id: 'c', text: '??' },
          { id: 'd', text: '||' },
        ],
      },
      {
        id: 17,
        text: 'Как получить длину массива или строки?',
        options: [
          { id: 'a', text: '.length' },
          { id: 'b', text: '.size()' },
          { id: 'c', text: '.count' },
          { id: 'd', text: '.len' },
        ],
      },
      {
        id: 18,
        text: 'Как называется цикл, который выполняется фиксированное количество раз?',
        options: [
          { id: 'a', text: 'while' },
          { id: 'b', text: 'for' },
          { id: 'c', text: 'foreach' },
          { id: 'd', text: 'repeat' },
        ],
      },
      {
        id: 19,
        text: 'Как округлить число до ближайшего целого в большую сторону?',
        options: [
          { id: 'a', text: 'Math.floor()' },
          { id: 'b', text: 'Math.round()' },
          { id: 'c', text: 'Math.ceil()' },
          { id: 'd', text: 'Math.top()' },
        ],
      },
      {
        id: 20,
        text: 'Как сгенерировать случайное число от 0 до 1?',
        options: [
          { id: 'a', text: 'random()' },
          { id: 'b', text: 'Math.rand()' },
          { id: 'c', text: 'Math.generate()' },
          { id: 'd', text: 'Math.random()' },
        ],
      },
      {
        id: 21,
        text: 'Как называется глобальный объект в браузере?',
        options: [
          { id: 'a', text: 'window' },
          { id: 'b', text: 'document' },
          { id: 'c', text: 'global' },
          { id: 'd', text: 'root' },
        ],
      },
      {
        id: 22,
        text: 'Какое свойство позволяет менять HTML содержимое элемента через JS?',
        options: [
          { id: 'a', text: 'textValue' },
          { id: 'b', text: 'innerHTML' },
          { id: 'c', text: 'innerContent' },
          { id: 'd', text: 'content' },
        ],
      },
      {
        id: 23,
        text: 'Как называется "чертеж" для создания объектов в современном JS?',
        options: [
          { id: 'a', text: 'prototype' },
          { id: 'b', text: 'object-maker' },
          { id: 'c', text: 'class' },
          { id: 'd', text: 'construct' },
        ],
      },
      {
        id: 24,
        text: 'Что вернет typeof [] (тип массива)?',
        options: [
          { id: 'a', text: 'array' },
          { id: 'b', text: 'list' },
          { id: 'c', text: 'collection' },
          { id: 'd', text: 'object' },
        ],
      },
      {
        id: 25,
        text: 'Как остановить выполнение цикла?',
        options: [
          { id: 'a', text: 'break' },
          { id: 'b', text: 'stop' },
          { id: 'c', text: 'exit' },
          { id: 'd', text: 'return' },
        ],
      },
    ],
  },
  // JS MEDIUM - 20 questions
  {
    id: 'sc-js-medium',
    type: TaskType.SingleChoice,
    title: 'JavaScript Advanced Concepts',
    section: 'JavaScript',
    tags: ['javascript', 'advanced', 'functions', 'async'],
    difficulty: Difficulty.Medium,
    questions: [
      {
        id: 1,
        text: 'Что такое замыкание (closure)?',
        options: [
          { id: 'a', text: 'Функция вместе со своим лексическим окружением' },
          { id: 'b', text: 'Способ удаления переменной из памяти' },
          { id: 'c', text: 'Автоматическое завершение программы' },
          { id: 'd', text: 'Синтаксическая ошибка' },
        ],
      },
      {
        id: 2,
        text: 'В чем разница между let и var?',
        options: [
          { id: 'a', text: 'Разницы нет' },
          { id: 'b', text: 'let имеет блочную область видимости, var — функциональную' },
          { id: 'c', text: 'var нельзя переопределить' },
          { id: 'd', text: 'let работает только в циклах' },
        ],
      },
      {
        id: 3,
        text: 'Что такое поднятие (hoisting)?',
        options: [
          { id: 'a', text: 'Удаление функций из памяти' },
          { id: 'b', text: 'Сортировка массивов по алфавиту' },
          {
            id: 'c',
            text: 'Механизм, при котором объявления переменных и функций перемещаются вверх области видимости',
          },
          { id: 'd', text: 'Увеличение скорости работы браузера' },
        ],
      },
      {
        id: 4,
        text: 'Что делает метод Array.map()?',
        options: [
          { id: 'a', text: 'Сортирует массив' },
          { id: 'b', text: 'Удаляет элементы' },
          { id: 'c', text: 'Выводит массив в консоль' },
          { id: 'd', text: 'Создает новый массив, применяя функцию к каждому элементу' },
        ],
      },
      {
        id: 5,
        text: 'Что делает метод Array.filter()?',
        options: [
          { id: 'a', text: 'Возвращает новый массив с элементами, прошедшими проверку' },
          { id: 'b', text: 'Меняет исходный массив' },
          { id: 'c', text: 'Складывает элементы массива' },
          { id: 'd', text: 'Проверяет тип данных массива' },
        ],
      },
      {
        id: 6,
        text: 'Чем стрелочные функции отличаются от обычных?',
        options: [
          { id: 'a', text: 'Они работают медленнее' },
          { id: 'b', text: 'У них нет своего контекста this' },
          { id: 'c', text: 'Их нельзя использовать в React' },
          { id: 'd', text: 'Они не принимают аргументы' },
        ],
      },
      {
        id: 7,
        text: 'Что такое Promise?',
        options: [
          { id: 'a', text: 'Тип данных для чисел' },
          { id: 'b', text: 'Библиотека для стилей' },
          { id: 'c', text: 'Объект, представляющий результат асинхронной операции' },
          { id: 'd', text: 'Команда для перезагрузки страницы' },
        ],
      },
      {
        id: 8,
        text: 'Что делает оператор spread (...) при копировании объекта?',
        options: [
          { id: 'a', text: 'Создает глубокую копию' },
          { id: 'b', text: 'Удаляет свойства' },
          { id: 'c', text: 'Меняет прототип' },
          { id: 'd', text: 'Создает поверхностную копию свойств' },
        ],
      },
      {
        id: 9,
        text: 'Что вернет выражение 5 + "5"?',
        options: [
          { id: 'a', text: '"55"' },
          { id: 'b', text: '10' },
          { id: 'c', text: 'undefined' },
          { id: 'd', text: 'NaN' },
        ],
      },
      {
        id: 10,
        text: 'Что делает метод Array.reduce()?',
        options: [
          { id: 'a', text: 'Обрезает массив' },
          { id: 'b', text: 'Сворачивает массив в одно значение (агрегация)' },
          { id: 'c', text: 'Ищет элемент в массиве' },
          { id: 'd', text: 'Переворачивает массив' },
        ],
      },
      {
        id: 11,
        text: 'Какое состояние Promise означает успешное выполнение?',
        options: [
          { id: 'a', text: 'pending' },
          { id: 'b', text: 'rejected' },
          { id: 'c', text: 'fulfilled' },
          { id: 'd', text: 'finished' },
        ],
      },
      {
        id: 12,
        text: 'Что такое деструктуризация?',
        options: [
          { id: 'a', text: 'Удаление объекта' },
          { id: 'b', text: 'Преобразование объекта в строку' },
          { id: 'c', text: 'Очистка памяти' },
          { id: 'd', text: 'Синтаксис извлечения данных из массивов или объектов в переменные' },
        ],
      },
      {
        id: 13,
        text: 'Для чего используется async/await?',
        options: [
          { id: 'a', text: 'Для работы с асинхронным кодом в более читаемом виде' },
          { id: 'b', text: 'Для ускорения циклов' },
          { id: 'c', text: 'Для анимаций' },
          { id: 'd', text: 'Для защиты от вирусов' },
        ],
      },
      {
        id: 14,
        text: 'Что делает метод Object.keys()?',
        options: [
          { id: 'a', text: 'Удаляет ключи' },
          { id: 'b', text: 'Возвращает массив ключей объекта' },
          { id: 'c', text: 'Меняет названия свойств' },
          { id: 'd', text: 'Считает количество свойств' },
        ],
      },
      {
        id: 15,
        text: 'Что такое Event Delegation (делегирование событий)?',
        options: [
          { id: 'a', text: 'Отправка события на сервер' },
          { id: 'b', text: 'Удаление слушателей событий' },
          {
            id: 'c',
            text: 'Установка одного обработчика на родителя для управления событиями детей',
          },
          { id: 'd', text: 'Создание новых типов событий' },
        ],
      },
      {
        id: 16,
        text: 'Какое значение имеет this в обычной функции (не в строгом режиме)?',
        options: [
          { id: 'a', text: 'undefined' },
          { id: 'b', text: 'null' },
          { id: 'c', text: 'Объект функции' },
          { id: 'd', text: 'Глобальный объект (window)' },
        ],
      },
      {
        id: 17,
        text: 'Что такое JSON?',
        options: [
          { id: 'a', text: 'Текстовый формат обмена данными' },
          { id: 'b', text: 'Язык программирования' },
          { id: 'c', text: 'Тип базы данных' },
          { id: 'd', text: 'Стиль написания кода' },
        ],
      },
      {
        id: 18,
        text: 'Какой метод превращает JS объект в JSON строку?',
        options: [
          { id: 'a', text: 'JSON.parse()' },
          { id: 'b', text: 'JSON.stringify()' },
          { id: 'c', text: 'JSON.toText()' },
          { id: 'd', text: 'String.cast()' },
        ],
      },
      {
        id: 19,
        text: 'Что делает оператор ?? (nullish coalescing)?',
        options: [
          { id: 'a', text: 'Сравнивает типы данных' },
          { id: 'b', text: 'Логическое "И"' },
          { id: 'c', text: 'Возвращает правый операнд, если левый null или undefined' },
          { id: 'd', text: 'Округляет числа' },
        ],
      },
      {
        id: 20,
        text: 'Как остановить всплытие события?',
        options: [
          { id: 'a', text: 'event.preventDefault()' },
          { id: 'b', text: 'event.cancel()' },
          { id: 'c', text: 'return false' },
          { id: 'd', text: 'event.stopPropagation()' },
        ],
      },
    ],
  },
  // JS HARD - 15 questions
  {
    id: 'sc-js-hard',
    type: TaskType.SingleChoice,
    title: 'JavaScript Deep Dive',
    section: 'JavaScript',
    tags: ['javascript', 'advanced', 'event-loop', 'prototypes'],
    difficulty: Difficulty.Hard,
    questions: [
      {
        id: 1,
        text: 'Что такое Event Loop?',
        options: [
          { id: 'a', text: 'Механизм управления выполнением асинхронного кода' },
          { id: 'b', text: 'Цикл for внутри JS движка' },
          { id: 'c', text: 'Способ рендеринга страницы' },
          { id: 'd', text: 'Бесконечная рекурсия' },
        ],
      },
      {
        id: 2,
        text: 'Что такое микрозадачи (Microtasks)?',
        options: [
          { id: 'a', text: 'Таймеры (setTimeout)' },
          { id: 'b', text: 'Задачи, которые выполняются сразу после текущего скрипта (Promises)' },
          { id: 'c', text: 'События клика' },
          { id: 'd', text: 'Запросы к API' },
        ],
      },
      {
        id: 3,
        text: 'В чем разница между shallow copy и deep copy?',
        options: [
          { id: 'a', text: 'Разницы нет' },
          { id: 'b', text: 'Deep copy копирует только верхние свойства' },
          { id: 'c', text: 'Deep copy рекурсивно копирует все уровни вложенности объектов' },
          { id: 'd', text: 'Shallow copy работает медленнее' },
        ],
      },
      {
        id: 4,
        text: 'Что такое прототипное наследование?',
        options: [
          { id: 'a', text: 'Копирование кода одного файла в другой' },
          { id: 'b', text: 'Использование классов в CSS' },
          { id: 'c', text: 'Метод защиты данных' },
          { id: 'd', text: 'Механизм, при котором объекты наследуют свойства от других объектов' },
        ],
      },
      {
        id: 5,
        text: 'Какая разница между методами .call() и .apply()?',
        options: [
          { id: 'a', text: '.call принимает аргументы через запятую, .apply — массивом' },
          { id: 'b', text: '.apply принимает аргументы через запятую, .call — массивом' },
          { id: 'c', text: 'Они идентичны' },
          { id: 'd', text: '.call используется только для стрелочных функций' },
        ],
      },
      {
        id: 6,
        text: 'Что делает метод .bind()?',
        options: [
          { id: 'a', text: 'Вызывает функцию немедленно' },
          { id: 'b', text: 'Создает новую функцию с привязанным контекстом this' },
          { id: 'c', text: 'Удаляет функцию' },
          { id: 'd', text: 'Связывает два объекта в один' },
        ],
      },
      {
        id: 7,
        text: 'Что такое "Мертвая зона" (Temporal Dead Zone)?',
        options: [
          { id: 'a', text: 'Ошибка в браузере' },
          { id: 'b', text: 'Код после return' },
          { id: 'c', text: 'Период от начала блока до объявления переменной (let/const)' },
          { id: 'd', text: 'Время загрузки страницы' },
        ],
      },
      {
        id: 8,
        text: 'Что такое WeakMap в JavaScript?',
        options: [
          { id: 'a', text: 'Массив с числами' },
          { id: 'b', text: 'Обычный объект' },
          { id: 'c', text: 'Тип данных для строк' },
          { id: 'd', text: 'Коллекция, ключи которой — объекты, не препятствующие сборке мусора' },
        ],
      },
      {
        id: 9,
        text: 'Что делает оператор yield в JavaScript?',
        options: [
          { id: 'a', text: 'Приостанавливает и возобновляет работу функции-генератора' },
          { id: 'b', text: 'Выбрасывает ошибку' },
          { id: 'c', text: 'Ждет ответа от сервера' },
          { id: 'd', text: 'Останавливает все скрипты' },
        ],
      },
      {
        id: 10,
        text: 'Что такое Symbol в JavaScript?',
        options: [
          { id: 'a', text: 'Название функции' },
          { id: 'b', text: 'Уникальный неизменяемый тип данных, используемый как ключи объектов' },
          { id: 'c', text: 'Обычная строка' },
          { id: 'd', text: 'Комментарий' },
        ],
      },
      {
        id: 11,
        text: 'Как работает автоматическая сборка мусора (Garbage Collection)?',
        options: [
          { id: 'a', text: 'Удаляет файлы с диска' },
          { id: 'b', text: 'Перезагружает вкладку' },
          { id: 'c', text: 'Освобождает память от объектов, на которые больше нет ссылок' },
          { id: 'd', text: 'Оптимизирует CSS' },
        ],
      },
      {
        id: 12,
        text: 'Что такое "Strict mode" (строгий режим)?',
        options: [
          { id: 'a', text: 'Режим быстрой работы' },
          { id: 'b', text: 'Режим для мобильных устройств' },
          { id: 'c', text: 'Режим отладки' },
          { id: 'd', text: 'Режим, исправляющий ошибки и запрещающий плохие практики' },
        ],
      },
      {
        id: 13,
        text: 'Что такое BigInt?',
        options: [
          { id: 'a', text: 'Специальный тип для работы с целыми числами произвольной длины' },
          { id: 'b', text: 'Массив из миллиона чисел' },
          { id: 'c', text: 'Функция умножения' },
          { id: 'd', text: 'Глобальный счетчик' },
        ],
      },
      {
        id: 14,
        text: 'В каком порядке выполняются задачи: Microtasks, Macrotasks и Rendering?',
        options: [
          { id: 'a', text: 'Macrotasks -> Rendering -> Microtasks' },
          { id: 'b', text: 'Microtasks -> Rendering -> Macrotasks (в конце итерации цикла)' },
          { id: 'c', text: 'Rendering -> Microtasks -> Macrotasks' },
          { id: 'd', text: 'Порядок случайный' },
        ],
      },
      {
        id: 15,
        text: 'Что такое Proxy в JavaScript?',
        options: [
          { id: 'a', text: 'Серверный посредник' },
          { id: 'b', text: 'Настройка сети' },
          { id: 'c', text: 'Объект для перехвата и изменения операций над другим объектом' },
          { id: 'd', text: 'Тип переменной' },
        ],
      },
    ],
  },
  // TS EASY - 25 questions
  {
    id: 'sc-ts-easy',
    type: TaskType.SingleChoice,
    title: 'TypeScript Basics',
    section: 'TypeScript',
    tags: ['typescript', 'basics', 'types'],
    difficulty: Difficulty.Easy,
    questions: [
      {
        id: 1,
        text: 'Какое расширение имеют файлы TypeScript?',
        options: [
          { id: 'a', text: '.ts' },
          { id: 'b', text: '.js' },
          { id: 'c', text: '.tsx' },
          { id: 'd', text: '.script' },
        ],
      },
      {
        id: 2,
        text: 'Какой тип в TS позволяет переменной принимать абсолютно любое значение?',
        options: [
          { id: 'a', text: 'unknown' },
          { id: 'b', text: 'any' },
          { id: 'c', text: 'all' },
          { id: 'd', text: 'object' },
        ],
      },
      {
        id: 3,
        text: 'Как правильно указать тип массива строк?',
        options: [
          { id: 'a', text: 'Array<string[]>' },
          { id: 'b', text: '[string]' },
          { id: 'c', text: 'string[]' },
          { id: 'd', text: 'str.array' },
        ],
      },
      {
        id: 4,
        text: 'Какой тип возвращает функция, которая ничего не возвращает?',
        options: [
          { id: 'a', text: 'null' },
          { id: 'b', text: 'undefined' },
          { id: 'c', text: 'never' },
          { id: 'd', text: 'void' },
        ],
      },
      {
        id: 5,
        text: 'Какая команда используется для компиляции TS в JS?',
        options: [
          { id: 'a', text: 'tsc' },
          { id: 'b', text: 'npm start' },
          { id: 'c', text: 'node build' },
          { id: 'd', text: 'compile' },
        ],
      },
      {
        id: 6,
        text: 'Кто является основным разработчиком TypeScript?',
        options: [
          { id: 'a', text: 'Google' },
          { id: 'b', text: 'Microsoft' },
          { id: 'c', text: 'Meta' },
          { id: 'd', text: 'Amazon' },
        ],
      },
      {
        id: 7,
        text: 'Как правильно объявить интерфейс User со свойством name?',
        options: [
          { id: 'a', text: 'type User = { name }' },
          { id: 'b', text: 'class User { name: string }' },
          { id: 'c', text: 'interface User { name: string; }' },
          { id: 'd', text: 'def User(name)' },
        ],
      },
      {
        id: 8,
        text: 'Как указать, что переменная может быть либо строкой, либо числом?',
        options: [
          { id: 'a', text: 'string & number' },
          { id: 'b', text: 'string or number' },
          { id: 'c', text: 'string, number' },
          { id: 'd', text: 'string | number' },
        ],
      },
      {
        id: 9,
        text: 'Как называется механизм, проверяющий типы до запуска кода?',
        options: [
          { id: 'a', text: 'Статическая типизация' },
          { id: 'b', text: 'Динамическая типизация' },
          { id: 'c', text: 'Авто-кастинг' },
          { id: 'd', text: 'Линтинг' },
        ],
      },
      {
        id: 10,
        text: 'Какое ключевое слово используется для создания псевдонима (alias) типа?',
        options: [
          { id: 'a', text: 'interface' },
          { id: 'b', text: 'type' },
          { id: 'c', text: 'let' },
          { id: 'd', text: 'alias' },
        ],
      },
      {
        id: 11,
        text: 'Какое значение по умолчанию у первого элемента в числовом Enum?',
        options: [
          { id: 'a', text: '1' },
          { id: 'b', text: 'null' },
          { id: 'c', text: '0' },
          { id: 'd', text: 'undefined' },
        ],
      },
      {
        id: 12,
        text: 'Как сделать свойство в интерфейсе необязательным?',
        options: [
          { id: 'a', text: 'Использовать ключевое слово optional' },
          { id: 'b', text: 'Добавить ! после имени' },
          { id: 'c', text: 'Указать тип any' },
          { id: 'd', text: 'Добавить ? после имени' },
        ],
      },
      {
        id: 13,
        text: 'Что такое TypeScript по отношению к JavaScript?',
        options: [
          { id: 'a', text: 'Надмножество (Superset)' },
          { id: 'b', text: 'Замена (Replacement)' },
          { id: 'c', text: 'Библиотека (Library)' },
          { id: 'd', text: 'Фреймворк (Framework)' },
        ],
      },
      {
        id: 14,
        text: 'Как указать тип объекта, где ключи — строки, а значения — числа?',
        options: [
          { id: 'a', text: 'Object<string, number>' },
          { id: 'b', text: '{ [key: string]: number }' },
          { id: 'c', text: '[string]: number' },
          { id: 'd', text: 'Map<number>' },
        ],
      },
      {
        id: 15,
        text: 'В каком файле обычно хранятся настройки компилятора TS?',
        options: [
          { id: 'a', text: 'package.json' },
          { id: 'b', text: '.eslintrc' },
          { id: 'c', text: 'tsconfig.json' },
          { id: 'd', text: 'ts-rules.xml' },
        ],
      },
      {
        id: 16,
        text: 'Какое ключевое слово используется для наследования интерфейсов?',
        options: [
          { id: 'a', text: 'implements' },
          { id: 'b', text: 'prototype' },
          { id: 'c', text: 'inherits' },
          { id: 'd', text: 'extends' },
        ],
      },
      {
        id: 17,
        text: 'Что делает оператор "as" в TypeScript?',
        options: [
          { id: 'a', text: 'Принудительно утверждает тип (Type Assertion)' },
          { id: 'b', text: 'Создает копию переменной' },
          { id: 'c', text: 'Удаляет переменную' },
          { id: 'd', text: 'Переименовывает тип' },
        ],
      },
      {
        id: 18,
        text: 'Какой тип представляет функцию, которая никогда не завершается (например, бесконечный цикл)?',
        options: [
          { id: 'a', text: 'void' },
          { id: 'b', text: 'never' },
          { id: 'c', text: 'undefined' },
          { id: 'd', text: 'unknown' },
        ],
      },
      {
        id: 19,
        text: 'Какое свойство в tsconfig.json указывает версию JS, в которую будет скомпилирован код?',
        options: [
          { id: 'a', text: 'lib' },
          { id: 'b', text: 'module' },
          { id: 'c', text: 'target' },
          { id: 'd', text: 'outDir' },
        ],
      },
      {
        id: 20,
        text: 'Как объявить кортеж (tuple) из строки и числа?',
        options: [
          { id: 'a', text: '(string | number)' },
          { id: 'b', text: 'Array<string, number>' },
          { id: 'c', text: '{string, number}' },
          { id: 'd', text: '[string, number]' },
        ],
      },
      {
        id: 21,
        text: 'Что произойдет, если попытаться присвоить строку переменной с типом number в TS?',
        options: [
          { id: 'a', text: 'Возникнет ошибка компиляции' },
          { id: 'b', text: 'Программа упадет в рантайме' },
          { id: 'c', text: 'Тип переменной автоматически изменится' },
          { id: 'd', text: 'Значение станет NaN' },
        ],
      },
      {
        id: 22,
        text: 'Какой тип безопаснее использовать вместо any для значений, тип которых мы не знаем заранее?',
        options: [
          { id: 'a', text: 'null' },
          { id: 'b', text: 'unknown' },
          { id: 'c', text: 'undefined' },
          { id: 'd', text: 'object' },
        ],
      },
      {
        id: 23,
        text: 'Как называется файл, содержащий только описания типов (без кода)?',
        options: [
          { id: 'a', text: '.ts.types' },
          { id: 'b', text: '.config.ts' },
          { id: 'c', text: '.d.ts' },
          { id: 'd', text: '.types.js' },
        ],
      },
      {
        id: 24,
        text: 'Как указать тип возвращаемого значения функции?',
        options: [
          { id: 'a', text: 'function name(type) {}' },
          { id: 'b', text: 'function name() as type {}' },
          { id: 'c', text: 'function name() <type> {}' },
          { id: 'd', text: 'function name(): type {}' },
        ],
      },
      {
        id: 25,
        text: 'Какая опция tsconfig.json запрещает неявное использование any?',
        options: [
          { id: 'a', text: 'noImplicitAny' },
          { id: 'b', text: 'strictAny: false' },
          { id: 'c', text: 'denyAny' },
          { id: 'd', text: 'forceType' },
        ],
      },
    ],
  },
  // TS MEDIUM - 20 questions
  {
    id: 'sc-ts-medium',
    type: TaskType.SingleChoice,
    title: 'TypeScript Medium',
    section: 'TypeScript',
    tags: ['typescript', 'medium'],
    difficulty: Difficulty.Medium,
    questions: [
      {
        id: 1,
        text: 'Что такое Generics (Обобщения)?',
        options: [
          {
            id: 'a',
            text: 'Инструмент для создания переиспользуемых компонентов, работающих с разными типами',
          },
          { id: 'b', text: 'Способ генерации случайных чисел' },
          { id: 'c', text: 'Библиотека для работы с API' },
          { id: 'd', text: 'Метод сжатия кода' },
        ],
      },
      {
        id: 2,
        text: 'Как правильно объявить Generic функцию?',
        options: [
          { id: 'a', text: 'function identity(arg: any)' },
          { id: 'b', text: 'function identity<T>(arg: T): T' },
          { id: 'c', text: 'function identity(T arg)' },
          { id: 'd', text: 'function identity[T](arg)' },
        ],
      },
      {
        id: 3,
        text: 'Что делает Utility Type Pick<T, K>?',
        options: [
          { id: 'a', text: 'Делает все свойства обязательными' },
          { id: 'b', text: 'Исключает свойства K из типа T' },
          { id: 'c', text: 'Создает новый тип, выбирая только указанные свойства K из T' },
          { id: 'd', text: 'Выбирает случайное свойство' },
        ],
      },
      {
        id: 4,
        text: 'Что делает Utility Type Partial<T>?',
        options: [
          { id: 'a', text: 'Делает все свойства только для чтения' },
          { id: 'b', text: 'Удаляет все свойства' },
          { id: 'c', text: 'Копирует объект' },
          { id: 'd', text: 'Делает все свойства типа T необязательными' },
        ],
      },
      {
        id: 5,
        text: 'В чем основное отличие interface от type?',
        options: [
          { id: 'a', text: 'Интерфейсы поддерживают декларативное слияние (merging), типы — нет' },
          { id: 'b', text: 'Типы работают быстрее' },
          { id: 'c', text: 'Интерфейсы нельзя использовать в React' },
          { id: 'd', text: 'Различий нет' },
        ],
      },
      {
        id: 6,
        text: 'Что делает оператор keyof?',
        options: [
          { id: 'a', text: 'Возвращает массив значений объекта' },
          { id: 'b', text: 'Создает объединение (union) литеральных типов из ключей объекта' },
          { id: 'c', text: 'Удаляет ключи из интерфейса' },
          { id: 'd', text: 'Проверяет наличие ключа в рантайме' },
        ],
      },
      {
        id: 7,
        text: 'Что делает оператор typeof в контексте типов TS?',
        options: [
          { id: 'a', text: 'Проверяет тип в JS' },
          { id: 'b', text: 'Конвертирует строку в тип' },
          { id: 'c', text: 'Позволяет получить тип существующей переменной или объекта' },
          { id: 'd', text: 'Удаляет тип' },
        ],
      },
      {
        id: 8,
        text: 'Что такое Intersection Types (&)?',
        options: [
          { id: 'a', text: 'Выбор одного из типов' },
          { id: 'b', text: 'Сравнение типов' },
          { id: 'c', text: 'Тип, который содержит только общие свойства' },
          { id: 'd', text: 'Тип, объединяющий свойства нескольких типов в один' },
        ],
      },
      {
        id: 9,
        text: 'Что такое Type Guard (Защитник типа)?',
        options: [
          {
            id: 'a',
            text: 'Функция или выражение, позволяющее сузить тип переменной внутри блока кода',
          },
          { id: 'b', text: 'Антивирус для TypeScript' },
          { id: 'c', text: 'Пароль на файл с типами' },
          { id: 'd', text: 'Метод скрытия данных' },
        ],
      },
      {
        id: 10,
        text: 'Как реализовать интерфейс в классе?',
        options: [
          { id: 'a', text: 'class MyClass extends Interface' },
          { id: 'b', text: 'class MyClass implements Interface' },
          { id: 'c', text: 'class MyClass use Interface' },
          { id: 'd', text: 'Interface(MyClass)' },
        ],
      },
      {
        id: 11,
        text: 'Что такое абстрактный класс?',
        options: [
          { id: 'a', text: 'Класс без методов' },
          { id: 'b', text: 'Класс, который нельзя скомпилировать' },
          {
            id: 'c',
            text: 'Класс, который служит только базой для наследования и от которого нельзя создать экземпляр',
          },
          { id: 'd', text: 'Класс, доступный только внутри модуля' },
        ],
      },
      {
        id: 12,
        text: 'Для чего используется protected?',
        options: [
          { id: 'a', text: 'Свойство доступно только внутри самого класса' },
          { id: 'b', text: 'Свойство доступно всем' },
          { id: 'c', text: 'Свойство доступно только в глобальной области' },
          { id: 'd', text: 'Свойство доступно внутри класса и в его подклассах' },
        ],
      },
      {
        id: 13,
        text: 'Что делает Utility Type Record<K, T>?',
        options: [
          { id: 'a', text: 'Создает тип объекта с ключами типа K и значениями типа T' },
          { id: 'b', text: 'Записывает логи компиляции' },
          { id: 'c', text: 'Удаляет дубликаты из типа' },
          { id: 'd', text: 'Создает массив' },
        ],
      },
      {
        id: 14,
        text: 'Что делает Utility Type Readonly<T>?',
        options: [
          { id: 'a', text: 'Удаляет свойства из объекта' },
          { id: 'b', text: 'Делает все свойства объекта доступными только для чтения' },
          { id: 'c', text: 'Шифрует объект' },
          { id: 'd', text: 'Запрещает чтение объекта' },
        ],
      },
      {
        id: 15,
        text: 'Как получить тип элемента массива T?',
        options: [
          { id: 'a', text: 'T.element' },
          { id: 'b', text: 'typeof T' },
          { id: 'c', text: 'T[number]' },
          { id: 'd', text: 'T.valueType' },
        ],
      },
      {
        id: 16,
        text: 'Что такое Duck Typing?',
        options: [
          { id: 'a', text: 'Типизация только для водоплавающих птиц' },
          { id: 'b', text: 'Строгая проверка имен классов' },
          { id: 'c', text: 'Стиль именования переменных' },
          { id: 'd', text: 'Совместимость типов на основе их структуры' },
        ],
      },
      {
        id: 17,
        text: 'Что делает Utility Type Omit<T, K>?',
        options: [
          { id: 'a', text: 'Создает новый тип на основе T, исключая ключи K' },
          { id: 'b', text: 'Добавляет ключи K в тип T' },
          { id: 'c', text: 'Переименовывает свойства K' },
          { id: 'd', text: 'Делает свойства K обязательными' },
        ],
      },
      {
        id: 18,
        text: 'Какой модификатор доступа делает свойство видимым только внутри класса?',
        options: [
          { id: 'a', text: 'public' },
          { id: 'b', text: 'private' },
          { id: 'c', text: 'protected' },
          { id: 'd', text: 'internal' },
        ],
      },
      {
        id: 19,
        text: 'Как ограничить Generic тип?',
        options: [
          { id: 'a', text: 'T satisfies Base' },
          { id: 'b', text: 'T : Base' },
          { id: 'c', text: 'T extends Base' },
          { id: 'd', text: 'type T = Base' },
        ],
      },
      {
        id: 20,
        text: 'Что такое Enum?',
        options: [
          { id: 'a', text: 'Тип цикла' },
          { id: 'b', text: 'Метод обработки массивов' },
          { id: 'c', text: 'Тип данных для дробных чисел' },
          { id: 'd', text: 'Набор именованных констант' },
        ],
      },
    ],
  },
  // TS HARD - 15 questions
  {
    id: 'sc-ts-hard',
    type: TaskType.SingleChoice,
    title: 'TypeScript Hard',
    section: 'TypeScript',
    tags: ['typescript', 'hard', 'advanced'],
    difficulty: Difficulty.Hard,
    questions: [
      {
        id: 1,
        text: 'Что такое Conditional Types?',
        options: [
          { id: 'a', text: 'Типы, которые выбираются на основе условия (T extends U ? X : Y)' },
          { id: 'b', text: 'Типы для оператора if' },
          { id: 'c', text: 'Типы, которые меняются в рантайме' },
          { id: 'd', text: 'Типы для обработки ошибок' },
        ],
      },
      {
        id: 2,
        text: 'Что делает ключевое слово infer?',
        options: [
          { id: 'a', text: 'Удаляет тип' },
          { id: 'b', text: 'Позволяет объявить переменную типа внутри условия (в условных типах)' },
          { id: 'c', text: 'Проверяет тип на равенство' },
          { id: 'd', text: 'Конвертирует тип в строку' },
        ],
      },
      {
        id: 3,
        text: 'Что такое Mapped Types?',
        options: [
          { id: 'a', text: 'Типы для работы с Google Maps' },
          { id: 'b', text: 'Типы для функций высшего порядка' },
          { id: 'c', text: 'Создание новых типов путем перебора ключей существующего типа' },
          { id: 'd', text: 'Типы для массивов объектов' },
        ],
      },
      {
        id: 4,
        text: 'Что делает Utility Type Exclude<T, U>?',
        options: [
          { id: 'a', text: 'Добавляет U к T' },
          { id: 'b', text: 'Проверяет, входит ли U в T' },
          { id: 'c', text: 'Копирует тип U' },
          { id: 'd', text: 'Исключает из типа T те типы, которые можно назначить типу U' },
        ],
      },
      {
        id: 5,
        text: 'Что делает Utility Type ReturnType<T>?',
        options: [
          { id: 'a', text: 'Получает тип возвращаемого значения функции' },
          { id: 'b', text: 'Вызывает функцию' },
          { id: 'c', text: 'Удаляет return из функции' },
          { id: 'd', text: 'Проверяет наличие return' },
        ],
      },
      {
        id: 6,
        text: 'Что такое Template Literal Types?',
        options: [
          { id: 'a', text: 'Типы для HTML шаблонов' },
          { id: 'b', text: 'Типы, создаваемые на основе шаблонных строк' },
          { id: 'c', text: 'Типы для регулярных выражений' },
          { id: 'd', text: 'Типы для консольных логов' },
        ],
      },
      {
        id: 7,
        text: 'Что делает Utility Type Required<T>?',
        options: [
          { id: 'a', text: 'Удаляет все свойства' },
          { id: 'b', text: 'Делает все свойства необязательными' },
          { id: 'c', text: 'Делает все свойства обязательными' },
          { id: 'd', text: 'Проверяет заполненность объекта' },
        ],
      },
      {
        id: 8,
        text: 'Что такое Discriminated Union?',
        options: [
          { id: 'a', text: 'Объединение типов с разным количеством свойств' },
          { id: 'b', text: 'Способ защиты от дискриминации' },
          { id: 'c', text: 'Массив разных типов' },
          { id: 'd', text: 'Паттерн сужения типов через проверку общего литерального свойства' },
        ],
      },
      {
        id: 9,
        text: 'Как создать пользовательский Type Guard?',
        options: [
          { id: 'a', text: 'function isType(arg: any): arg is MyType' },
          { id: 'b', text: 'function check(arg): MyType' },
          { id: 'c', text: 'type Guard = arg as MyType' },
          { id: 'd', text: 'if (arg instanceof MyType)' },
        ],
      },
      {
        id: 10,
        text: 'Что такое Module Augmentation?',
        options: [
          { id: 'a', text: 'Удаление модулей' },
          { id: 'b', text: 'Добавление объявлений в область видимости существующего модуля' },
          { id: 'c', text: 'Установка npm пакетов' },
          { id: 'd', text: 'Объединение двух файлов в один' },
        ],
      },
      {
        id: 11,
        text: 'Для чего используется override?',
        options: [
          { id: 'a', text: 'Для удаления метода родителя' },
          { id: 'b', text: 'Для создания нового метода' },
          { id: 'c', text: 'Для явного указания переопределения метода базового класса' },
          { id: 'd', text: 'Для запрета переопределения' },
        ],
      },
      {
        id: 12,
        text: 'Что делает утверждение const (as const)?',
        options: [
          { id: 'a', text: 'Делает переменную неизменяемой в JS' },
          { id: 'b', text: 'Удаляет переменную из памяти' },
          { id: 'c', text: 'Оптимизирует код' },
          { id: 'd', text: 'Делает типы литеральными и свойства объекта readonly' },
        ],
      },
      {
        id: 13,
        text: 'Что такое Ambient Modules?',
        options: [
          { id: 'a', text: 'Файлы .d.ts для библиотек без TS' },
          { id: 'b', text: 'Модули для работы со звуком' },
          { id: 'c', text: 'Скрытые модули' },
          { id: 'd', text: 'Модули, которые грузятся асинхронно' },
        ],
      },
      {
        id: 14,
        text: 'Что делает Utility Type NonNullable<T>?',
        options: [
          { id: 'a', text: 'Делает все свойства обязательными' },
          { id: 'b', text: 'Исключает null и undefined' },
          { id: 'c', text: 'Проверяет объект на пустоту' },
          { id: 'd', text: 'Добавляет null к типу' },
        ],
      },
      {
        id: 15,
        text: 'Что такое Variance (ковариантность и контравариантность)?',
        options: [
          { id: 'a', text: 'Изменение версии компилятора' },
          { id: 'b', text: 'Именование переменных' },
          { id: 'c', text: 'Правила совместимости сложных типов' },
          { id: 'd', text: 'Тип ошибки типизации' },
        ],
      },
    ],
  },
  // REACT EASY - 25 questions
  {
    id: 'sc-react-easy',
    type: TaskType.SingleChoice,
    title: 'React Basics',
    section: 'React',
    tags: ['react', 'basics', 'frontend'],
    difficulty: Difficulty.Easy,
    questions: [
      {
        id: 1,
        text: 'Что такое React?',
        options: [
          { id: 'a', text: 'JavaScript-библиотека для создания пользовательских интерфейсов' },
          { id: 'b', text: 'Язык программирования' },
          { id: 'c', text: 'Фреймворк для серверных вычислений' },
          { id: 'd', text: 'База данных' },
        ],
      },
      {
        id: 2,
        text: 'Как называется расширение синтаксиса, позволяющее писать HTML-подобный код в JS?',
        options: [
          { id: 'a', text: 'SASS' },
          { id: 'b', text: 'JSX' },
          { id: 'c', text: 'TSX' },
          { id: 'd', text: 'JSON' },
        ],
      },
      {
        id: 3,
        text: 'Как передаются данные от родительского компонента к дочернему?',
        options: [
          { id: 'a', text: 'Через state' },
          { id: 'b', text: 'Через ссылки (links)' },
          { id: 'c', text: 'Через пропсы (props)' },
          { id: 'd', text: 'Через глобальные переменные' },
        ],
      },
      {
        id: 4,
        text: 'Какой хук используется для управления состоянием в функциональном компоненте?',
        options: [
          { id: 'a', text: 'useEffect' },
          { id: 'b', text: 'useContext' },
          { id: 'c', text: 'useReducer' },
          { id: 'd', text: 'useState' },
        ],
      },
      {
        id: 5,
        text: 'Какое правило хуков является обязательным?',
        options: [
          {
            id: 'a',
            text: 'Хуки можно вызывать только на верхнем уровне функциональных компонентов',
          },
          { id: 'b', text: 'Хуки нужно вызывать внутри циклов' },
          { id: 'c', text: 'Хуки можно использовать в обычных JS функциях' },
          { id: 'd', text: 'Хуки всегда должны возвращать массив' },
        ],
      },
      {
        id: 6,
        text: 'Что делает хук useEffect без массива зависимостей?',
        options: [
          { id: 'a', text: 'Запускается только один раз' },
          { id: 'b', text: 'Запускается после каждого рендера' },
          { id: 'c', text: 'Не запускается вообще' },
          { id: 'd', text: 'Вызывает ошибку' },
        ],
      },
      {
        id: 7,
        text: 'Как создать компонент в React (современный подход)?',
        options: [
          { id: 'a', text: 'Через ключевое слово component' },
          { id: 'b', text: 'Через HTML тег' },
          { id: 'c', text: 'Как обычную функцию, возвращающую JSX' },
          { id: 'd', text: 'Через вызов функции create()' },
        ],
      },
      {
        id: 8,
        text: 'Зачем нужен атрибут "key" при рендеринге списков?',
        options: [
          { id: 'a', text: 'Для стилизации элементов' },
          { id: 'b', text: 'Для обращения к элементу из JS' },
          { id: 'c', text: 'Это просто требование HTML' },
          {
            id: 'd',
            text: 'Чтобы React понимал, какие элементы изменились, добавились или удалились',
          },
        ],
      },
      {
        id: 9,
        text: 'Как правильно обновить состояние state, которое является объектом?',
        options: [
          {
            id: 'a',
            text: 'Создать копию объекта (например, через spread), изменить её и вызвать setState',
          },
          { id: 'b', text: 'Напрямую изменить свойство: state.prop = value' },
          { id: 'c', text: 'Удалить старое состояние и создать новое' },
          { id: 'd', text: 'Использовать JSON.stringify' },
        ],
      },
      {
        id: 10,
        text: 'Что делает команда "npx create-react-app my-app"?',
        options: [
          { id: 'a', text: 'Запускает уже готовый проект' },
          { id: 'b', text: 'Создает новую структуру React проекта с базовыми настройками' },
          { id: 'c', text: 'Удаляет React из системы' },
          { id: 'd', text: 'Публикует проект в интернет' },
        ],
      },
      {
        id: 11,
        text: 'Как отловить событие нажатия на кнопку в React?',
        options: [
          { id: 'a', text: 'onclick="handler()"' },
          { id: 'b', text: 'on-click={handler}' },
          { id: 'c', text: 'onClick={handler}' },
          { id: 'd', text: 'clicked={handler}' },
        ],
      },
      {
        id: 12,
        text: 'Что такое фрагмент (<React.Fragment> или <>)?',
        options: [
          { id: 'a', text: 'Специальный тип цикла' },
          { id: 'b', text: 'Компонент для анимации' },
          { id: 'c', text: 'Инструмент для работы с базой данных' },
          {
            id: 'd',
            text: 'Способ сгруппировать список дочерних элементов без добавления лишних узлов в DOM',
          },
        ],
      },
      {
        id: 13,
        text: 'Какое свойство пропсов позволяет передавать компоненты внутрь других компонентов?',
        options: [
          { id: 'a', text: 'children' },
          { id: 'b', text: 'inner' },
          { id: 'c', text: 'content' },
          { id: 'd', text: 'elements' },
        ],
      },
      {
        id: 14,
        text: 'Как называются компоненты, которые принимают пропсы и возвращают JSX?',
        options: [
          { id: 'a', text: 'Классовые компоненты' },
          { id: 'b', text: 'Функциональные компоненты' },
          { id: 'c', text: 'Серверные компоненты' },
          { id: 'd', text: 'Статические компоненты' },
        ],
      },
      {
        id: 15,
        text: 'Что вернет хук useState?',
        options: [
          { id: 'a', text: 'Только текущее значение' },
          { id: 'b', text: 'Функцию обновления' },
          { id: 'c', text: 'Массив из двух элементов: текущее значение и функция обновления' },
          { id: 'd', text: 'Объект с методами' },
        ],
      },
      {
        id: 16,
        text: 'Как в JSX добавить JS выражение (например, переменную)?',
        options: [
          { id: 'a', text: 'В кавычках "variable"' },
          { id: 'b', text: 'В угловых скобках <variable>' },
          { id: 'c', text: 'В процентах %variable%' },
          { id: 'd', text: 'В фигурных скобках {variable}' },
        ],
      },
      {
        id: 17,
        text: 'Зачем нужен экспорт (export) компонента?',
        options: [
          { id: 'a', text: 'Чтобы его можно было использовать (импортировать) в других файлах' },
          { id: 'b', text: 'Чтобы он отобразился на экране' },
          { id: 'c', text: 'Для ускорения работы кода' },
          { id: 'd', text: 'Для защиты кода от копирования' },
        ],
      },
      {
        id: 18,
        text: 'Какой хук используется для получения доступа к DOM-узлу?',
        options: [
          { id: 'a', text: 'useState' },
          { id: 'b', text: 'useRef' },
          { id: 'c', text: 'useDOM' },
          { id: 'd', text: 'useMemo' },
        ],
      },
      {
        id: 19,
        text: 'Какое название атрибута используется вместо "class" в React?',
        options: [
          { id: 'a', text: 'clazz' },
          { id: 'b', text: 'classes' },
          { id: 'c', text: 'className' },
          { id: 'd', text: 'styleClass' },
        ],
      },
      {
        id: 20,
        text: 'Что будет, если вызвать setState внутри рендера (тела функции) без условий?',
        options: [
          { id: 'a', text: 'Ничего не произойдет' },
          { id: 'b', text: 'Состояние обновится один раз' },
          { id: 'c', text: 'Компонент удалится' },
          { id: 'd', text: 'Произойдет бесконечный цикл ререндеров' },
        ],
      },
      {
        id: 21,
        text: 'Какая библиотека часто используется вместе с React для навигации (роутинга)?',
        options: [
          { id: 'a', text: 'React Router' },
          { id: 'b', text: 'Redux' },
          { id: 'c', text: 'Axios' },
          { id: 'd', text: 'Lodash' },
        ],
      },
      {
        id: 22,
        text: 'Как задать инлайновые стили в React?',
        options: [
          { id: 'a', text: 'style="color: red"' },
          { id: 'b', text: 'style={{ color: "red" }}' },
          { id: 'c', text: 'css={{ red }}' },
          { id: 'd', text: 'inline-style="red"' },
        ],
      },
      {
        id: 23,
        text: 'Что такое Virtual DOM?',
        options: [
          { id: 'a', text: 'Копия реального DOM в облаке' },
          { id: 'b', text: 'Скрытый элемент страницы' },
          { id: 'c', text: 'Легковесная JS-копия реального DOM для оптимизации обновлений' },
          { id: 'd', text: 'Фреймворк для 3D графики' },
        ],
      },
      {
        id: 24,
        text: 'Как называется функция, которая возвращает JSX и начинает называться с большой буквы?',
        options: [
          { id: 'a', text: 'Variable' },
          { id: 'b', text: 'Hook' },
          { id: 'c', text: 'Effect' },
          { id: 'd', text: 'Component' },
        ],
      },
      {
        id: 25,
        text: 'Что произойдет, если в useEffect передать пустой массив зависимостей []?',
        options: [
          { id: 'a', text: 'Эффект выполнится один раз при монтировании' },
          { id: 'b', text: 'Эффект будет выполняться всегда' },
          { id: 'c', text: 'Эффект не выполнится никогда' },
          { id: 'd', text: 'Будет ошибка' },
        ],
      },
    ],
  },
  // REACT MEDIUM - 20 questions
  {
    id: 'sc-react-medium',
    type: TaskType.SingleChoice,
    title: 'React Medium',
    section: 'React',
    tags: ['react', 'hooks', 'context'],
    difficulty: Difficulty.Medium,
    questions: [
      {
        id: 1,
        text: 'Зачем нужен хук useMemo?',
        options: [
          { id: 'a', text: 'Для мемоизации (кеширования) результата тяжелых вычислений' },
          { id: 'b', text: 'Для создания стейта' },
          { id: 'c', text: 'Для работы с API' },
          { id: 'd', text: 'Для изменения стилей' },
        ],
      },
      {
        id: 2,
        text: 'Для чего используется хук useCallback?',
        options: [
          { id: 'a', text: 'Для вызова API' },
          { id: 'b', text: 'Для сохранения ссылки на функцию между рендерами' },
          { id: 'c', text: 'Для обновления пропсов' },
          { id: 'd', text: 'Для работы с таймерами' },
        ],
      },
      {
        id: 3,
        text: 'Что такое React Context?',
        options: [
          { id: 'a', text: 'Способ хранения данных в браузере' },
          { id: 'b', text: 'Библиотека для форм' },
          {
            id: 'c',
            text: 'Способ передачи данных через дерево компонентов без проброса пропсов вручную',
          },
          { id: 'd', text: 'Система сборки проекта' },
        ],
      },
      {
        id: 4,
        text: 'Какую функцию выполняет хук useReducer?',
        options: [
          { id: 'a', text: 'Удаляет компоненты' },
          { id: 'b', text: 'Сжимает изображения' },
          { id: 'c', text: 'Заменяет useEffect' },
          { id: 'd', text: 'Альтернатива useState для управления сложной логикой состояния' },
        ],
      },
      {
        id: 5,
        text: 'Что такое "Поднятие состояния" (Lifting State Up)?',
        options: [
          { id: 'a', text: 'Перемещение общего состояния к ближайшему общему предку' },
          { id: 'b', text: 'Удаление состояния из компонента' },
          { id: 'c', text: 'Использование Redux' },
          { id: 'd', text: 'Обновление версии React' },
        ],
      },
      {
        id: 6,
        text: 'Зачем нужен React.memo?',
        options: [
          { id: 'a', text: 'Для создания анимаций' },
          {
            id: 'b',
            text: 'Для предотвращения ререндера компонента, если его пропсы не изменились',
          },
          { id: 'c', text: 'Для работы с формами' },
          { id: 'd', text: 'Для управления маршрутами' },
        ],
      },
      {
        id: 7,
        text: 'Как правильно выполнить очистку (cleanup) в useEffect?',
        options: [
          { id: 'a', text: 'Вызвать функцию delete()' },
          { id: 'b', text: 'Использовать второй useEffect' },
          { id: 'c', text: 'Вернуть функцию из useEffect' },
          { id: 'd', text: 'Очистка происходит автоматически' },
        ],
      },
      {
        id: 8,
        text: 'В чем разница между контролируемым и неконтролируемым компонентом ввода?',
        options: [
          { id: 'a', text: 'Разницы нет' },
          { id: 'b', text: 'Контролируемые компоненты работают быстрее' },
          { id: 'c', text: 'Неконтролируемые компоненты используют Redux' },
          {
            id: 'd',
            text: 'В контролируемом React управляет значением через state, в неконтролируемом — DOM через ref',
          },
        ],
      },
      {
        id: 9,
        text: 'Что такое "HOC" (Higher-Order Component)?',
        options: [
          { id: 'a', text: 'Функция, которая принимает компонент и возвращает новый компонент' },
          { id: 'b', text: 'Главный компонент приложения' },
          { id: 'c', text: 'Компонент со стилями' },
          { id: 'd', text: 'Тип данных в React' },
        ],
      },
      {
        id: 10,
        text: 'Какую проблему решает использование порталов (Portals)?',
        options: [
          { id: 'a', text: 'Ускоряет загрузку страницы' },
          {
            id: 'b',
            text: 'Позволяет рендерить дочерние элементы в другой части DOM-дерева (например, для модалок)',
          },
          { id: 'c', text: 'Обеспечивает безопасность данных' },
          { id: 'd', text: 'Связывает React с PHP' },
        ],
      },
      {
        id: 11,
        text: 'Какую роль выполняет хук useLayoutEffect?',
        options: [
          { id: 'a', text: 'Аналог useState' },
          { id: 'b', text: 'Запускает анимации в фоне' },
          { id: 'c', text: 'Запускается синхронно после всех мутаций DOM, до отрисовки браузером' },
          { id: 'd', text: 'Используется для серверного рендеринга' },
        ],
      },
      {
        id: 12,
        text: 'Что такое "Custom Hook"?',
        options: [
          { id: 'a', text: 'Хук от сторонней библиотеки' },
          { id: 'b', text: 'Ошибка в коде' },
          { id: 'c', text: 'Системный хук React' },
          {
            id: 'd',
            text: 'Функция, имя которой начинается с "use", позволяющая выносить логику из компонентов',
          },
        ],
      },
      {
        id: 13,
        text: 'Как передать реф (ref) от родителя к дочернему компоненту?',
        options: [
          { id: 'a', text: 'Использовать React.forwardRef' },
          { id: 'b', text: 'Передать как обычный пропс "ref"' },
          { id: 'c', text: 'Через контекст' },
          { id: 'd', text: 'Это невозможно' },
        ],
      },
      {
        id: 14,
        text: 'Что делает React.lazy?',
        options: [
          { id: 'a', text: 'Оптимизирует картинки' },
          { id: 'b', text: 'Позволяет загружать компоненты динамически (ленивая загрузка)' },
          { id: 'c', text: 'Замедляет рендер' },
          { id: 'd', text: 'Удаляет неиспользуемый код' },
        ],
      },
      {
        id: 15,
        text: 'Зачем нужен компонент <Suspense>?',
        options: [
          { id: 'a', text: 'Для обработки ошибок' },
          { id: 'b', text: 'Для стилей' },
          {
            id: 'c',
            text: 'Для отображения запасного интерфейса (fallback), пока грузится ленивый компонент',
          },
          { id: 'd', text: 'Для создания сеток' },
        ],
      },
      {
        id: 16,
        text: 'Как предотвратить поведение по умолчанию (например, перезагрузку формы)?',
        options: [
          { id: 'a', text: 'return false' },
          { id: 'b', text: 'stop()' },
          { id: 'c', text: 'event.halt()' },
          { id: 'd', text: 'event.preventDefault()' },
        ],
      },
      {
        id: 17,
        text: 'Для чего используется хук useImperativeHandle?',
        options: [
          {
            id: 'a',
            text: 'Для настройки того, что будет доступно родителю через ref дочернего компонента',
          },
          { id: 'b', text: 'Для управления формами' },
          { id: 'c', text: 'Для глубокого копирования объектов' },
          { id: 'd', text: 'Для работы с куки' },
        ],
      },
      {
        id: 18,
        text: 'Что такое "render props"?',
        options: [
          { id: 'a', text: 'Стили компонента' },
          {
            id: 'b',
            text: 'Техника совместного использования кода через пропс, значением которого является функция',
          },
          { id: 'c', text: 'Обязательные параметры' },
          { id: 'd', text: 'Метод отрисовки Canvas' },
        ],
      },
      {
        id: 19,
        text: 'Что делает хук useDebugValue?',
        options: [
          { id: 'a', text: 'Выводит ошибки в консоль' },
          { id: 'b', text: 'Останавливает программу' },
          { id: 'c', text: 'Используется для отображения меток кастомных хуков в React DevTools' },
          { id: 'd', text: 'Меняет цвет текста в дебагере' },
        ],
      },
      {
        id: 20,
        text: 'В какой момент жизненного цикла вызывается функция очистки useEffect при размонтировании?',
        options: [
          { id: 'a', text: 'До того как компонент исчезнет из DOM' },
          { id: 'b', text: 'После того как компонент исчезнет из DOM' },
          { id: 'c', text: 'Во время следующего рендера другого компонента' },
          { id: 'd', text: 'Непосредственно перед удалением компонента из UI' },
        ],
      },
    ],
  },
  // REACT HARD - 15 questions
  {
    id: 'sc-react-hard',
    type: TaskType.SingleChoice,
    title: 'React Advanced',
    section: 'React',
    tags: ['react', 'performance', 'fiber', 'ssr'],
    difficulty: Difficulty.Hard,
    questions: [
      {
        id: 1,
        text: 'Что такое "Reconciliation" (Согласование) в React?',
        options: [
          {
            id: 'a',
            text: 'Алгоритм сравнения двух деревьев элементов для определения обновлений DOM',
          },
          { id: 'b', text: 'Процесс установки зависимостей' },
          { id: 'c', text: 'Настройка взаимодействия с сервером' },
          { id: 'd', text: 'Объединение CSS файлов' },
        ],
      },
      {
        id: 2,
        text: 'Что делает Fiber — текущее ядро React?',
        options: [
          { id: 'a', text: 'Ускоряет работу с БД' },
          {
            id: 'b',
            text: 'Позволяет разбивать процесс рендеринга на части и расставлять приоритеты',
          },
          { id: 'c', text: 'Добавляет поддержку Python в JSX' },
          { id: 'd', text: 'Сжимает JS код' },
        ],
      },
      {
        id: 3,
        text: 'Что такое "Error Boundaries" (Предохранители)?',
        options: [
          { id: 'a', text: 'Консольные логи' },
          { id: 'b', text: 'Валидация форм' },
          {
            id: 'c',
            text: 'Компоненты, которые отлавливают JS-ошибки в любом месте своего дерева',
          },
          { id: 'd', text: 'Настройки файрвола' },
        ],
      },
      {
        id: 4,
        text: 'Для чего нужен хук useDeferredValue?',
        options: [
          { id: 'a', text: 'Для удаления значений' },
          { id: 'b', text: 'Для создания таймеров' },
          { id: 'c', text: 'Для работы с сетью' },
          {
            id: 'd',
            text: 'Позволяет отложить обновление тяжелой части UI до завершения важных обновлений',
          },
        ],
      },
      {
        id: 5,
        text: 'Что делает хук useTransition?',
        options: [
          { id: 'a', text: 'Позволяет помечать обновления состояния как несрочные' },
          { id: 'b', text: 'Создает CSS-переходы' },
          { id: 'c', text: 'Переключает страницы' },
          { id: 'd', text: 'Меняет тему приложения' },
        ],
      },
      {
        id: 6,
        text: 'Что такое "Hydration" (Гидратация) в контексте SSR?',
        options: [
          { id: 'a', text: 'Очистка памяти' },
          {
            id: 'b',
            text: 'Процесс "оживления" статической HTML-разметки на клиенте с помощью React',
          },
          { id: 'c', text: 'Загрузка данных в базу' },
          { id: 'd', text: 'Удаление лишних тегов' },
        ],
      },
      {
        id: 7,
        text: 'В чем особенность React Server Components (RSC)?',
        options: [
          { id: 'a', text: 'Они работают только в браузере' },
          { id: 'b', text: 'Они заменяют Redux' },
          { id: 'c', text: 'Они исполняются только на сервере и не отправляют JS-код на клиент' },
          { id: 'd', text: 'Они ускоряют анимации' },
        ],
      },
      {
        id: 8,
        text: 'Что делает хук useSyncExternalStore?',
        options: [
          { id: 'a', text: 'Синхронизирует данные между вкладками' },
          { id: 'b', text: 'Работает с локальным хранилищем' },
          { id: 'c', text: 'Очищает кеш' },
          { id: 'd', text: 'Позволяет подписываться на внешние источники данных синхронно' },
        ],
      },
      {
        id: 9,
        text: 'Что такое Batching в React 18?',
        options: [
          {
            id: 'a',
            text: 'Группировка нескольких обновлений состояния в один рендер для производительности',
          },
          { id: 'b', text: 'Параллельная загрузка скриптов' },
          { id: 'c', text: 'Метод сортировки массивов' },
          { id: 'd', text: 'Способ именования файлов' },
        ],
      },
      {
        id: 10,
        text: 'Зачем нужен хук useInsertionEffect?',
        options: [
          { id: 'a', text: 'Для работы с формами' },
          { id: 'b', text: 'Для вставки стилей библиотеками CSS-in-JS до вычисления макета' },
          { id: 'c', text: 'Для анимации элементов' },
          { id: 'd', text: 'Для добавления классов' },
        ],
      },
      {
        id: 11,
        text: 'Что такое "Synthetic Events" в React?',
        options: [
          { id: 'a', text: 'Искусственные ошибки' },
          { id: 'b', text: 'Тестовые события' },
          { id: 'c', text: 'Кроссбраузерная обертка над нативными событиями браузера' },
          { id: 'd', text: 'События базы данных' },
        ],
      },
      {
        id: 12,
        text: 'В чем разница между хуками и обычными функциями внутри компонента?',
        options: [
          { id: 'a', text: 'Функции работают быстрее' },
          { id: 'b', text: 'Функции нельзя экспортировать' },
          { id: 'c', text: 'Хуки нельзя вызывать в циклах' },
          { id: 'd', text: 'Хуки имеют доступ к жизненному циклу и состоянию React' },
        ],
      },
      {
        id: 13,
        text: 'Что такое "Static Site Generation" (SSG) в экосистеме React?',
        options: [
          { id: 'a', text: 'Генерация HTML-страниц во время сборки проекта' },
          { id: 'b', text: 'Создание стилей' },
          { id: 'c', text: 'Ручное написание HTML' },
          { id: 'd', text: 'Динамический рендер на клиенте' },
        ],
      },
      {
        id: 14,
        text: 'Что делает функция "flushSync"?',
        options: [
          { id: 'a', text: 'Очищает localStorage' },
          { id: 'b', text: 'Принудительно выполняет обновления состояния синхронно' },
          { id: 'c', text: 'Удаляет компоненты' },
          { id: 'd', text: 'Перезагружает страницу' },
        ],
      },
      {
        id: 15,
        text: 'Как работает Strict Mode в React в режиме разработки?',
        options: [
          { id: 'a', text: 'Удаляет все консоль логи' },
          { id: 'b', text: 'Ускоряет приложение' },
          {
            id: 'c',
            text: 'Намеренно дважды вызывает рендер компонентов для поиска побочных эффектов',
          },
          { id: 'd', text: 'Запрещает использование CSS' },
        ],
      },
    ],
  },
];
