import { useTranslation } from 'react-i18next';

export function useLocale() {
  const { i18n } = useTranslation();
  return i18n.language.slice(0, 2) as 'ru' | 'en';
}
