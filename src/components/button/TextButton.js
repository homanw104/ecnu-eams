import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  height: 20px;
  border: none;
  padding: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.theme.colors.red900};
  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};
`;

const TextButton = ({ className, children, type, onClick }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default TextButton;
