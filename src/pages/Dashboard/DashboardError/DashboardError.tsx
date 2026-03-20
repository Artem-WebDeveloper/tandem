import styles from './DashboardError.module.scss';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Button, useTheme } from '@mui/material';

function DashboardError({ message, onRetry }: { message: string; onRetry: () => void }) {
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
        Попробовать снова
      </Button>
    </div>
  );
}

export default DashboardError;
