import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import TextButton from "../button/TextButton";
import CookieUtil from "../../util/CookieUtil";
import { ReactComponent as TextLogo } from "assets/ecnu_logo_text.svg";


export const StyledTextButton = styled(TextButton)``;

export const StyledTextLogo = styled(TextLogo)`
  fill: #b70031;
  width: 274px;
  height: 48px;
`;

export const StyledNavBar = styled.div`
  background-color: ${props => props.theme.colors.gray050};
  padding: 16px 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const NavBar = ({ className, handleLogoClick, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoutClick = () => {
    CookieUtil.eraseCookie('username');
    CookieUtil.eraseCookie('role');
    navigate('/login');
  };

  if (location.pathname === '/login') {
    return (
      <StyledNavBar className={className} {...props}>
        <StyledTextLogo onClick={handleLogoClick}/>
      </StyledNavBar>
    );
  } else {
    return (
      <StyledNavBar className={className} {...props}>
        <StyledTextLogo onClick={handleLogoClick}/>
        <StyledTextButton onClick={handleLogoutClick}>退出登录</StyledTextButton>
      </StyledNavBar>
    );
  }
};

export default NavBar;
