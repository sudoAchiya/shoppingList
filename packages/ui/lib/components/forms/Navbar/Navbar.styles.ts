import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { formsCustomThemes } from '@/themes/forms';

const theme = formsCustomThemes.light;

export const NavbarItem = styled(Grid)`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const HeaderContainer = styled(Grid)`
  display: flex;
  position: fixed;
  z-index: 10;
  height: 3rem;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 1rem;
  background-color: ${theme.colors.global.background};
`;

export const HeaderLeft = styled(NavbarItem)`
  justify-content: left;
`;

export const HeaderRight = styled(NavbarItem)`
  gap: 0.5rem;
`;

export const HeaderCenter = styled(NavbarItem)`
  justify-content: center;
`;

export const HeaderCenterText = styled(Typography)`
  && {
    color: ${theme.typography.navbar.systemNote.color};
    font-size: ${theme.typography.navbar.systemNote.fontSize};
    font-weight: ${theme.typography.navbar.systemNote.fontWeight};
  }
`;

export const HeaderRightText = styled(Typography)`
  && {
    color: ${theme.typography.navbar.mainTitle.color};
    font-size: ${theme.typography.navbar.mainTitle.fontSize};
    font-weight: ${theme.typography.navbar.mainTitle.fontWeight};
  }
`;

export const HeaderRightSubtext = styled(Typography)`
  && {
    color: ${theme.typography.navbar.subTitle.color};
    font-size: ${theme.typography.navbar.subTitle.fontSize};
    font-weight: ${theme.typography.navbar.subTitle.fontWeight};
  }
`;
