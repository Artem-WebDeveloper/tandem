import type { PaletteOptions } from '@mui/material/styles';

export const lightThemeOptions: PaletteOptions = {
  mode: 'light',

  primary: {
    main: '#0F172A',
  },

  primaryDisabled: '#E2E8F0',

  error: {
    light: '#FEE2E2',
    main: '#DC2626',
    dark: '#991B1B',
  },

  success: {
    light: '#F0FDF4',
    main: '#16A34A',
    dark: '#166534',
  },

  warning: {
    light: '#FEF9C3',
    main: '#FEF08A',
    dark: '#854D0E',
  },

  info: {
    light: '#E3E2FE',
    main: '#3B26DC',
    dark: '#261B99',
  },

  background: {
    default: '#F8FAFC',
    paper: '#ffffff',
  },

  backgroundAccent: '#F0F9FF',
  backgroundGradient: 'radial-gradient(circle, #F8FAFC 0%, #E2E8F0 100%)',

  text: {
    primary: '#0F172A',
    secondary: '#475569',
    disabled: '#94A3B8',
  },

  textLight: '#64748B',
  textUltralight: '#CBD5E1',

  divider: '#E2E8F0',
};
