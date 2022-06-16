import React from "react";
import styled from "styled-components";
import logo from 'assets/ecnu_logo_text.svg';

const StyledImg = styled.img`
  width: 274px;
  height: 48px;
`;

const TextLogo = ({ className, handleClick }) => {
  return (
    <StyledImg className={className} onClick={handleClick} src={logo} alt="logo"/>
  );
};

export default TextLogo;
