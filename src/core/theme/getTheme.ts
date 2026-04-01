import type { PaletteMode } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { responsiveFontSizes } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

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

        MuiTooltip: {
          styleOverrides: {
            tooltip: ({ theme }) => ({
              backgroundColor:
                theme.palette.mode === 'light'
                  ? alpha(theme.palette.primary.main, 0.9)
                  : alpha(theme.palette.text.primary, 0.9),

              color:
                theme.palette.mode === 'light'
                  ? theme.palette.background.default
                  : theme.palette.background.default,
            }),

            arrow: ({ theme }) => ({
              color:
                theme.palette.mode === 'light'
                  ? alpha(theme.palette.primary.main, 0.9)
                  : alpha(theme.palette.text.primary, 0.9),
            }),
          },
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
