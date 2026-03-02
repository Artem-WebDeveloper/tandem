import type { BaseTask, TaskTheme } from '@/core/types/quiz';

export interface libraryQuiz extends BaseTask {
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
