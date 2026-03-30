import { type BaseTask, TaskType } from '@/core/types/quiz';

export interface AsyncSorterQuestion {
  id: number;
  code: string;
  blocks: string[];
}

export interface AsyncSorterTask extends BaseTask {
  type: typeof TaskType.AsyncSorter;
  section: string;
  tags: string[];
  questions: AsyncSorterQuestion[];
}
