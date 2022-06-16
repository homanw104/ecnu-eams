import React, { useState } from "react";
import styled from "styled-components";

const InputLabelAutoLayout = styled.div`
  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 6px;
  width: 302px;
  height: 76px;
  
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 1;
`;

const StyledLabel = styled.label`
  /* Label */
  width: 302px;
  height: 24px;

  /* text-md/Medium */
  font-family: ${props => props.theme.fonts.textMdMedium.family};
  font-size: ${props => props.theme.fonts.textMdMedium.size};
  font-weight: ${props => props.theme.fonts.textMdMedium.weight};
  line-height: ${props => props.theme.fonts.textMdMedium.lineHeight};
  /* identical to box height, or 150% */
  
  /* Gray/800 */
  color: ${props => props.theme.colors.gray800};
  
  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

const StyledInput = styled.input`
  /* Input */
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  width: 302px;
  height: 46px;

  background: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gray200};
  
  /* Shadow/xs */
  box-shadow: 0 1px 2px rgba(42, 51, 66, 0.06);
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
`;

const Input = ({ className, label, name, placeholder }) => {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <InputLabelAutoLayout className={className}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="text" name={name} value={value}
                   onChange={handleChange} placeholder={placeholder}/>
    </InputLabelAutoLayout>
  );
};

export default Input;
