import { ThemeProvider } from '@mui/material';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { formsCustomThemes } from '@/themes/forms';
import App from '@src/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={formsCustomThemes.light.baseTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
