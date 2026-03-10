import { fetchSingleChoiceById } from './singleChoiceApi/fetchSingleChoiceById';
import { fetchCodeCompletionById } from './codeCompletionApi/fetchCodeCompletionById';
import { fetchAsyncSorterById } from './asyncSorterApi/fetchAsyncSorterById';
import { fetchCodeOrderingById } from './codeOrderingApi/fetchCodeOrderingById';

import type { SingleChoiceTaskResponse } from '../feature/SingleChoiceWidget/types';
import type { CodeCompletionTask } from '../feature/CodeCompletionWidget/types';
import type { AsyncSorterTask } from '../feature/AsyncSorterWidget/types';
import type { CodeOrderingTask } from '../feature/CodeOrderingWidget/types';

// Add more types here
export type QuizTask =
  | SingleChoiceTaskResponse
  | CodeCompletionTask
  | AsyncSorterTask
  | CodeOrderingTask;

export function fetchQuizById(id: string): Promise<QuizTask> {
  // Define quiz type by part of id before '-'
  const quizType = id.split('-')[0];

  switch (quizType) {
    case 'sc':
      return fetchSingleChoiceById(id);
    case 'cc':
      return fetchCodeCompletionById(id);
    case 'as':
      return fetchAsyncSorterById(id);
    case 'co':
      return fetchCodeOrderingById(id);
    default:
      throw new Error('Неизвестный тип квиза');
  }
}
