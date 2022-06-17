import React from "react";
import styled from "styled-components";

import TextButton from "../button/TextButton";
import TextLogo from "../logo/TextLogo";
import { useNavigate } from "react-router-dom";

export const StyledTextLogo = styled(TextLogo)``;
export const StyledTextButton = styled(TextButton)``;
export const StyledNavigation = styled.div`
  background-color: ${props => props.theme.colors.gray050};
  padding: 16px 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavBar = ({ handleLogoClick }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate('/login');
  };

  return (
    <StyledNavigation>
      <StyledTextLogo handleClick={handleLogoClick}/>
      <StyledTextButton onClick={handleLogoutClick}>退出登录</StyledTextButton>
    </StyledNavigation>
  );
};

export default NavBar;
