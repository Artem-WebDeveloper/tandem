import type { PaletteMode } from '@mui/material/styles';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  mode: PaletteMode;
  switchMode: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'light',
      switchMode: () => set({ mode: get().mode === 'light' ? 'dark' : 'light' }),
    }),
    {
      name: 'theme-storage',
    },
  ),
);
