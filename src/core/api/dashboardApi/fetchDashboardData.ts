import { AppError, AppErrorCode } from '@/core/errors/errors';
import type { DashboardData } from '@/pages/Dashboard/types';
import { DASHBOARD_DATA } from '@/core/mock/dashboard';
import axiosInstance from '../config/axiosInstance';

export async function fetchDashboardData(): Promise<DashboardData> {
  if (import.meta.env.VITE_API_MODE === 'api') {
    const res = await axiosInstance.get<DashboardData>(`/quizzes/dashboard/`);

    return res.data;
  } else {
    return new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
        setTimeout(() => resolve(DASHBOARD_DATA), 2000);
      } else {
        setTimeout(() => {
          reject(new AppError(AppErrorCode.FETCH_FAILED));
        }, 2000);
      }
    });
  }
}
