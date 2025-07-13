import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { colors } from '@/themes/management/light/colors';

export const theme: Theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    background: { default: colors.global.background },
  },
  typography: {
    fontFamily: 'Assistant',
  },
});
