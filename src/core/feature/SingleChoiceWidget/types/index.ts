// Custom Types - for Single Choice

import { type BaseTask, TaskType } from '@/core/types/quiz';

// One answer option
export interface SingleChoiceOption {
  id: string; // unique identifier
  text: {
    ru: string;
    en: string;
  };
}

// One question with multiple answer options
export interface SingleChoiceQuestion {
  id: number; // question ID
  text: {
    ru: string;
    en: string;
  };
  options: SingleChoiceOption[];
}

// Server response when loading a Single Choice task
export interface SingleChoiceTaskResponse extends BaseTask {
  type: typeof TaskType.SingleChoice; // = 'single_choice'
  section: string;
  tags: string[];
  questions: SingleChoiceQuestion[];
}

export type SingleChoiceAnswerPayload = string;
