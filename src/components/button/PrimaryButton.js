import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.red900};
  box-shadow: 0 1px 2px 0 ${props => props.theme.colors.transparentMediumSlateBlue};
  border-radius: 6px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.textMdMedium.family};
  font-size: ${props => props.theme.fonts.textMdMedium.size};
  font-weight: ${props => props.theme.fonts.textMdMedium.weight};
  line-height: ${props => props.theme.fonts.textMdMedium.lineHeight};
`;

const PrimaryButton = ({ className, children }) => {
  return (
    <StyledButton className={className}>{children}</StyledButton>
  );
};

export default PrimaryButton;
