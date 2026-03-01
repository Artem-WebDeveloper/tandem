import { create } from 'zustand';
import type { User } from '../types/user';

import { mockUser } from '../mock/userData';

type AuthState = {
  isAuthorized: boolean;
  user: User | null;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: true, // ПОМЕНЯТЬ когда будет автризация
  user: mockUser,
  login: () => set({ isAuthorized: true }),
  logout: () => set({ isAuthorized: false }),
}));
