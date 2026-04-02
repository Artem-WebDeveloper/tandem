import { type BaseTask, TaskType } from '@/core/types/quiz';

export interface AsyncSorterQuestion {
  id: number;
  code: string;
  blocks: string[];
}

export interface AsyncSorterTask extends BaseTask {
  type: typeof TaskType.AsyncSorter;
  tags: string[];
  questions: AsyncSorterQuestion[];
}

export type AsyncSorterAnswerPayload = string[];

export type AsyncSorterAnswer = {
  questionId: number;
  payload: AsyncSorterAnswerPayload;
};
