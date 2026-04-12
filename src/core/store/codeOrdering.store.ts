import { create } from 'zustand';
import type { CodeOrderingAnswer } from '../feature/CodeOrderingWidget/types';

type CodeOrderingState = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  answers: CodeOrderingAnswer[];
  setAnswer: (questionId: number, answer: string[]) => void;
  reset: () => void;
};

export const useCodeOrderingStore = create<CodeOrderingState>()((set, get) => ({
  // номер текущего открытого вопроса
  currentQuestionNumber: 0,
  increaseQuestionNumber: () =>
    set({
      currentQuestionNumber: get().currentQuestionNumber + 1,
    }),
  decreaseQuestionNumber: () =>
    set({
      currentQuestionNumber: get().currentQuestionNumber - 1,
    }),

  // массив всех ответов пользователя на все вопросы
  answers: [],
  setAnswer: (questionId, payload) =>
    set((state) => {
      const index = state.answers.findIndex((answer) => answer.questionId === questionId);
      const newAnswers = [...state.answers];
      const newAnswer = {
        questionId: questionId,
        payload: payload,
      };

      if (index === -1) {
        newAnswers.push(newAnswer);
      } else {
        newAnswers[index] = newAnswer;
      }

      return {
        answers: newAnswers,
      };
    }),

  // общий сброс номератекущего вопроса и всех ответов пользователя
  reset: () =>
    set({
      currentQuestionNumber: 0,
      answers: [],
    }),
}));
