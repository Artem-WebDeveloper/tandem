import '@testing-library/jest-dom';

// Мок для ResizeObserver
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      changeLanguage: () => Promise.resolve(),
      language: 'ru-RU',
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));
