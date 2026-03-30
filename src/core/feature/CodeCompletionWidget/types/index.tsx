import { type BaseTask, TaskType } from '@/core/types/quiz';

export interface CodeCompletionQuestion {
  id: number;
  code: string;
  blanks: string;
  hint: {
    ru: string;
    en: string;
  };
}

export interface CodeCompletionTask extends BaseTask {
  type: typeof TaskType.CodeCompletion;
  tags: string[];
  questions: CodeCompletionQuestion[];
}
