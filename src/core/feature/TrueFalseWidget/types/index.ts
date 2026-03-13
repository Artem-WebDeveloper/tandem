import type { BaseTask, TaskTheme, TaskType } from '@/core/types/quiz';

export interface TrueFalseTask extends BaseTask {
  type: typeof TaskType.TrueFalse;
  section: TaskTheme;
  title: string;
  tags: string[];
  version: number;
  description?: string;
}
