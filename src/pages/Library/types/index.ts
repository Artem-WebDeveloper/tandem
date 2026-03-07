import type { BaseTask, Difficulty, TaskTheme, TaskType } from '@/core/types/quiz';

export interface LibraryQuiz extends BaseTask {
  title: string;
  section: TaskTheme;
  tags: string[];
  description?: string;
  time: number;
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
