import { colors } from '@/themes/management/light/colors';
import type { ThemeTypography } from '@/themes/types';
import { createTypographyStyle } from '@/themes/utils';

export const FONT_WEIGHTS = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const FONT_SIZES = {
  xxs: '0.75rem',
  xs: '0.875rem',
  sm: '0.935rem',
  base: '1rem',
  md: '1.125rem',
  lg: '1.25rem',
  xl: '1.375rem',
  button: '1.5rem',
  xxl: '1.625rem',
  xxxl: '1.875rem',
  xxxxl: '2.5rem',
};

export const typography: ThemeTypography = {
  respondentCard: {
    name: createTypographyStyle(
      FONT_WEIGHTS.bold,
      FONT_SIZES.base,
      colors.respondentCard.name,
    ),
    identifier: createTypographyStyle(
      FONT_WEIGHTS.regular,
      FONT_SIZES.xxs,
      colors.respondentCard.identifier,
    ),
  },
};
