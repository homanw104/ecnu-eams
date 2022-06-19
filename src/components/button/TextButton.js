import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`
  background-color: transparent;
  overflow: hidden;
  border: none;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${props => props.theme.colors.red900};
  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};

  &:hover {
    text-decoration: underline;
  }

  &:active {
    text-decoration: underline;
  }
`;


const TextButton = ({ className, children, type, onClick, ...props }) => {
  return (
    <StyledButton className={className} type={type} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default TextButton;
