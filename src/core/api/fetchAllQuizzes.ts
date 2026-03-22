import type { LibraryResponse } from '@/pages/Library/types';
import { libraryData } from '../mock/library';
import { AppError, AppErrorCode } from '@/core/errors/errors';

const API_URL = import.meta.env.VITE_API_URL;
const IS_API_MODE = import.meta.env.VITE_API_MODE === 'api';

export async function fetchAllQuizzes(page?: number): Promise<LibraryResponse> {
  let url = `${API_URL}/quizzes/`;
  if (page) url += `?page=${page}`;
  console.log(url);
  if (IS_API_MODE) {
    const res = await fetch(url);

    if (!res.ok) throw new AppError(AppErrorCode.FETCH_FAILED, { resource: 'Library quizzes' });

    const data = await res.json();
    return data;
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
