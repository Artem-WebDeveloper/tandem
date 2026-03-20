import type { CommonStatistic } from '@/pages/Dashboard/types';
import { COMMON_DATA } from '@/core/mock/dashboard';

export async function fetchCommonStatistic(): Promise<CommonStatistic> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve(COMMON_DATA), 2000);
    } else {
      setTimeout(() => {
        reject(new Error('Не удалось получить данные'));
      }, 2000);
    }
  });
}
