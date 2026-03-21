type Locale = 'ru' | 'en';

export let LOCALE: Locale = 'ru';

export const toggleLocale = () => {
  LOCALE = LOCALE === 'ru' ? 'en' : 'ru';
};
