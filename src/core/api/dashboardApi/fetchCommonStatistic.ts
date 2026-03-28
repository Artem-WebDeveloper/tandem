// import type { CommonStatistic } from '@/pages/Dashboard/types';
// import { COMMON_DATA } from '@/core/mock/dashboard';
// import { AppError, AppErrorCode } from '@/core/errors/errors';

// export async function fetchCommonStatistic(): Promise<CommonStatistic> {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       setTimeout(() => resolve(COMMON_DATA), 2000);
//     } else {
//       setTimeout(() => {
//         reject(new AppError(AppErrorCode.FETCH_FAILED, { resource: '[Common Statistics]' }));
//       }, 2000);
//     }
//   });
// }
