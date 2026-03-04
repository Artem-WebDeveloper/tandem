import type { LibraryQuiz } from '@/pages/Library/types';
import { libraryData } from '../mock/library';

export function fetchAllQuizzes(): Promise<LibraryQuiz[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = libraryData;

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new Error(`Не удалось загрузить тренажеры, проверьте соединение с интернетом`));
      }
    }, 1000);
  });
}
