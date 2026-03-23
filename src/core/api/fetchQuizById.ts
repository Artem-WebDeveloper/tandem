import type { QuizTask } from '../types/quiz';
import { fetchAsyncSorterById } from './asyncSorterApi/fetchAsyncSorterById';
import { fetchCodeCompletionById } from './codeCompletionApi/fetchCodeCompletionById';
import { fetchSingleChoiceById } from './singleChoiceApi/fetchSingleChoiceById';
import { AppError, AppErrorCode } from '@/core/errors/errors';
import { fetchTrueFalseById } from './trueFalseApi/fetchTrueFalseById';

import axiosInstance from './config/axiosInstance';

export async function fetchQuizById(id: string): Promise<QuizTask> {
  if (import.meta.env.VITE_API_MODE === 'api') {
    const res = await axiosInstance.get<QuizTask>(`/quizzes/${id}/`);
    return res.data;
  } else {
    const quizType = id.split('-')[0];

    switch (quizType) {
      case 'sc':
        return fetchSingleChoiceById(id);
      case 'cc':
        return fetchCodeCompletionById(id);
      case 'as':
        return fetchAsyncSorterById(id);
      case 'tf':
        return fetchTrueFalseById(id);
      default:
        throw new AppError(AppErrorCode.UNKNOWN_QUIZ_TYPE);
    }
  }
}
