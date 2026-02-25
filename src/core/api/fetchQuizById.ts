import { MOCK_CODE_COMPLETION_DATA } from '../mock/codeCompletionData';
import { fetchSingleChoiceById } from './singleChoiceApi/fetchSingleChoiceById';

import type { SingleChoiceTaskResponse } from '../feature/SingleChoiceWidget/types';
import type { CodeCompletionTask } from '../feature/CodeCompletionWidget/types';

// Add more types here
export type QuizTask = SingleChoiceTaskResponse | CodeCompletionTask;

export function fetchQuizById(id: string): Promise<QuizTask> {
  // Define quiz type by part of id before '-'
  const quizType = id.split('-')[0];

  switch (quizType) {
    case 'sc':
      return fetchSingleChoiceById(id);
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
