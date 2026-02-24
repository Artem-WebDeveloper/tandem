import { create } from 'zustand';

export type CodeCompletionAnswer = {
  questionId: string;
  payload: string;
};

type CodeCompletionState = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  answers: CodeCompletionAnswer[];
  setAnswer: (questionId: string, answer: string) => void;
};

export const useCodeCompletionStore = create<CodeCompletionState>()((set, get) => ({
  currentQuestionNumber: 0,
  answers: [],
  increaseQuestionNumber: () => set({ currentQuestionNumber: get().currentQuestionNumber + 1 }),
  decreaseQuestionNumber: () => set({ currentQuestionNumber: get().currentQuestionNumber - 1 }),
  setAnswer: (questionId, answer) => {
    const newAnswers = [...get().answers];

    let currentAnswer = newAnswers.find((answer) => answer.questionId === questionId);

    if (currentAnswer === undefined) {
      currentAnswer = {
        questionId,
        payload: '',
      };

      newAnswers.push(currentAnswer);
    }

    currentAnswer.payload = answer;

    set({ answers: newAnswers });
  },
}));
