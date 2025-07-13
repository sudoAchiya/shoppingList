import type { SikurTypography } from '@/themes/types';

export const createTypographyStyle = (
  fontWeight: number,
  fontSize: string,
  color: string,
): SikurTypography => ({
  fontWeight,
  fontSize,
  color,
});
