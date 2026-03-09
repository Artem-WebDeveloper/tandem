import { Link, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

export default function Footer() {
  const { t } = useTranslation('common');
  const theme = useTheme();
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>{year}</span>

      <span className={styles.copyright} style={{ color: theme.palette.textLight }}>
        &copy; {t('footer.copyright')}RainbowUnicorn
      </span>

      <Link
        href="https://rs.school/"
        color="inherit"
        underline="none"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          transition: 'color 0.3s ease',
          '&:hover': {
            color: theme.palette.textLight,
          },
        }}
      >
        RS School
      </Link>
    </footer>
  );
}
