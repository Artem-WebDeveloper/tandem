import type { DifficultyCategory } from '../DifficultyBlock';
import styles from './DifficultyItem.module.scss';
import clsx from 'clsx';

export default function DifficultyItem({ item }: { item: DifficultyCategory }) {
  const percentage = (item.completedTestsCount / item.tests) * 100;
  return (
    <li className={styles.difficulty_item}>
      <div className={styles.line}>
        <span
          className={clsx(
            styles.line_filled,
            item.difficulty === 'Medium' && styles.line_filled__medium,
            item.difficulty === 'Hard' && styles.line_filled__hard,
          )}
          style={{
            width: `${percentage}%`,
          }}
        ></span>
      </div>
      <p>{item.difficulty}</p>
    </li>
  );
}
