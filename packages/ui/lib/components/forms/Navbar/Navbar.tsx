import type { NavbarProps } from '@/components/forms/Navbar/Navbar.interface';
import {
  HeaderContainer,
  HeaderRightText,
  HeaderRightSubtext,
  HeaderCenterText,
  HeaderLeft,
  HeaderRight,
  HeaderCenter,
} from '@/components/forms/Navbar/Navbar.styles';

export const Navbar: React.FC<NavbarProps> = ({
  MenuIcon,
  Logo,
  systemNote,
  surveyTitle,
  surveyYear,
}) => {
  return (
    <HeaderContainer>
      <HeaderRight>
        <MenuIcon />
        <HeaderRightText>{surveyTitle}</HeaderRightText>
        <HeaderRightSubtext>{surveyYear}</HeaderRightSubtext>
      </HeaderRight>
      <HeaderCenter>
        <HeaderCenterText>{systemNote}</HeaderCenterText>
      </HeaderCenter>
      <HeaderLeft>{<Logo />}</HeaderLeft>
    </HeaderContainer>
  );
};

export default Navbar;
