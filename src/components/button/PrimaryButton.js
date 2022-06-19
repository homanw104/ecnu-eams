import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.red900};
  box-shadow: ${props => props.theme.shadows.xs};
  border-width: 0;
  border-radius: 6px;
  overflow: hidden;
  padding: 0;
  z-index: 100;
  
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};
  
  &:hover {
    background-color: ${props => props.theme.colors.red800};
    box-shadow: ${props => props.theme.shadows.xs};
  }
  
  &:active {
    outline: none;
    background-color: ${props => props.theme.colors.red800};
    box-shadow: ${props => props.theme.shadows.highlight};
  }
`;


const PrimaryButton = ({ className, children, type, onClick, ...props }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default PrimaryButton;
