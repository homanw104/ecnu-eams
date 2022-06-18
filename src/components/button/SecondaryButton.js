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
    box-shadow: 0 1px 2px rgba(42, 51, 66, 0.06);
  }
`;


const SecondaryButton = ({ className, selected, children, type, onClick }) => {
  return (
    <StyledButton selected={selected} className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default SecondaryButton;
