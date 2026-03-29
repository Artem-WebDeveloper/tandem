import { type BaseTask, TaskType } from '@/core/types/quiz';

// Task text with multiple code lines
export interface CodeOrderingQuestion {
  id: number;
  text: {
    ru: string;
    en: string;
  };
  lines: CodeLineData[];
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
  tags: string[];
  description?: string;
  questions: CodeOrderingQuestion[];
}

export type CodeOrderingAnswerPayload = string[];

export type CodeOrderingAnswer = {
  questionId: number; // айди вопроса для которого сохранен ответ
  payload: CodeOrderingAnswerPayload; // ответ на вопрос, массив айдишек строк в выбранном юзером порядке
};
