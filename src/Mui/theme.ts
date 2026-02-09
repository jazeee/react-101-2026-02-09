import { createTheme } from '@mui/material';

export const APP_THEME = createTheme({
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.75rem',
    },
    h3: {
      fontSize: '1.5rem',
    },
    h4: {
      fontSize: '1.25rem',
    },
    h5: {
      fontSize: '1.125rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  palette: {
    mode: 'dark',
  },
});
