import type { LibraryQuiz } from '@/pages/Library/types';
import { libraryData } from '../mock/library';
import { AppError, AppErrorCode } from '@/core/errors/errors';

export function fetchAllQuizzes(): Promise<LibraryQuiz[]> {
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
