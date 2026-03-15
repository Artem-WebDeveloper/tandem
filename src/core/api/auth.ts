import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface LoginResponse {
  access: string;
  refresh: string;
}

export const loginApi = async (username: string, password: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/users/login/`, {
    username,
    password,
  });

  return response.data;
};

export const registerApi = async (username: string, password: string): Promise<void> => {
  await axios.post(`${API_URL}/users/register/`, {
    username,
    password,
  });
};
