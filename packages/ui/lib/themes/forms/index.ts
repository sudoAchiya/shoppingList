import { colors as lightColors } from '@/themes/forms/light/colors';
import { theme as lightTheme } from '@/themes/forms/light/theme';
import { typography as lightTypography } from '@/themes/forms/light/typography';
import type { SikurTheme, ThemeType } from '@/themes/types';

export const formsCustomThemes: Record<ThemeType, SikurTheme> = {
  light: {
    colors: lightColors,
    typography: lightTypography,
    baseTheme: lightTheme,
  },
};
