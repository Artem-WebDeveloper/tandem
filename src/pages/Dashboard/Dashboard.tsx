import styles from './Dashboard.module.scss';
import Layout from '../../core/components/Layout/Layout';
import CommonStatisticBlock from './CommonStatisticBlock/CommonStatisticBlock';
import CategoryBlock from './CategoryBlock/CategoryBlock';
import DifficultyBlock from './DifficultyBlock/DifficultyBlock';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchDashboardData } from '@/core/api/dashboardApi/fetchDashboardData';
import type { DashboardData } from './types';
import { AppError } from '@/core/errors/errors';
import DashboardError from './DashboardError/DashboardError';
import Filler from './Filler/Filler';

export default function Dashboard() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | AppError>(null);
  const [dashboardData, setDashboardData] = useState<null | DashboardData>(null);

  useEffect(() => {
    getDashboardData();
  }, []);

  async function getDashboardData() {
    setIsLoading(true);
    setError(null);

    try {
      const data: DashboardData = await fetchDashboardData();
      setDashboardData(data);
    } catch (error) {
      if (error instanceof AppError) {
        setError(error);
      } else {
        throw error;
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Layout>
      <Typography variant="h1">{t('dashboard.title')}</Typography>

      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        {t('dashboard.description')}
      </Typography>

      <div className={styles.wrapper}>
        {error ? (
          <DashboardError
            message={t(`dashboard.error.${error.code}`, error.params)}
            onRetry={getDashboardData}
          />
        ) : (
          <>
            <CommonStatisticBlock
              isLoading={isLoading}
              data={dashboardData?.commonStatistic ?? null}
            />
            <CategoryBlock isLoading={isLoading} data={dashboardData?.categoryStatistic ?? null} />
            <div className={styles.static_bottom}>
              <DifficultyBlock
                isLoading={isLoading}
                data={dashboardData?.difficultyStatistic ?? null}
              />
              <Filler />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
