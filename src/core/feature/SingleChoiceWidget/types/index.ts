// Custom Types - for Single Choice

import { type BaseTask, TaskType } from '../../../types/quiz';

// One answer option
export interface SingleChoiceOption {
  id: string; // unique identifier
  text: string; // option text
}

// One question with multiple answer options
export interface SingleChoiceQuestion {
  id: number; // question ID
  text: string; // question text
  options: SingleChoiceOption[];
}

// Server response when loading a Single Choice task
export interface SingleChoiceTaskResponse extends BaseTask {
  type: typeof TaskType.SingleChoice; // = 'single_choice'
  title: string;
  section: string;
  tags: string[];
  description?: string;
  questions: SingleChoiceQuestion[];
}
