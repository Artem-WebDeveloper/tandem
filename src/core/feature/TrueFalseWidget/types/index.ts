import type { BaseTask, TaskType } from '@/core/types/quiz';

export interface TrueFalseQuestion {
  id: number;
  statement: {
    ru: string;
    en: string;
  };
  explanation: {
    ru: string;
    en: string;
  };
  correct: boolean;
}

export interface TrueFalseTask extends BaseTask {
  type: typeof TaskType.TrueFalse;
  tags: string[];
  questions: TrueFalseQuestion[];
}

export type TrueFalseAnswerPayload = boolean;
