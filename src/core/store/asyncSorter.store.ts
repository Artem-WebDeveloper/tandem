import { create } from 'zustand';

export type AsyncSorterAnswer = {
  questionId: string;
  payload: string[];
};

type AsyncSorterState = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  answers: AsyncSorterAnswer[];
  setAnswer: (questionId: string, answer: string[]) => void;
};

export const useAsyncSorterStore = create<AsyncSorterState>()((set, get) => ({
  currentQuestionNumber: 0,
  answers: [],
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
        answers: state.answers.map((a, i) =>
          i === index
            ? {
                ...a,
                payload: [...answer],
              }
            : a,
        ),
      };
    });
  },
}));
