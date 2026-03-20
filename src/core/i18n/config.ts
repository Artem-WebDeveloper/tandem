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

i18n
  .use(LanguageDetector) // автоопределения языка браузера
  .use(initReactI18next) // интеграция с react
  .init({
    resources: {
      en: {
        common: commonEN,
        dashboard: dashboardEN,
        library: libraryEN,
      },
      ru: {
        common: commonRU,
        dashboard: dashboardRU,
        library: libraryRU,
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
