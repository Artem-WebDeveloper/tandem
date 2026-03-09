import styles from './Dashboard.module.scss';
import Layout from '../../core/components/Layout/Layout';
import CommonStatisticBlock from './CommonStatisticBlock/CommonStatisticBlock';
import CategoryBlock from './CategoryBlock/CategoryBlock';
import DifficultyBlock from './DifficultyBlock/DifficultyBlock';
import { useTranslation } from 'react-i18next';

export default function Dashboard() {
  const { t } = useTranslation('dashboard');
  return (
    <>
      <Layout>
        <h1 className={styles.title}>{t('dashboard.title')}</h1>
        <p>{t('dashboard.description')}</p>
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
