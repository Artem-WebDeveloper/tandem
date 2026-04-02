# Tandem

**Tandem** — это тренажер для подготовки к собеседованиям и изучения программирования. Приложение помогает пользователям готовиться к техническим собеседованиям с помощью интерактивных виджетов, таких как квизы, задачи на алгоритмы, и многое другое.

### Deploy - https://tandem-iota-puce.vercel.app/

Демонстрация состояний загрузки и обработки ошибок (Week #5 Checkpoint) - https://www.youtube.com/watch?v=s66y0jmoXaM

## Команда

- **[Artem-WebDeveloper](https://github.com/Artem-WebDeveloper)** — Артем
- **[AlexeyDmt](https://github.com/AlexeyDmt)** — Алексей
- **[exppx](https://github.com/exppx)** — Глеб
- **[Igel-k](https://github.com/Igel-k)** — Карина
- **[mightyprinces](https://github.com/mightyprinces)** — Кристина
- **[raenlin](https://github.com/raenlin)** — Дарья, ментор

## Kanban-Board

- **[GitHub Projects](https://github.com/users/Artem-WebDeveloper/projects/2/views/1)**
  ![Board](./devepment-notes/kanban-board.jpg)

## Meeting Notes

- [Note #1](./meeting-notes/meeting-2026-02-15.md)
- [Note #2](./meeting-notes/meeting-2026-02-21.md)
- [Note #3](./meeting-notes/meeting-2026-03-29.md)
- ...

## Структура проекта

```bash
src
│
├── app
│   ├── **App.scss** — Стили для главного компонента приложения
│   ├── **App.tsx** — Главный компонент приложения, в котором определяется структура и Роутинг
│
├── core
│   ├── assets — Статические ресурсы, такие как изображения или SVG файлы
│   │
│   ├── components - Папка для всех компонентов прриложения
│   │   ├── **Footer** — Компонент Footer, используется на каждой странице, кроме /login
│   │   └── **Header** — Компонент Header, используется на каждой странице, кроме /login
│   │   └── **Layout** — Компонент Layout, Обертка для структуры страницы
│   │
│   ├── configs — Конфигурации и константы
│   │
│   ├── store — Zustand хранилище для управления состоянием
│   │
│   └── utils — Утилиты и хелперы
│
├── **index.scss** — Основные стили для всего приложения
├── **main.tsx** — Главный файл, точка входа
│
└── pages
    ├── **Dashboard** — Страница с информацией о пользователе и его статистике
    ├── **Library** — Страница с выбором квизов и тренажёров для подготовки
    ├── **Login** — Страница для логина/регистрации пользователя
    ├── **NotFound** — Страница, показываемая при ошибке 404
    ├── **Practice** — Страница для практических заданий
    └── **Results** — Страница с результатами прохождения тестов
```
