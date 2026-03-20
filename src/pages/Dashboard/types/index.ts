import type { TaskTheme } from '@/core/types/quiz';

export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';

export type CommonStatistic = {
  testsCount: number | null;
  totalAttempts: number | null;
  completedTests: number | null;
  remainTests: number | null;
};

export type CategoryStatistic = { theme: TaskTheme; tests: number; completedTestsCount: number };

export type DifficultyStatistic = {
  difficulty: QuizDifficulty;
  tests: number;
  completedTestsCount: number;
};
