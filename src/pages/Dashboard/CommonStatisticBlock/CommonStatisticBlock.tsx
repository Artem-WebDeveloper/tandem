import styles from './CommonStatisticBlock.module.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ReplayIcon from '@mui/icons-material/Replay';
import Tile from './Tile/Tile';
import { useTranslation } from 'react-i18next';
import type { CommonStatistic } from '../types';
import { fetchCommonStatistic } from '@/core/api/dashboardApi/fetchCommonStatistic';
import DashboardError from '../DashboardError/DashboardError';

export default function CommonStatisticBlock() {
  const { t } = useTranslation('dashboard');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [commonStatistic, setCommonStatistic] = useState<CommonStatistic>({
    testsCount: null,
    totalAttempts: null,
    completedTests: null,
    remainTests: null,
  });

  useEffect(() => {
    getCommonStatistics();
  }, []);

  async function getCommonStatistics() {
    setIsLoading(true);
    setError(null);

    try {
      const data: CommonStatistic = await fetchCommonStatistic();
      setCommonStatistic(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (error) return <DashboardError message={error} onRetry={getCommonStatistics} />;

  return (
    <div className={styles.wrapper}>
      <Tile
        title={t('dashboard.statistics.availableTask.title')}
        icon={<StarIcon color="warning" />}
        color="warning"
        count={commonStatistic.testsCount}
        description={t('dashboard.statistics.availableTask.description')}
        isLoading={isLoading}
      />

      <Tile
        title={t('dashboard.statistics.completedTask.title')}
        icon={<SportsScoreIcon color="success" />}
        color="success"
        description={t('dashboard.statistics.completedTask.description')}
        count={commonStatistic.completedTests}
        isLoading={isLoading}
      />

      <Tile
        title={t('dashboard.statistics.remainingTest.title')}
        icon={<ScheduleIcon color="info" />}
        color="info"
        description={t('dashboard.statistics.remainingTest.description')}
        count={commonStatistic.remainTests}
        isLoading={isLoading}
      />

      <Tile
        title={t('dashboard.statistics.totalAttempts.title')}
        icon={<ReplayIcon color="error" />}
        color="error"
        description={t('dashboard.statistics.totalAttempts.description')}
        count={commonStatistic.totalAttempts}
        isLoading={isLoading}
      />
    </div>
  );
}
