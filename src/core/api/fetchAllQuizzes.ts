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

  const { difficulty, quiz_type, section } = filters;

  params.set('page', String(page));
  if (difficulty !== 'all') params.set('difficulty', String(difficulty));
  if (quiz_type !== 'all') params.set('quiz_type', quiz_type);
  if (section !== 'all') params.set('section', section);

  if (IS_API_MODE) {
    const res = await axiosInstance.get<LibraryResponse>(`/quizzes/?${params.toString()}`);
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

// После согласования с бэком
/*
const SERVER_API = 'https://';
export const updateQuizFavoriteStatus = async (quizId: string, isFavorite: boolean) => {
  try {
    const response = await fetch(`/${SERVER_API}/quiz/${quizId}/favorite`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavorite }),
    });

    if (!response.ok) {
      throw new Error('Ошибка при обновлении лайка');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
 */
