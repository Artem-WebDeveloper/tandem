import type { QuizTask } from '../types/quiz';
import { fetchAsyncSorterById } from './asyncSorterApi/fetchAsyncSorterById';
import { fetchCodeCompletionById } from './codeCompletionApi/fetchCodeCompletionById';
import { fetchSingleChoiceById } from './singleChoiceApi/fetchSingleChoiceById';
import { AppError, AppErrorCode } from '@/core/errors/errors';

export async function fetchQuizById(id: string): Promise<QuizTask> {
  if (import.meta.env.VITE_API_MODE === 'api') {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/quizzes/${id}/`);

    if (!res.ok) throw new Error('Could not fetch quiz data');

    const data: QuizTask = await res.json();

    return data;
  } else {
    const quizType = id.split('-')[0];

    switch (quizType) {
      case 'sc':
        return fetchSingleChoiceById(id);
      case 'cc':
        return fetchCodeCompletionById(id);
      case 'as':
        return fetchAsyncSorterById(id);
      default:
        throw new AppError(AppErrorCode.UNKNOWN_QUIZ_TYPE);
    }
  }
}
