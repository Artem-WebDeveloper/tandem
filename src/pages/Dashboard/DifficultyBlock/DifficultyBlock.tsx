import styles from './DifficultyBlock.module.scss';
import { useEffect, useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import type { DifficultyStatistic } from '../types';
import { fetchDifficultyStatistic } from '@/core/api/dashboardApi/fetchDifficultyStatistic';
import DifficultyItem from './DifficultyItem/DifficultyItem';
import { useTranslation } from 'react-i18next';
import DashboardError from '../DashboardError/DashboardError';
import DifficultySkeleton from './DifficultySkeleton/DifficultySkeleton';

export default function DifficultyBlock() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [difficultyStatistic, setDifficultyStatistic] = useState<DifficultyStatistic[]>([]);

  useEffect(() => {
    getCategoryStatistic();
  }, []);

  async function getCategoryStatistic() {
    setIsLoading(true);
    setError(null);

    try {
      const data: DifficultyStatistic[] = await fetchDifficultyStatistic();
      setDifficultyStatistic(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        throw error;
      }
    } finally {
      setIsLoading(false);
    }
  }

  if (error) return <DashboardError message={error} onRetry={getCategoryStatistic} />;

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
    >
      <Typography variant="h3">{t('dashboard.difficulty.title')}</Typography>

      {isLoading ? (
        <DifficultySkeleton />
      ) : (
        <ul className={styles.difficulty_list}>
          {difficultyStatistic.map((item, index) => (
            <DifficultyItem key={index} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
