import { colors as lightColors } from '@/themes/management/light/colors';
import { theme as lightTheme } from '@/themes/management/light/theme';
import { typography as lightTypography } from '@/themes/management/light/typography';
import type { SikurTheme, ThemeType } from '@/themes/types';

export const managementCustomThemes: Record<ThemeType, SikurTheme> = {
  light: {
    colors: lightColors,
    typography: lightTypography,
    baseTheme: lightTheme,
  },
};
