import React from "react";
import styled from "styled-components";

import Input from "./form/Input";
import StampLogo from "./logo/StampLogo";
import PrimaryButton from "./button/PrimaryButton";

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.gray050};
  
  position: absolute;
  width: 390px;
  height: 520px;
  left: 50%;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  overflow: hidden;

  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(85, 105, 135, 0.1);
`;

const StyledStampLogo = styled(StampLogo)`
  position: absolute;
  width: 475px;
  height: 475px;
  left: 79px;
  top: -117px;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.displaySmBold.family};
  font-size: ${props => props.theme.fonts.displaySmBold.size};
  font-weight: ${props => props.theme.fonts.displaySmBold.weight};
  line-height: ${props => props.theme.fonts.displaySmBold.lineHeight};

  position: absolute;
  width: 302px;
  height: 41px;
  left: 44px;
  top: 60px;
`;

const StyledUsernameInput = styled(Input)`
  position: absolute;
  width: 302px;
  height: 76px;
  left: 44px;
  top: 137px;
`;

const StyledPasswordInput = styled(Input)`
  position: absolute;
  width: 302px;
  height: 76px;
  left: 44px;
  top: 225px;
`;

const StyledLoginButton = styled(PrimaryButton)`
  position: absolute;
  width: 302px;
  height: 40px;
  left: calc(50% - 302px/2);
  top: calc(50% - 40px/2 + 170px);
`;

const LoginForm = () => {
  return(
    <StyledCard>
      <StyledStampLogo/>
      <StyledTitle>登录</StyledTitle>
      <StyledUsernameInput onChnage label='用户名' name='username'/>
      <StyledPasswordInput label='密码' name='password'/>
      <StyledLoginButton>登录</StyledLoginButton>
    </StyledCard>
  );
};

export default LoginForm;
