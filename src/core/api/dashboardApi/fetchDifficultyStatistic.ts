import type { DifficultyStatistic } from '@/pages/Dashboard/types';
import { DIFFICULTY_DATA } from '@/core/mock/dashboard';

export async function fetchDifficultyStatistic(): Promise<DifficultyStatistic[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve(DIFFICULTY_DATA), 2000);
    } else {
      setTimeout(() => {
        reject(new Error('Не удалось получить данные по сложностям'));
      }, 2000);
    }
  });
}
