import { create } from 'zustand';
import type { User } from '../types/user';

type AuthState = {
  isAuthorized: boolean;
  user: User | null;
  login: (access: string, refresh: string, user: User) => void;
  logout: () => void;
};

const savedUsername = localStorage.getItem('username');

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: !!localStorage.getItem('access_token'),
  user: savedUsername ? { name: savedUsername } : null,

  login: (access, refresh, user) => {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    localStorage.setItem('username', user.name);

    set({ isAuthorized: true, user });
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('username');

    set({ isAuthorized: false, user: null });
  },
}));
