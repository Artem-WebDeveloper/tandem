# Quiz, localization

## Установика в внедрение необходимых библиотек

- i18next
- react-i18next
- i18next-browser-languagedetector


## Предпологаемая структура

/core/i18n/locales/en
/core/i18n/locales/ru

- `common` Кнопки, хэдер, футер `locales/common.json`
- `quiz` квизы `locales/quiz.json`
- `dashboard` Статистика `locales/dashboard.json`
- `library` списки с квизами `locales/library.json`
- `auth` регистрация `locales/auth.json`
- `errors` 404 page `locales/errors.json`

## Создание и внедрение компонента(переключение языка)

`src/core/components/LanguageSwitcher/LanguageSwitcher.tsx`

## Итог

- Установлены необходимые библиотеки
- Создан `LanguageSwitcher.tsx` и добавлен в header
