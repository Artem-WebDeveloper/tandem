import type { BaseTask, TaskTheme, TaskType } from '@/core/types/quiz';

export interface TrueFalseQuestion {
  id: string;
  statement: string;
  explanation: string;
  correct: boolean;
}

export interface TrueFalseTask extends BaseTask {
  type: typeof TaskType.TrueFalse;
  section: TaskTheme;
  title: string;
  tags: string[];
  questions: TrueFalseQuestion[];
}
