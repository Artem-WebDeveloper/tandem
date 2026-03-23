import styles from './CategoryBlock.module.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import { fetchCategoryStatistic } from '@/core/api/dashboardApi/fetchCategoryStatistic';
import { AppError } from '@/core/errors/errors';
import type { CategoryStatistic } from '../types';
import CategoryItem from './CategoryItem/CategoryItem';
import CategorySkeleton from './CategorySkeleton/CategorySkeleton';
import DashboardError from '../DashboardError/DashboardError';

export default function CategoryBlock() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | AppError>(null);
  const [categoryStatistic, setCategoryStatistic] = useState<CategoryStatistic[]>([]);

  useEffect(() => {
    getCategoryStatistic();
  }, []);

  async function getCategoryStatistic() {
    setIsLoading(true);
    setError(null);

    try {
      const data: CategoryStatistic[] = await fetchCategoryStatistic();
      setCategoryStatistic(data);
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

  if (error)
    return (
      <DashboardError
        message={t(`dashboard.error.${error.code}`, error.params)}
        onRetry={getCategoryStatistic}
      />
    );

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: theme.palette.background.paper, boxShadow: theme.shadows[1] }}
    >
      <div className={styles.header}>
        <Typography variant="h3">{t('dashboard.categories.title')}</Typography>
        <Typography variant="body2" sx={{ color: theme.palette.textLight }}>
          {t('dashboard.categories.description')}
        </Typography>
      </div>

      {isLoading ? (
        <CategorySkeleton />
      ) : (
        <ul className={styles.category_list}>
          {categoryStatistic.map((item) => (
            <CategoryItem key={item.theme} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
