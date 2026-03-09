# Quiz, localization

### Обновлен Файл `src/core/components/LanguageSwitcher/LanguageSwitcher.tsx`

- Нормализация языка (`en-US` → `en`) для кроссбраузерности

```typescript
const langCode = i18n.language.split('-')[0] as 'ru' | 'en';
const currentLang = LANGUAGES[langCode] ? langCode : 'en';
```

Это решает проблему с разными форматами языка в Chrome (`en`) vs Firefox (`en-US`).

### Переводы

**Header/Footer/Navigation:**
- Используется namespace `common`
- Переведены: названия разделов, кнопки, копирайт

**Dashboard:**
- Используется namespace `dashboard`
- Переведены: заголовки, описания блоков статистики, названия категорий

**Проблемы:** Приложение не работало в firefox

**Решение:** Добавлена нормализация языкового кода
```typescript
const langCode = i18n.language.split('-')[0];
```

### Обновлен / завершен перевод

- Header (заголовок, описание, навигация, кнопка "Выход")
- Footer (копирайт)
- Navigation (Дашборд, Библиотека)
- Dashboard (заголовки, блоки статистики, категории)

**УУпрощён код**

Убран неиспользуемый `label` из объекта `LANGUAGES`:
```typescript
const LANGUAGES = {
  ru: { flag: 'Ru' },
  en: { flag: 'En' },
};
```

### TODO

- Добавить переводы для Library (фильтры, карточки)
- Добавить переводы для Quiz UI (кнопки навигации, прогресс)
- Добавить переводы для страницы Practice

### Видео-презентация

🎥 **Feature Component Presentation:** [Localization System](https://youtu.be/7W1CqsvTDWQ)

- Работа переключателя языка
- Архитектура системы локализации
- Интеграция в компоненты
- Использование `useTranslation` hook
