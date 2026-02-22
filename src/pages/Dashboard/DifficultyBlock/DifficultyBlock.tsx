import styles from './DifficultyBlock.module.scss';

import { quizData, type QuizDifficulty } from '../../../core/mock/dashboard';
import DifficultyItem from './DifficultyItem/DifficultyItem';

export type DifficultyCategory = {
  difficulty: QuizDifficulty;
  tests: number;
  completedTestsCount: number;
};

export default function DifficultyBlock() {
  const difficultyObject = quizData.reduce(
    (acc, item) => {
      const difficulty = item.difficulty;
      if (!acc[difficulty]) {
        acc[difficulty] = { difficulty, tests: 0, completedTestsCount: 0 };
      }
      acc[difficulty].tests += 1;
      acc[difficulty].completedTestsCount += item.correctCompletions !== 0 ? 1 : 0;
      return acc;
    },
    {} as Record<string, DifficultyCategory>,
  );

  const difficultyData = Object.values(difficultyObject);

  return (
    <div className={styles.wrapper}>
      <h3>Прогресс по сложности</h3>
      <ul className={styles.difficulty_list}>
        {difficultyData.map((item, index) => (
          <DifficultyItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
