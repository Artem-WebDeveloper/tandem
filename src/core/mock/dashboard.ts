import type { TaskTheme } from '../types/quiz';

export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';

export const COMMON_DATA = {
  testsCount: 30,
  totalAttempts: 116,
  completedTests: 24,
};

export type ThemeCategory = { theme: TaskTheme; tests: number; completedTestsCount: number };

export const CATEGORY_DATA: ThemeCategory[] = [
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

export type DifficultyCategory = {
  difficulty: QuizDifficulty;
  tests: number;
  completedTestsCount: number;
};

export const DIFFICULTY_DATA: DifficultyCategory[] = [
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
