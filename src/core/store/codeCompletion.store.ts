import { create } from 'zustand';
import type { CodeCompletionAnswer } from '../feature/CodeCompletionWidget/types';

type CodeCompletionState = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  answers: CodeCompletionAnswer[];
  setAnswer: (questionId: number, answer: string) => void;
  reset: () => void;
};

export const useCodeCompletionStore = create<CodeCompletionState>()((set, get) => ({
  currentQuestionNumber: 0,
  answers: [],
  reset: () => {
    set({ currentQuestionNumber: 0, answers: [] });
  },
  increaseQuestionNumber: () => set({ currentQuestionNumber: get().currentQuestionNumber + 1 }),
  decreaseQuestionNumber: () => set({ currentQuestionNumber: get().currentQuestionNumber - 1 }),
  setAnswer: (questionId, answer) => {
    set((state) => {
      const index = state.answers.findIndex((a) => a.questionId === questionId);

      if (index === -1) {
        return {
          answers: [
            ...state.answers,
            {
              questionId,
              payload: answer,
            },
          ],
        };
      }

      return {
        answers: state.answers.map((a, i) =>
          i === index
            ? {
                ...a,
                payload: answer,
              }
            : a,
        ),
      };
    });
  },
}));
