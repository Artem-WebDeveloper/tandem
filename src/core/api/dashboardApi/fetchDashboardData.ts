import { AppError, AppErrorCode } from '@/core/errors/errors';
import type { DashboardData } from '@/pages/Dashboard/types';
import { DASHBOARD_DATA } from '@/core/mock/dashboard';

export async function fetchDashboardData(): Promise<DashboardData> {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      setTimeout(() => resolve(DASHBOARD_DATA), 2000);
    } else {
      setTimeout(() => {
        reject(new AppError(AppErrorCode.FETCH_FAILED, { resource: 'User Statistics' }));
      }, 2000);
    }
  });
}
