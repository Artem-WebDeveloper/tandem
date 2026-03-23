import type { CategoryStatistic } from '@/pages/Dashboard/types';
import { CATEGORY_DATA } from '@/core/mock/dashboard';
import { AppError, AppErrorCode } from '@/core/errors/errors';

export async function fetchCategoryStatistic(): Promise<CategoryStatistic[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve(CATEGORY_DATA), 2000);
    } else {
      setTimeout(() => {
        reject(new AppError(AppErrorCode.FETCH_FAILED, { resource: '[Category Statistics]' }));
      }, 2000);
    }
  });
}
