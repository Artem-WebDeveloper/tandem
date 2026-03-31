import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт переводов
import commonEN from './locales/en/common.json';
import commonRU from './locales/ru/common.json';
import dashboardEN from './locales/en/dashboard.json';
import dashboardRU from './locales/ru/dashboard.json';
import libraryEN from './locales/en/library.json';
import libraryRU from './locales/ru/library.json';
import loginEN from './locales/en/login.json';
import loginRU from './locales/ru/login.json';
import practiceEN from './locales/en/practice.json';
import practiceRU from './locales/ru/practice.json';
import notFoundEN from './locales/en/not-found.json';
import notFoundRU from './locales/ru/not-found.json';
import resultsEN from './locales/en/results.json';
import resultsRU from './locales/ru/results.json';

i18n
  .use(LanguageDetector) // автоопределения языка браузера
  .use(initReactI18next) // интеграция с react
  .init({
    resources: {
      en: {
        common: commonEN,
        dashboard: dashboardEN,
        library: libraryEN,
        login: loginEN,
        practice: practiceEN,
        'not-found': notFoundEN,
        results: resultsEN,
      },
      ru: {
        common: commonRU,
        dashboard: dashboardRU,
        library: libraryRU,
        login: loginRU,
        practice: practiceRU,
        'not-found': notFoundRU,
        results: resultsRU,
      },
    },

    fallbackLng: 'ru',

    // Namespace
    defaultNS: 'common',

    interpolation: {
      escapeValue: false, // защищает от XSS с помощью react
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
