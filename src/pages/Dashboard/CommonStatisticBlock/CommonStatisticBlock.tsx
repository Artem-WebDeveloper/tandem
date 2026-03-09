import { quizData } from '@/core/mock/dashboard';
import styles from './CommonStatiscticBlock.module.scss';
import Tile from './Tile/Tile';
import { useTranslation } from 'react-i18next';

export default function CommonStatisticBlock() {
  const { t } = useTranslation('dashboard');
  const finishedTests = quizData.reduce((count, item) => {
    return (count += item.totalCompletions);
  }, 0);
  const testsCount = quizData.length;
  const completedTests = quizData.reduce(
    (count, item) => (item.correctCompletions !== 0 ? count + 1 : count),
    0,
  );
  const remainTests = testsCount - completedTests;
  return (
    <div className={styles.wrapper}>
      <Tile
        title={t('dashboard.statistics.availableTask.title')}
        count={testsCount}
        description={t('dashboard.statistics.availableTask.description')}
      />
      <Tile
        title={t('dashboard.statistics.completedTask.title')}
        count={completedTests}
        description={t('dashboard.statistics.completedTask.description')}
      />
      <Tile
        title={t('dashboard.statistics.remainingTest.title')}
        count={remainTests}
        description={t('dashboard.statistics.remainingTest.description')}
      />
      <Tile
        title={t('dashboard.statistics.totalAttempts.title')}
        count={finishedTests}
        description={t('dashboard.statistics.totalAttempts.description')}
      />
    </div>
  );
}
