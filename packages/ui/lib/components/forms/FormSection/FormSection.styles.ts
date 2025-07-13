import { Typography, Grid, styled } from '@mui/material';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const IconStyle = styled(Typography)`
  width: 2.125rem;
  height: 2.125rem;
  background: ${theme.colors.backgroundQuestionsHeader.backgroundColor};
  box-shadow: -0.125rem 0.1875rem 0.625rem
    ${theme.colors.backgroundQuestionsHeader.iconShadow};
  border-radius: 0.4375rem;
`;

export const SectionHeader = styled(Grid)`
  && {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: ${theme.colors.sectionHeader.background};
    color: ${theme.colors.sectionHeader.mainTitle};
    background-size: 155% 100%;
    padding: 1rem 1.5rem;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
`;

export const HeaderText = styled(Typography)`
  && {
    font-size: ${theme.typography.sectionHeader.mainTitle.fontSize};
    font-weight: ${theme.typography.sectionHeader.mainTitle.fontWeight};
    color: ${theme.typography.sectionHeader.mainTitle.color};
  }
`;

export const FormPartStyling = styled(Grid)`
  && {
    background-color: ${theme.colors.backgroundQuestionsHeader
      .backgroundSection};
    box-shadow: 0 0 0.68rem 0
      ${theme.colors.backgroundQuestionsHeader.boxShadow};
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
`;

export const WrapperStyle = styled(Grid)(({ theme }) => ({
  width: '90vw',

  [theme.breakpoints.up('sm')]: {
    width: '80vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '60vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '55vw',
  },
}));
