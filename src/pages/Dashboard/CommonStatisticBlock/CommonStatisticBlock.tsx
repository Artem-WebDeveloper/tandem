import { quizData } from '@/core/mock/dashboard';
import styles from './CommonStatiscticBlock.module.scss';
import Tile from './Tile/Tile';

export default function CommonStatisticBlock() {
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
      <Tile title="Доступно тестов" count={testsCount} description="Всего доступно для обучения" />
      <Tile
        title="Завершено тестов"
        count={completedTests}
        description="Количество завершенных тестов"
      />
      <Tile
        title="Осталось завершить"
        count={remainTests}
        description="Количество тестов, которые еще не завершены"
      />
      <Tile
        title="Всего попыток"
        count={finishedTests}
        description="Количество попыток в процессе обучения"
      />
    </div>
  );
}
