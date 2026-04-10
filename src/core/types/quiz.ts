import type { SingleChoiceTaskResponse } from '../feature/SingleChoiceWidget/types';
import type { CodeCompletionTask } from '../feature/CodeCompletionWidget/types';
import type { AsyncSorterTask } from '../feature/AsyncSorterWidget/types';
import type { TrueFalseTask } from '../feature/TrueFalseWidget/types';
import type { CodeOrderingTask } from '../feature/CodeOrderingWidget/types';

// Universal types

//----------------------------------

// Types of Quizzes
export type QuizTask =
  | SingleChoiceTaskResponse
  | CodeCompletionTask
  | AsyncSorterTask
  | TrueFalseTask
  | CodeOrderingTask;

// Task themes - add here when a new Theme appears
export type TaskTheme = 'Core JS' | 'TypeScript' | 'React' | 'HTML' | 'Algorithms';

// Difficulty levels
export const Difficulty = {
  Easy: 1,
  Medium: 2,
  Hard: 3,
} as const;
export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty];

// Task types - add here when a new quiz appears
export const TaskType = {
  SingleChoice: 'single_choice',
  CodeCompletion: 'code_completion',
  AsyncSorter: 'async_sorter',
  CodeOrdering: 'code_ordering',
  TrueFalse: 'true_false',

  //CodeCompletion: 'Code Completion', Gleb's code type of quiz
} as const;

export type TaskType = (typeof TaskType)[keyof typeof TaskType];

// A universal set of fields for any quiz to render in practice.tsx
export interface BaseTask {
  id: number;
  type: TaskType;
  section: TaskTheme;
  difficulty: Difficulty;
  time_limit: number;
  title: {
    ru: string;
    en: string;
  };
}

// -----------------------------------------------------------------------------
// Submitting answers to the server is the same for all quizzes

export interface UserAnswer {
  questionId: number;
  payload: unknown; // universal field, Single Choice → string ; True/False → boolean
  // TODO: replace with UserAnswerPayload from src\core\api\submitQuizAnswers.ts
}

export interface TaskSubmitRequest {
  taskId: string;
  userAnswers: UserAnswer[];
}

// -----------------------------------------------------------------------------
// Receiving results from the server is the same for all quizzes
// The server returns only the fact - correct or not.

export interface QuestionResult {
  questionId: number;
  isCorrect: boolean;
}

export interface TaskSubmitResponse {
  taskId: string;
  totalQuestions: number;
  correctAnswers: number;
  percentage: number; // add for dashboard
  score: number; // Calc logic in backend
  questionResults: QuestionResult[];
  passed?: boolean; // was discussed at the meetup
}
