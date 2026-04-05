import styles from './Dashboard.module.scss';
import Layout from '../../core/components/Layout/Layout';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import { lazy, useEffect, useState } from 'react';
import { fetchDashboardData } from '@/core/api/dashboardApi/fetchDashboardData';
import type { DashboardData } from './types';
import { AppError } from '@/core/errors/errors';
import DashboardFiller from './DashboardFiller/DashboardFiller';

const CommonStatisticBlock = lazy(() => import('./CommonStatisticBlock/CommonStatisticBlock'));
const CategoryBlock = lazy(() => import('./CategoryBlock/CategoryBlock'));
const DifficultyBlock = lazy(() => import('./DifficultyBlock/DifficultyBlock'));
const DashboardError = lazy(() => import('./DashboardError/DashboardError'));

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
            <CommonStatisticBlock isLoading={isLoading} data={dashboardData?.general ?? null} />
            <CategoryBlock isLoading={isLoading} data={dashboardData?.by_section ?? null} />
            <div className={styles.static_bottom}>
              <DifficultyBlock isLoading={isLoading} data={dashboardData?.by_difficulty ?? null} />
              <DashboardFiller />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
