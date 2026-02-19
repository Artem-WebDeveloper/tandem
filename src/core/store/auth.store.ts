import { create } from 'zustand';

type AuthState = {
  isAuthorized: boolean;
  login: () => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthorized: true, // ПОМЕНЯТЬ когда будет автризация
  login: () => set({ isAuthorized: true }),
  logout: () => set({ isAuthorized: false }),
}));
