import styles from './CategoryBlock.module.scss';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import type { CategoryStatistic } from '../types';
import CategoryItem from './CategoryItem/CategoryItem';
import CategorySkeleton from './CategorySkeleton/CategorySkeleton';

export default function CategoryBlock({
  data,
  isLoading,
}: {
  data: CategoryStatistic[] | null;
  isLoading: boolean;
}) {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

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

      {isLoading || data === null ? (
        <CategorySkeleton />
      ) : (
        <ul className={styles.category_list}>
          {data.map((item) => (
            <CategoryItem key={item.theme} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}
