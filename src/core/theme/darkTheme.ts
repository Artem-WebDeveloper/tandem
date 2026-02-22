import type { PaletteOptions } from '@mui/material/styles';

export const darkThemeOptions: PaletteOptions = {
  mode: 'dark',

  primary: {
    main: '#cccccc',
  },

  primaryDisabled: '#323C4A',

  error: {
    light: '#FFBABA',
    main: '#D13B3B',
    dark: '#991B1B',
  },

  success: {
    light: '#B5E1C3',
    main: '#1CCF5E',
    dark: '#166534',
  },

  warning: {
    light: '#FFF8AA',
    main: '#F3A90E',
    dark: '#854D0E',
  },

  info: {
    light: '#C0BEFF',
    main: '#5192FE',
    dark: '#261B99',
  },

  background: {
    default: '#0F172A',
    paper: '#262C3E',
  },

  backgroundAccent: '#223E4C',

  backgroundGradient: 'radial-gradient(circle, #0F172A 0%, #1D2230 100%)',

  text: {
    primary: '#CCCCCC',
    secondary: '#64748B',
    disabled: '#7A8BA2',
  },

  textLight: '#929DAB',
  textUltralight: '#4E555F',

  divider: '#323C4A',
};
