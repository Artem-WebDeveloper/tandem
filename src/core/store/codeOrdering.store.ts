import { create } from 'zustand';

export type CodeOrderingAnswer = {
  questionId: string; // айди вопроса для которого сохранен ответ
  payload: string[]; // ответ на вопрос, массив айдишек строк в выбранном юзером порядке
};

type CodeOrderingState = {
  currentQuestionNumber: number;
  increaseQuestionNumber: () => void;
  decreaseQuestionNumber: () => void;
  answers: CodeOrderingAnswer[];
  setAnswer: (questionId: string, answer: string[]) => void;
};

export const useCodeOrderingStore = create<CodeOrderingState>()((set, get) => ({
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
