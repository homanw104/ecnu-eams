import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  border-width: 0;
  border-radius: 6px;
  overflow: hidden;

  width: 306px;
  height: 48px;
  
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
`;

const SecondaryButton = ({ className, children, type, onClick }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default SecondaryButton;
