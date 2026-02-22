import type { TypographyVariantsOptions } from '@mui/material/styles';

export const typography: TypographyVariantsOptions = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

  h1: {
    fontWeight: 700,
    fontSize: '3rem',
    lineHeight: 1.2,
  },

  h2: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },

  h3: {
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: '2rem',
  },

  body1: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },

  body2: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },

  button: {
    textTransform: 'none',
    fontWeight: 500,
  },
};
