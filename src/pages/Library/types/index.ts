import type { BaseTask } from '@/core/types/quiz';

export interface libraryQuiz extends BaseTask {
  title: string;
  section: string;
  tags: string[];
  description?: string;
  time: number;
  questionsQuantity: number;
  completeProcentage: number;
}
