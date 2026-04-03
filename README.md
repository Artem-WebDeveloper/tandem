# Tandem

**Tandem | RS Trainer** — это тренажер для подготовки к собеседованиям и изучения программирования. Приложение помогает пользователям готовиться к техническим собеседованиям с помощью интерактивных виджетов, таких как квизы, задачи на алгоритмы, и многое другое. Включает в себя такие типы тестов как:

- Квиз
- Вставка кода
- Сортировка
- True / False
- Порядок кода

### Deploy - https://tandem-iota-puce.vercel.app/

Демонстрация состояний загрузки и обработки ошибок (Week #5 Checkpoint) - https://www.youtube.com/watch?v=s66y0jmoXaM

## Команда 🦄

- **[Артем](https://github.com/Artem-WebDeveloper) — Team Lead** • 👮 Chief Unicorn Officer | [Diary](./development-notes/artem-webdeveloper/)
- **[Алексей](https://github.com/AlexeyDmt) — Frontend Engineer** • 🔮 Alchemist of Languages & Validation | [Diary](./development-notes/alexeydmt/)
- **[Глеб](https://github.com/exppx) — Frontend Engineer** • 🧙‍♂️ Performance Optimization Wizard | [Diary](./development-notes/exppx/)
- **[Карина](https://github.com/Igel-k) — Backend Engineer** • 🐉 The Database Goddess | [Diary](./development-notes/Igel-k/)
- **[Кристина](https://github.com/mightyprinces) — Frontend Engineer** • 🧚‍♀️ The Fairy of UI | [Diary](./development-notes/mightyprinces/)
- **[Дарья](https://github.com/raenlin) — Best Mentor** • 🌟 The Guiding Star

## Kanban-Board

- **[GitHub Projects](https://github.com/users/Artem-WebDeveloper/projects/2/views/1)**
  ![Board](./development-notes/kanban-board.jpg)

## Meeting Notes

- [Note #1](./meeting-notes/meeting-2026-02-15.md)
- [Note #2](./meeting-notes/meeting-2026-02-21.md)
- [Note #3](./meeting-notes/meeting-2026-03-29.md)
- ...

## Структура проекта

```bash
src
│
├── app — Главный компонент приложения, в котором определяется структура и Роутинг
│
├── core
│   ├── api — API-слой
│   ├── assets — Статические ресурсы: изображения, иконки и SVG-файлы
│   ├── components — Папка для всех компонентов прриложения
│   ├── configs — Конфигурации и константы
│   ├── errors — Обработка ошибок
│   ├── feature — Модули тренажеров: логика и компоненты по типам заданий
│   ├── i18n — Интернационализация: переводы и настройка локализации
│   ├── mock — Моки для работы в Mock-mode
│   ├── store — Zustand хранилище для управления состоянием
│   ├── theme — Настройки UI-темы
│   ├── types — Общие Types и Interfaces в приложении
│   └── utils — Утилиты и хелперы
│
├── pages
│   ├── Dashboard — Страница с информацией о пользователе и его статистике
│   ├── Library — Страница с выбором квизов и тренажёров для подготовки
│   ├── Login — Страница для логина/регистрации пользователя
│   ├── NotFound — Страница, показываемая при ошибке 404
│   ├── Practice — Страница для практических заданий
│   └── Results — Страница с результатами прохождения тестов
│
├── setupTests.ts — Настройка тестового окружения
├── global.scss — Основные стили для всего приложения
└── main.tsx — Точка входа: инициализация и монтирование приложения
```

## Setup

```bash
# Установить зависимости:
npm install

# Запуск в режиме разработки
npm run dev
```
