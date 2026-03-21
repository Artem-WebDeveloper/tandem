import type { BaseTask, Difficulty, TaskTheme, TaskType } from '@/core/types/quiz';

export interface LibraryQuiz extends BaseTask {
  section: TaskTheme;
  tags: string[];
  description?: {
    ru: string;
    en: string;
  };
  questionsQuantity: number;
  completeProcentage: number;
  isComplete: boolean;
  isFavorite: boolean;
}

export type LibraryFilters = {
  section: TaskTheme | 'all';
  type: TaskType | 'all';
  difficulty: Difficulty | 'all';
};
