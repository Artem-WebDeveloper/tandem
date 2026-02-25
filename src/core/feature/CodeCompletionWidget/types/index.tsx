import { type BaseTask, TaskType } from '../../../types/quiz';

export interface CodeCompletionQuestion {
  id: string;
  code: string;
  blanks: string;
  hint: string;
}

export interface CodeCompletionTask extends BaseTask {
  type: typeof TaskType.CodeCompletion;
  section: string;
  tags: string[];
  version: number;
  questions: CodeCompletionQuestion[];
}
