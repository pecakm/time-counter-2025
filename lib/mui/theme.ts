'use client';

import { createTheme } from '@mui/material/styles';

import { Color } from '@/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: Color.LimeGreen,
      light: Color.LimeGreenLight,
      dark: Color.LimeGreenDark,
    },
    background: {
      default: Color.BgDefault,
      paper: Color.BgPaper,
    },
    text: {
      primary: Color.TextPrimary,
      secondary: Color.TextSecondary,
    },
  },
  typography: {
    fontFamily: 'var(--font-geist)',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});
