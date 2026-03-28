// import type { DifficultyStatistic } from '@/pages/Dashboard/types';
// import { DIFFICULTY_DATA } from '@/core/mock/dashboard';
// import { AppError, AppErrorCode } from '@/core/errors/errors';

// export async function fetchDifficultyStatistic(): Promise<DifficultyStatistic[]> {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       setTimeout(() => resolve(DIFFICULTY_DATA), 2000);
//     } else {
//       setTimeout(() => {
//         reject(new AppError(AppErrorCode.FETCH_FAILED, { resource: '[Difficulty Statistics]' }));
//       }, 2000);
//     }
//   });
// }
