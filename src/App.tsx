import { CssBaseline, ThemeProvider } from '@mui/material';
import { APP_THEME } from './Mui/theme';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { Text } from './Mui/Text';

export function App() {
  return (
    <ErrorBoundary FallbackComponent={() => <div>Something went wrong</div>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={APP_THEME}>
          <CssBaseline />
          <Text>Hello World</Text>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
