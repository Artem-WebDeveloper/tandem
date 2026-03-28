import type { LibraryFilters, LibraryResponse } from '@/pages/Library/types';
import { libraryData } from '../mock/library';
import { AppError, AppErrorCode } from '@/core/errors/errors';

import axiosInstance from './config/axiosInstance';

const IS_API_MODE = import.meta.env.VITE_API_MODE === 'api';

export async function fetchAllQuizzes(
  page: number,
  filters: LibraryFilters,
): Promise<LibraryResponse> {
  const params = new URLSearchParams();

  const { difficulty, quiz_type, section, is_perfect } = filters;

  params.set('page', String(page));
  if (difficulty !== 'all') params.set('difficulty', String(difficulty));
  if (quiz_type !== 'all') params.set('quiz_type', quiz_type);
  if (section !== 'all') params.set('section', section);
  if (is_perfect !== 'all') params.set('is_perfect', is_perfect);

  if (IS_API_MODE) {
    const res = await axiosInstance.get<LibraryResponse>(`/quizzes/?${params.toString()}`);
    console.log(res.data);
    return res.data;
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = libraryData;

        if (data !== undefined) {
          resolve(data);
        } else {
          reject(new AppError(AppErrorCode.FETCH_FAILED, { resource: 'Library quizzes' }));
        }
      }, 1000);
    });
  }
}
