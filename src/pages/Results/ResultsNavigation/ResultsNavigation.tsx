import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './ResultsNavigation.module.scss';
import { Refresh } from '@mui/icons-material';

export default function ResultsNavigation({ onRetry }: { onRetry: () => void }) {
  const navigate = useNavigate();
  const { t } = useTranslation('results');

  return (
    <div className={styles.navigation}>
      <Button
        variant="outlined"
        sx={{ flexGrow: '1', lineHeight: '1.2' }}
        onClick={onRetry}
        startIcon={<Refresh sx={{ fontSize: 18 }} />}
      >
        {t('tryAgain')}
      </Button>

      <Button
        variant="contained"
        sx={{ flexGrow: '1', lineHeight: '1.2' }}
        onClick={() => navigate(`/library`)}
      >
        {t('backToTests')}
      </Button>
    </div>
  );
}
