import { create } from 'zustand';

type CodeCompletionState = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  answers: string[];
  setAnswer: (answer: string) => void;
};

export const useCodeCompletionStore = create<CodeCompletionState>()((set, get) => ({
  currentQuestionNumber: 0,
  answers: [],
  increaseQuestionNumber: () => set({ currentQuestionNumber: get().currentQuestionNumber + 1 }),
  decreaseQuestionNumber: () => set({ currentQuestionNumber: get().currentQuestionNumber - 1 }),
  setAnswer: (answer) => {
    const newAnswers = [...get().answers];

    newAnswers[get().currentQuestionNumber] = answer;

    set({ answers: newAnswers });
  },
}));
