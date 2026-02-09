import { CssBaseline, ThemeProvider } from '@mui/material';
import { APP_THEME } from './Mui/theme';
import { ErrorBoundary } from 'react-error-boundary';

export function App() {
  return (
    <ErrorBoundary FallbackComponent={() => <div>Something went wrong</div>}>
      <ThemeProvider theme={APP_THEME}>
        <CssBaseline />
        Hello World
      </ThemeProvider>
    </ErrorBoundary>
  );
}
