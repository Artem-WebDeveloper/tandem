import type { PaletteMode } from '@mui/material/styles';
import { createTheme } from '@mui/material';

import { lightThemeOptions } from './lightTheme';
import { darkThemeOptions } from './darkTheme';
import { typography } from './typography';

export function getTheme(mode: PaletteMode) {
  const palette = mode === 'light' ? lightThemeOptions : darkThemeOptions;

  return createTheme({
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
  });
}
