import { createTheme } from '@mui/material';

const PAPER_COLOR = '#3d1f5c';

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
    primary: {
      main: '#a863ed',
    },
    secondary: {
      main: '#3f51b5',
    },
    background: {
      default: '#121212',
      paper: PAPER_COLOR,
    },
    error: {
      main: '#c20909',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            backgroundColor: PAPER_COLOR,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: PAPER_COLOR,
        },
      },
    },
  },
});
