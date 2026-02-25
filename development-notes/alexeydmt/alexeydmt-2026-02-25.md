# Quiz, Локализация (i18n)

В задачах GitHub есть нераспределённая задача по локализации проекта.

Решил посмотреть, насколько сложной будет эта задача в реализации.

На митинге обсуждалось использование библиотеки i18n.

Сформировалось понимание базовой архитектуры локализации проекта.

## Install

npm install i18next react-i18next

---

## How will it work?

Общий поток работы:

React Component
↓
useTranslation()
↓
i18next
↓
JSON файлы c переводом
↓
Строка в зависимости от языка

---

### Inner logic

### Structure

Magic namespaces:

- common
- quiz
- dashboard
- library
- errors

files:

src/
  shared/
    i18n/
      index.ts
      locales/
        en/
          common.json
          quiz.json
          dashboard.json
        ru/
          common.json
          quiz.json
          dashboard.json

---

#### Example

en/common.json
{
  "quiz": {
    "start": "Start Quiz",
    "completed": "Completed",
    "questions": "Questions"
  }
}

ru/common.json
{
  "quiz": {
    "start": "Начать тест",
    "completed": "Пройдено",
    "questions": "Вопросы"
  }
}

import { useTranslation } from 'react-i18next';

const QuizButton = () => {
  const { t } = useTranslation();

  return <button>{t('quiz.start')}</button>;
};

- i18next загружает переводы
- Хранит выбранный язык
- Хук useTranslation() предоставляет функцию t()
- t() возвращает строку перевода

---

## Switching lang

import i18n from "./i18n";

i18n.changeLanguage('ru');
i18n.changeLanguage('en');


-i18next обновляет внутренний state
-React перерисовывает компоненты
-t() начинает возвращать строки из ru

## Backend

### Вариант 1

Question {
  id: string;
  translations: {
    ru: QuestionContent;
    en: QuestionContent;
  }
}

Определяется что показывать на фронте

{
  "id": 1,
  "translations": {
    "ru": {
      "text": "Что означает HTML?",
      "options": []
    },
    "en": {
      "text": "What does HTML mean?",
      "options": []
    }
  }
}

### Вариант 2?

приходит с бэка только один вариант, в зависимости от выбранного в меню языка

Тогда возникает проблема при переключении языка. Необходимо перезагружать данные.
В идеале, необходимо блокировать при активном квизе.


## Storage

Где будем хранить?

- localStorage
- берём из браузера
- профиль пользователя (backend)

Предполагаемая логика:

Новый пользователь:
считываем язык браузера => рендерим нужный вариант => сменил язык? => записываем в localeStorage + бэк.

Уже Зарегистрированный пользователь логиниться => берём язык с бэка


## Features of use (пока ни разу не понятно)

Поддержка:
-pluralization
-interpolation
-lazy loading

i18next делает:

-pluralization (1 вопрос / 2 вопроса / 5 вопросов)

-interpolation ({{count}})

-форматирование дат

-lazy loading

-fallback language (язык по умолчанию, если есть проблема с загрузкой текущего)



## Change lang during quiz?

Блокировка? (Запретить смену языка во время теста + popup.)

if (isQuizInProgress) {
  showWarningPopup();
  return;
}

Наверное лучше вообще не давать менять язык при активном квизе. Плохой UE.

---

Весёлая задача, с которой не соскучишься, если проект растёт.
Необходимо, чтобы остальные разработчики тоже использовали эту библиотеку. Но необходимо первоначальная работа, которая создаст базовую структуру с примерами как это работает.
