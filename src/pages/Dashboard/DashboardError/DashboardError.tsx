import styles from './DashboardError.module.scss';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

function DashboardError({ message, onRetry }: { message: string; onRetry: () => void }) {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  return (
    <div
      className={styles.container}
      style={{ borderColor: theme.palette.error.dark, backgroundColor: theme.palette.error.light }}
    >
      <div className={styles.message} style={{ color: theme.palette.error.dark }}>
        <ErrorOutlineIcon />
        <p>{message}</p>
      </div>
      <Button variant="contained" color="error" onClick={onRetry} className={styles.retryButton}>
        {t('dashboard.error.button')}
      </Button>
    </div>
  );
}

export default DashboardError;
