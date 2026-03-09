import { Button, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LANGUAGES = {
  ru: { flag: 'Ru' },
  en: { flag: 'En' },
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const theme = useTheme();

  const langCode = i18n.language.split('-')[0] as 'ru' | 'en';
  const currentLang = LANGUAGES[langCode] ? langCode : 'en';
  const lang = LANGUAGES[currentLang];

  const toggleLanguage = () => {
    const newLang = currentLang === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outlined"
      size="small"
      sx={{
        textTransform: 'none',
        minWidth: '40px',
        padding: '4px 4px',
        marginLeft: '5px',
        fontSize: '14px',
        fontWeight: 500,
        borderColor: theme.palette.divider,
        color: theme.palette.text.primary,
        '&:hover': {
          borderColor: theme.palette.primary.main,
          backgroundColor: theme.palette.backgroundAccent,
        },
      }}
    >
      {lang.flag}
    </Button>
  );
}
