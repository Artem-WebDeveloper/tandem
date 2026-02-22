import styles from './Dashboard.module.scss';
import Layout from '../../core/components/Layout/Layout';
import CommonStatisticBlock from './CommonStatisticBlock/CommonStatisticBlock';
import CategoryBlock from './CategoryBlock/CategoryBlock';
import DifficultyBlock from './DifficultyBlock/DifficultyBlock';

export default function Dashboard() {
  return (
    <>
      <Layout>
        <h1 className={styles.title}>Dashboard</h1>
        <p>Ваша статистика и прогресс обучения</p>
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
