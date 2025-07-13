import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { colors } from '@/themes/forms/light/colors';

export let theme: Theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    background: { default: colors.global.background },
  },
  typography: {
    fontFamily: 'Assistant',
  },
});

theme = responsiveFontSizes(theme);
