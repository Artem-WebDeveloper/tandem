import type { TypographyVariantsOptions } from '@mui/material/styles';

export const typography: TypographyVariantsOptions = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

  h1: {
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
  },

  h2: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.35,
  },

  h3: {
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.5,
  },

  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },

  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
  },

  button: {
    textTransform: 'none',
    fontWeight: 500,
  },
};
