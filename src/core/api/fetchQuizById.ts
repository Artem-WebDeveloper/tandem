import { MOCK_CODE_COMPLETION_DATA } from '../mock/codeCompletionData';

type QuizInfo = {
  id: string;
  section: string;
  type: string;
  difficulty: number;
  tags: string[];
  version: number;
};

export type CodeCompletionQuestion = {
  id: string;
  code: string;
  blanks: string;
  hint: string;
};

export type CodeCompletionQuizData = {
  questions: CodeCompletionQuestion[];
} & QuizInfo;

// Add more types here with | (like CodeCompletionQuizData | ChooseOneQuizData)
export type QuizData = CodeCompletionQuizData;

export function fetchQuizById(id: string): Promise<QuizData> {
  // Define quiz type by part of id before '-'
  const quizType = id.split('-')[0];

  switch (quizType) {
    case 'cc':
      // Returning Mock data until backend is set up
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const data = MOCK_CODE_COMPLETION_DATA.find((quiz) => quiz.id === id);

          if (data !== undefined) {
            resolve(data);
          } else {
            reject(new Error('Не удалось найти квиз с указанным идентификатором'));
          }
        }, 2000);
      });
    default:
      throw new Error('Неизвестный тип квиза');
  }
}
