import type { ThemeCategory } from '../CategoryBlock';
import styles from './CategoryItem.module.scss';

export default function CategoryItem({ item }: { item: ThemeCategory }) {
  const percentage = (item.completedTestsCount / item.tests) * 100;

  return (
    <li className={styles.category_item}>
      <div className={styles.title}>
        <p>{item.theme}</p>
        <p>
          {item.tests}/{item.completedTestsCount}
        </p>
      </div>
      <div className={styles.line}>
        <span
          className={styles.line_filled}
          style={{
            width: `${percentage}%`,
          }}
        ></span>
      </div>
    </li>
  );
}
