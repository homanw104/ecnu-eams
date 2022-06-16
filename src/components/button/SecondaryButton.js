import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  border-radius: 6px;
  overflow: hidden;

  width: 306px;
  height: 48px;
  
  display: flex;
  justify-content: left;
  align-items: center;
  
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.textMdMedium.family};
  font-size: ${props => props.theme.fonts.textMdMedium.size};
  font-weight: ${props => props.theme.fonts.textMdMedium.weight};
  line-height: ${props => props.theme.fonts.textMdMedium.lineHeight};
`;

const SecondaryButton = ({ className, children }) => {
  return (
    <StyledButton className={className}>{children}</StyledButton>
  );
};

export default SecondaryButton;
