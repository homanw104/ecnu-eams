import React from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "icons/check.svg";


const CheckboxContainer = styled.div`
  position: relative;
`;

const StyledIcon = styled(CheckIcon)`
  fill: ${props => props.theme.colors.white};
  position: absolute;
  margin: auto;
  width: 14px;
  height: 14px;
  left: 50%;
  top: 0;
  bottom: 0;
  transform: translate(-50%, 0);
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  margin: auto;
  width: 14px;
  height: 14px;
  left: 50%;
  top: 0;
  bottom: 0;
  border: 0;
  padding: 0;
  transform: translate(-50%, 0);
`;

const StyledCheckbox = styled.div`
  background-color: ${props => (props['checked'] ? props.theme.colors.red900 : props.theme.colors.white)};
  border-color: ${props => (props['checked'] ? props.theme.colors.red800 : props.theme.colors.gray200)};
  box-shadow: ${props => props.theme.shadows.xs};
  box-sizing: border-box;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  
  position: relative;
  width: 16px;
  height: 16px;
  margin: auto;
  
  &:hover {
    background-color: ${props => (props['checked'] ? props.theme.colors.red800 : props.theme.colors.red100)};
    border-color: ${props => (props['checked'] ? props.theme.colors.red700 : props.theme.colors.red900)};
    box-shadow: ${props => props.theme.shadows.xs};
  }

  &:active {
    background-color: ${props => (props['checked'] ? props.theme.colors.red800 : props.theme.colors.red100)};
    border-color: ${props => (props['checked'] ? props.theme.colors.red700 : props.theme.colors.red900)};
    box-shadow: ${props => props.theme.shadows.highlight};
  }

  ${StyledIcon} {
    visibility: ${props => (props['checked'] ? 'visible' : 'hidden')}
  }
`;

const Checkbox = ({ className, checked, onChange, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={() => onChange(!checked)} {...props} />
    <StyledCheckbox checked={checked}><StyledIcon/></StyledCheckbox>
  </CheckboxContainer>
);

export default Checkbox;
