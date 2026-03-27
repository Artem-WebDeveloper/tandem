import axios from 'axios';
import { AppError, AppErrorCode } from '../../errors/errors';

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

function logout() {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  window.location.href = '/login';
}

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          if (originalRequest._retry) {
            logout();
            throw new AppError(AppErrorCode.UNAUTHORIZED);
          }

          originalRequest._retry = true;
          try {
            const refreshToken = localStorage.getItem('refresh_token');
            const res = await axios.post(`${API_URL}/users/login/refresh/`, {
              refresh: refreshToken,
            });

            const newAccessToken = res.data.access;
            localStorage.setItem('access_token', newAccessToken);
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return axiosInstance(originalRequest);
          } catch {
            logout();
            throw new AppError(AppErrorCode.UNAUTHORIZED);
          }
        case 404:
          throw new AppError(AppErrorCode.NOT_FOUND);
        default:
          throw new AppError(AppErrorCode.FETCH_FAILED);
      }
    }
    throw error;
  },
);

export default axiosInstance;
