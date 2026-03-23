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

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      switch (error.response?.status) {
        case 401:
          throw new AppError(AppErrorCode.UNAUTHORIZED);
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
