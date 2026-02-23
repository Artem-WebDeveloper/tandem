// Universal types

//----------------------------------

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
  //TrueFalse:      'true_false',

  //CodeCompletion: 'Code Completion', Gleb's code type of quiz
} as const;
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

// A universal set of fields for any quiz to render in practice.tsx
export interface BaseTask {
  id: string;
  type: TaskType;
  difficulty: Difficulty;
}

// -----------------------------------------------------------------------------
// TaskFetchResponse — a union of all possible server responses
// expands when a new quiz is added
export type TaskFetchResponse =
  import('../../core/features/singleChoice/types').SingleChoiceTaskResponse;
// | YourNewTaskResponse

// -----------------------------------------------------------------------------
// Submitting answers to the server is the same for all quizzes

export interface UserAnswer {
  questionId: number;
  payload: unknown; // universal field, Single Choice → string ; True/False → boolean
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
