import { create } from 'zustand';
import type { QuizResults, UserAnswerPayload } from '../api/submitQuizAnswers';

type QuizResultsState = {
  quizResults: QuizResults<UserAnswerPayload> | null;
  setQuizResults: (quizResults: QuizResults<UserAnswerPayload>) => void;
  resetQuizResults: () => void;
};

export const useQuizResultsStore = create<QuizResultsState>((set) => ({
  quizResults: null,

  setQuizResults: (quizResults) => {
    set({ quizResults });
  },

  resetQuizResults: () => {
    set({ quizResults: null });
  },
}));
