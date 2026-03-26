import axiosInstance from './config/axiosInstance';

export type SingleChoiceUserAnswerPayload = string;
export type CodeOrderingUserAnswerPayload = string[];
export type AsyncSorterUserAnswerPayload = string[];
export type CodeComplitionUserAnswerPayload = string;
export type TrueFalseUserAnswerPayload = boolean;

export type UserAnswerPayload =
  | SingleChoiceUserAnswerPayload
  | CodeOrderingUserAnswerPayload
  | AsyncSorterUserAnswerPayload
  | CodeComplitionUserAnswerPayload
  | TrueFalseUserAnswerPayload;

export type QuizAnswer<T extends UserAnswerPayload> = {
  question_id: number;
  answer: T;
};

export type QuizResult<T extends UserAnswerPayload> = {
  question_id: number;
  is_correct: boolean;
  user_answer: T;
};

export type QuizResults<T extends UserAnswerPayload> = {
  quiz_id: number;
  score: number;
  correct_count: number;
  total_questions: number;
  results: QuizResult<T>[];
};

export async function submitQuizAnswers<T extends UserAnswerPayload>(
  quizId: number,
  payload: QuizAnswer<T>[],
): Promise<QuizResults<T>> {
  const answers = { answers: payload };
  const res = await axiosInstance.post(`/quizzes/${quizId}/submit/`, answers);

  return res.data;
}
