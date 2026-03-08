import { create } from 'zustand';
import type { User } from '../types/user';

// import { mockUser } from '../mock/userData';

type AuthState = {
  isAuthorized: boolean;
  user: User | null;
  login: (access: string, refresh: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: !!localStorage.getItem('access_token'),
  user: null,

  login: (access: string, refresh: string) => {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);

    set({ isAuthorized: true });
  },

  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    set({ isAuthorized: false, user: null });
  },
}));
