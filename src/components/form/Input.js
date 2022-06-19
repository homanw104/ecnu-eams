import React from "react";
import styled from "styled-components";


const InputLabelAutoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  padding: 0;
  gap: 6px;
  width: 302px;
  height: 76px;
  
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const StyledLabel = styled.label`
  color: ${props => props.theme.colors.gray800};
  width: 302px;
  height: 24px;
  z-index: 100;

  font-family: ${props => props.theme.fonts.textSmMedium.family};
  font-size: ${props => props.theme.fonts.textSmMedium.size};
  font-weight: ${props => props.theme.fonts.textSmMedium.weight};
  line-height: ${props => props.theme.fonts.textSmMedium.lineHeight};
  
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledInput = styled.input`
  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray200};
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  
  padding: 10px 14px;
  gap: 8px;
  width: 302px;
  height: 46px;
  z-index: 100;
  
  box-shadow: ${props => props.theme.shadows.xs};
  border-radius: 8px;

  font-family: ${props => props.theme.fonts.textSmRegular.family};
  font-size: ${props => props.theme.fonts.textSmRegular.size};
  font-weight: ${props => props.theme.fonts.textSmRegular.weight};
  line-height: ${props => props.theme.fonts.textSmRegular.lineHeight};
  
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;

  &:active {
    outline: none;
    border: 1px solid ${props => props.theme.colors.gray400};
    box-shadow: ${props => props.theme.shadows.highlight};
  }
  
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.colors.gray400};
    box-shadow: ${props => props.theme.shadows.highlight};
  }
`;


const Input = ({ className,
                 label='',
                 type='text',
                 name, value, placeholder, onChange, ...props
}) => {
  return(
    <InputLabelAutoLayout className={className}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} {...props}/>
    </InputLabelAutoLayout>
  );
};

export default Input;
