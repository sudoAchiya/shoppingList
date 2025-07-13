import type { ThemeColors } from '@/themes/types';

const base = {
  background: '#FFFFFF',
  primary: '#1c376e',
  secondary: '#9452e8',
  tertiary: '#4a8fcc',
};

export const colors: ThemeColors = {
  global: {
    background: base.background,
  },
  respondentCard: {
    background: base.background,
    avatarBorder: '#DEE5ED',
    name: '#394660',
    identifier: '#4B5379',
    boxShadow: '#00000026',
  },
};
