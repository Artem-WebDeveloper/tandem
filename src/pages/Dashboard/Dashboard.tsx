import styles from './Dashboard.module.scss';
import Layout from '../../core/components/Layout/Layout';
import CommonStatisticBlock from './CommonStatisticBlock/CommonStatisticBlock';
import CategoryBlock from './CategoryBlock/CategoryBlock';
import DifficultyBlock from './DifficultyBlock/DifficultyBlock';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';

export default function Dashboard() {
  const { t } = useTranslation('dashboard');
  const theme = useTheme();

  return (
    <>
      <Layout>
        <Typography variant="h1" className={styles.title}>
          {t('dashboard.title')}
        </Typography>

        <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
          {t('dashboard.description')}
        </Typography>

        <div className={styles.wrapper}>
          <CommonStatisticBlock />
          <CategoryBlock />
          <div className={styles.static_bottom}>
            <DifficultyBlock />
            <div>
              Какая-то статистика/какие-то данные, может быть сделать диаграмму по типу тестов
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
