import type { BaseTask, Difficulty, TaskTheme, TaskType } from '@/core/types/quiz';

export interface LibraryQuiz extends BaseTask {
  section: TaskTheme;
  tags: string[];
  description?: {
    ru: string;
    en: string;
  };
  questionsQuantity: number;
  completePercentage: number;
  isComplete: boolean;
  isFavorite: boolean;
}

export type LibraryFilters = {
  section: TaskTheme | 'all' | 'Favorites';
  quiz_type: TaskType | 'all';
  difficulty: Difficulty | 'all';
};

export interface LibraryResponse {
  count: number;
  previous: string | null;
  next: string | null;
  results: LibraryQuiz[];
}
