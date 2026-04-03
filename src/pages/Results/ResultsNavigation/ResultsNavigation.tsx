import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './ResultsNavigation.module.scss';
import { Refresh } from '@mui/icons-material';
import { useQuizResultsStore } from '@/core/store/quizResults.store';

export default function ResultsNavigation() {
  const navigate = useNavigate();
  const { t } = useTranslation('results');
  const resetQuizResults = useQuizResultsStore((state) => state.resetQuizResults);

  return (
    <div className={styles.navigation}>
      <Button
        variant="outlined"
        sx={{ flexGrow: '1', lineHeight: '1.2' }}
        onClick={resetQuizResults}
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
