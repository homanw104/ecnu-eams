import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.red900};
  box-shadow: 0 1px 2px 0 ${props => props.theme.colors.transparentMediumSlateBlue};
  border-width: 0;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
  
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};
  
  &:hover {
    background-color: ${props => props.theme.colors.red800};
    box-shadow: 0 1px 2px 0 ${props => props.theme.colors.transparentMediumSlateBlue};
  }
  
  &:active {
    background-color: ${props => props.theme.colors.red800};
    box-shadow: 0 0 0 4px #BBF7D0;
  }
`;


const PrimaryButton = ({ className, children, type, onClick }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
