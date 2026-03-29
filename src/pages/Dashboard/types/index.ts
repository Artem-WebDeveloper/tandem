import type { TaskTheme } from '@/core/types/quiz';

export type QuizDifficulty = 1 | 2 | 3;

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

export type DashboardData = {
  general: CommonStatistic;
  by_section: CategoryStatistic[];
  by_difficulty: DifficultyStatistic[];
};
