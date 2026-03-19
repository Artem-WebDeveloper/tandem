import styles from './CategoryBlock.module.scss';
import { CATEGORY_DATA } from '@/core/mock/dashboard';
import CategoryItem from './CategoryItem/CategoryItem';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';

export default function CategoryBlock() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();
  const categoryData = CATEGORY_DATA;

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

      <ul className={styles.category_list}>
        {categoryData.map((item, index) => (
          <CategoryItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
