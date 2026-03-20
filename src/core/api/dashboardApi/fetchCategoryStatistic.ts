import type { CategoryStatistic } from '@/pages/Dashboard/types';
import { CATEGORY_DATA } from '@/core/mock/dashboard';

export async function fetchCategoryStatistic(): Promise<CategoryStatistic[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve(CATEGORY_DATA), 2000);
    } else {
      setTimeout(() => {
        reject(new Error('Не удалось получить данные по категориям'));
      }, 2000);
    }
  });
}
