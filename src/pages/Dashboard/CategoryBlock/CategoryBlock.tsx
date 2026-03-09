import { quizData, type QuizTheme } from '@/core/mock/dashboard';
import styles from './CategoryBlock.module.scss';
import CategoryItem from './CategoryItem/CategoryItem';
import { useTranslation } from 'react-i18next';

export type ThemeCategory = { theme: QuizTheme; tests: number; completedTestsCount: number };

export default function CategoryBlock() {
  const { t } = useTranslation('dashboard');
  const categoryObject = quizData.reduce(
    (acc, item) => {
      const theme = item.theme;
      if (!acc[theme]) {
        acc[theme] = { theme, tests: 0, completedTestsCount: 0 };
      }
      acc[theme].tests += 1;
      acc[theme].completedTestsCount += item.correctCompletions !== 0 ? 1 : 0;
      return acc;
    },
    {} as Record<string, ThemeCategory>,
  );

  const categoryData = Object.values(categoryObject);

  return (
    <div className={styles.wrapper}>
      <h3>{t('dashboard.categories.title')}</h3>
      <p>{t('dashboard.categories.description')}</p>
      <ul className={styles.category_list}>
        {categoryData.map((item, index) => (
          <CategoryItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}
