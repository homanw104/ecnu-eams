import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  background-color: ${props => props['selected'] ? props.theme.colors.gray050 : 'transparent'};
  border-width: 0;
  border-radius: 6px;
  overflow: hidden;

  width: 306px;
  height: 48px;
  z-index: 100;
  
  padding-left: 16px;
  padding-right: 16px;
  
  display: flex;
  justify-content: left;
  align-items: center;
  
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};

  &:hover {
    background-color: ${props => props.theme.colors.gray050};
    box-shadow: none;
  }

  &:active {
    background-color: ${props => props.theme.colors.gray100};
    box-shadow: ${props => props.theme.shadows.xs};;
  }
`;


const SecondaryButton = ({ className, selected, children, type, onClick, ...props }) => {
  return (
    <StyledButton className={className} selected={selected} type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default SecondaryButton;
