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
              payload: [...answer],
            },
          ],
        };
      }

      return {
        answers: state.answers.map((_answer, _index) =>
          _index === index
            ? {
                ..._answer,
                payload: [...answer],
              }
            : _answer,
        ),
      };
    });
  },
}));
