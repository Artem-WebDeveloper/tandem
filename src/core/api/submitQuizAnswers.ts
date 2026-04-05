import axiosInstance from './config/axiosInstance';
import type { SingleChoiceAnswerPayload } from '@/core/feature/SingleChoiceWidget/types';
import type { CodeOrderingAnswerPayload } from '@/core/feature/CodeOrderingWidget/types';
import type { AsyncSorterAnswerPayload } from '@/core/feature/AsyncSorterWidget/types';
import type { CodeCompletionAnswerPayload } from '@/core/feature/CodeCompletionWidget/types';
import type { TrueFalseAnswerPayload } from '@/core/feature/TrueFalseWidget/types';

export type UserAnswerPayload =
  | SingleChoiceAnswerPayload
  | CodeOrderingAnswerPayload
  | AsyncSorterAnswerPayload
  | CodeCompletionAnswerPayload
  | TrueFalseAnswerPayload;

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
