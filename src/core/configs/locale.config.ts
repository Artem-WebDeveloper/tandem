type Locale = 'ru' | 'en';

export let LOCALE: Locale = 'ru';

export const toggleLocale = (language: Locale) => {
  LOCALE = language;
};
