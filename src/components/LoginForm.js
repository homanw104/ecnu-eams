import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import Input from "./form/Input";
import Checkbox from "./form/Checkbox";
import PrimaryButton from "./button/PrimaryButton";
import TextButton from "./button/TextButton";
import { ReactComponent as StampLogo } from "assets/ecnu_logo.svg";

import BackendApiUtil from "../util/BackendApiUtil";
import CookieUtil from "../util/CookieUtil";


const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.gray050};
  box-shadow: ${props => props.theme.shadows.xs};
  border-radius: 6px;
  
  position: absolute;
  width: 390px;
  height: 520px;
  left: max(50%, (100vw - 470px) * 0.85 + 235px);
  right: min(50%, (100vw - 470px) * 0.15 + 235px);
  top: 0;
  bottom: 0;
  margin: auto -195px auto -195px;
  overflow: hidden;
  
  display: flow;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledStampLogo = styled(StampLogo)`
  fill: rgba(255,255,255,0.3);
  position: absolute;
  width: 475px;
  height: 475px;
  left: 79px;
  top: -117px;
`;

const StyledForm = styled.form`
  position: relative;
  z-index: 100;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.displaySmBold.family};
  font-size: ${props => props.theme.fonts.displaySmBold.size};
  font-weight: ${props => props.theme.fonts.displaySmBold.weight};
  line-height: ${props => props.theme.fonts.displaySmBold.lineHeight};

  position: relative;
  margin: 60px 44px 0;
  width: 302px;
  height: 41px;
  z-index: 100;
`;

const StyledUsernameInput = styled(Input)`
  margin: 36px 44px 0;
  width: 302px;
  height: 76px;
`;

const StyledPasswordInput = styled(Input).attrs({ type: 'password' })`
  margin: 12px 44px 0;
  width: 302px;
  height: 76px;
`;

const StyledLoginButton = styled(PrimaryButton).attrs({ type: 'submit' })`
  margin: 20px 44px 70px;
  width: 302px;
  height: 40px;
`;

const StyledLabel = styled.label`
  margin: 69px 44px 0;
  padding-left: 2px;
  height: 20px;
  
  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 8px;
  
  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};
`;

const StyledTextButton = styled(TextButton).attrs({ type: 'button' })`
  display: inline;
`;

const StyledSpan = styled.span`
  margin-bottom: 1px;
`;

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const navigate = useNavigate();

  const handleOnClick = () => {
    window.open('https://portal2020.ecnu.edu.cn/privacy-portal.html', '_blank');
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (checked === false) {
      setChecked(true);
      return;
    }

    BackendApiUtil.login(username, password).then((response) => {
      if (response.data['code'] === 0) {
        CookieUtil.setCookie('username', username, 7);
        CookieUtil.setCookie('role', response.data['role'], 7);
        navigate('/home');
      } else {
        setUsername('');
        setPassword('');
      }
    });
  };

  return(
    <StyledCard>
      <StyledStampLogo/>
      <StyledForm onSubmit={handleOnSubmit}>
        <StyledTitle>登录</StyledTitle>
        <StyledUsernameInput onChange={e => setUsername(e.target.value)} value={username} label='用户名' name='username'/>
        <StyledPasswordInput onChange={e => setPassword(e.target.value)} value={password} label='密码' name='password'/>
        <StyledLabel>
          <Checkbox checked={checked} onChange={setChecked}/>
          <StyledSpan>
            点击登录即表示同意《 <StyledTextButton onClick={handleOnClick}>隐私政策</StyledTextButton> 》
          </StyledSpan>
        </StyledLabel>
        <StyledLoginButton>登录</StyledLoginButton>
      </StyledForm>
    </StyledCard>
  );
};

export default LoginForm;
