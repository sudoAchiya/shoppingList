import { ThemeProvider } from '@mui/material';
import { managementCustomThemes } from '@sikur/ui';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={managementCustomThemes.light.baseTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
