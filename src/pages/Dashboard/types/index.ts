import type { TaskTheme } from '@/core/types/quiz';

export type QuizDifficulty = 'Easy' | 'Medium' | 'Hard';

export type ThemeCategory = { theme: TaskTheme; tests: number; completedTestsCount: number };

export type DifficultyCategory = {
  difficulty: QuizDifficulty;
  tests: number;
  completedTestsCount: number;
};
