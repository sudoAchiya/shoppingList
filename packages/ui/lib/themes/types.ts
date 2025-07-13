import type { Theme } from '@mui/material/styles';

export interface SikurTypography {
  fontSize: string;
  fontWeight?: number;
  color?: string;
  backgroundColor?: string;
}

export type ThemeColors = Record<string, Record<string, string>>;
export type ThemeTypography = Record<string, Record<string, SikurTypography>>;

export interface SikurTheme {
  colors: ThemeColors;
  typography: ThemeTypography;
  baseTheme: Theme;
}

export enum ThemeType {
  LIGHT = 'light',
}
