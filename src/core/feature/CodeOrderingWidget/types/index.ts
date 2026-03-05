import { type BaseTask, TaskType } from '@/core/types/quiz';

// Task text with multiple code lines
export interface CodeOrderingTask {
  id: string; // task ID
  text: string; // task text
  codeLines: CodeLines[];
}

export type CodeLines = {
  id: string;
  code: string;
  correctPosition: number;
  indent: number;
};

// Server response
export interface CodeOrderingTaskResponse extends BaseTask {
  type: typeof TaskType.CodeOrdering; // = 'code_ordering'
  title: string;
  section: string;
  tags: string[];
  description?: string;
  questions: CodeOrderingTask[];
}
