import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import TextButton from "../button/TextButton";
import TextLogo from "../logo/TextLogo";
import CookieUtil from "../../util/CookieUtil";


export const StyledTextLogo = styled(TextLogo)``;
export const StyledTextButton = styled(TextButton)``;
export const StyledNavBar = styled.div`
  background-color: ${props => props.theme.colors.gray050};
  padding: 16px 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const NavBar = ({ handleLogoClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = () => {
    CookieUtil.eraseCookie('username');
    CookieUtil.eraseCookie('role');
    navigate('/login');
  };

  if (location.pathname === '/login') {
    return (
      <StyledNavBar>
        <StyledTextLogo handleClick={handleLogoClick}/>
      </StyledNavBar>
    );
  } else {
    return (
      <StyledNavBar>
        <StyledTextLogo handleClick={handleLogoClick}/>
        <StyledTextButton onClick={handleLogoutClick}>退出登录</StyledTextButton>
      </StyledNavBar>
    );
  }
};

export default NavBar;
