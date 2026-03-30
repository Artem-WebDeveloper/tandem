import type { QuizTask } from '../types/quiz';
import { fetchAsyncSorterById } from './asyncSorterApi/fetchAsyncSorterById';
import { fetchCodeCompletionById } from './codeCompletionApi/fetchCodeCompletionById';
import { fetchSingleChoiceById } from './singleChoiceApi/fetchSingleChoiceById';
import { fetchCodeOrderingById } from './codeOrderingApi/fetchCodeOrderingById';
import { fetchTrueFalseById } from './trueFalseApi/fetchTrueFalseById';
import { AppError, AppErrorCode } from '@/core/errors/errors';

import axiosInstance from './config/axiosInstance';

export async function fetchQuizById(id: number): Promise<QuizTask> {
  if (import.meta.env.VITE_API_MODE === 'api') {
    const res = await axiosInstance.get<QuizTask>(`/quizzes/${id}/`);
    return res.data;
  } else {
    if (id < 100) return await fetchSingleChoiceById(id);

    if (id < 200) return await fetchCodeCompletionById(id);

    if (id < 300) return await fetchAsyncSorterById(id);

    if (id < 400) return await fetchCodeOrderingById(id);

    if (id < 500) return await fetchTrueFalseById(id);

    throw new AppError(AppErrorCode.UNKNOWN_QUIZ_TYPE);
  }
}
