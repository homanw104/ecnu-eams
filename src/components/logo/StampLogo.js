import React from "react";
import styled from "styled-components";
import logo from "assets/ecnu_logo.svg";

const StyledImg = styled.img`
  width: 475px;
  height: 475px;
`;

const StampLogo = ({ className, handleClick }) => {
  return (
    <StyledImg className={className} onClick={handleClick} src={logo} alt="logo"/>
  );
};

export default StampLogo;
