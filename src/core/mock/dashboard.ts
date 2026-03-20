import type {
  CommonStatistic,
  DifficultyStatistic,
  CategoryStatistic,
} from '@/pages/Dashboard/types';

export const COMMON_DATA: CommonStatistic = {
  testsCount: 30,
  totalAttempts: 116,
  completedTests: 24,
  remainTests: 6,
};

export const CATEGORY_DATA: CategoryStatistic[] = [
  {
    theme: 'Algorithms',
    tests: 13,
    completedTestsCount: 12,
  },
  {
    theme: 'Core-js',
    tests: 10,
    completedTestsCount: 2,
  },
  {
    theme: 'HTML',
    tests: 20,
    completedTestsCount: 12,
  },
  {
    theme: 'React',
    tests: 15,
    completedTestsCount: 8,
  },
  {
    theme: 'TypeScript',
    tests: 6,
    completedTestsCount: 6,
  },
];

export const DIFFICULTY_DATA: DifficultyStatistic[] = [
  {
    difficulty: 'Easy',
    tests: 23,
    completedTestsCount: 21,
  },
  {
    difficulty: 'Medium',
    tests: 15,
    completedTestsCount: 7,
  },
  {
    difficulty: 'Hard',
    tests: 9,
    completedTestsCount: 2,
  },
];
