import { type BaseTask, TaskType } from '@/core/types/quiz';

// Task text with multiple code lines
export interface CodeOrderingQuestion {
  id: string;
  text: string;
  codeLines: CodeLineData[];
}

export type CodeLineData = {
  id: string;
  code: string;
  correctPosition: number;
  indent: number;
};

// Server response
export interface CodeOrderingTask extends BaseTask {
  type: typeof TaskType.CodeOrdering;
  title: string;
  section: string;
  tags: string[];
  description?: string;
  questions: CodeOrderingQuestion[];
}
