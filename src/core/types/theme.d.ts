import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    backgroundAccent: string;
    backgroundGradient: string;
    textLight: string;
    textUltralight: string;
    primaryDisabled: string;
  }

  interface PaletteOptions {
    backgroundAccent?: string;
    backgroundGradient?: string;
    textLight?: string;
    textUltralight?: string;
    primaryDisabled?: string;
  }
}
