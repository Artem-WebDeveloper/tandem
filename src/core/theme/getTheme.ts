import type { PaletteMode } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';

import { lightThemeOptions } from './lightTheme';
import { darkThemeOptions } from './darkTheme';
import { typography } from './typography';

export function getTheme(mode: PaletteMode) {
  const palette = mode === 'light' ? lightThemeOptions : darkThemeOptions;

  return responsiveFontSizes(
    createTheme({
      palette,
      typography,
      components: {
        MuiCssBaseline: {
          styleOverrides: (theme) => ({
            body: {
              backgroundImage: theme.palette.backgroundGradient,
              backgroundAttachment: 'fixed',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            },
          }),
        },
      },
      breakpoints: {
        values: {
          xs: 320,
          sm: 768,
          md: 1024,
          lg: 1440,
          xl: 1920,
        },
      },
    }),
  );
}
