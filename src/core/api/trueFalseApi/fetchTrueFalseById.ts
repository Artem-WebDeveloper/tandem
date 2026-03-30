import type { TrueFalseTask } from '@/core/feature/TrueFalseWidget/types';
import { MOCK_TRUE_FALSE_DATA } from '@/core/mock/trueFalseData';

export function fetchTrueFalseById(id: number): Promise<TrueFalseTask> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = MOCK_TRUE_FALSE_DATA.find((quiz) => quiz.id === id);

      if (data !== undefined) {
        resolve(data);
      } else {
        reject(new Error(`Квиз типа 'True False' с id "${id}" не найден`));
      }
    }, 0);
  });
}
