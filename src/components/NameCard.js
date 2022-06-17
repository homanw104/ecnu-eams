import { useNavigate } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import default_avatar from "assets/default_avatar.jpg";
import TextButton from "./button/TextButton";

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.gray050};
  border-radius: 6px;
  width: 306px;
  height: 138px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const StyledImg = styled.img`
  margin: 16px;
  
  width: 86px;
  height: 106px;
`;

const AutoLayout = styled.div`
  margin: 16px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitle = styled.div`
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.displayXsRegular.family};
  font-size: ${props => props.theme.fonts.displayXsRegular.size};
  font-weight: ${props => props.theme.fonts.displayXsRegular.weight};
  line-height: ${props => props.theme.fonts.displayXsRegular.lineHeight};
`;

const StyledSubtitle = styled.div`
  margin-top: 6px;
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.textSmRegular.family};
  font-size: ${props => props.theme.fonts.textSmRegular.size};
  font-weight: ${props => props.theme.fonts.textSmRegular.weight};
  line-height: ${props => props.theme.fonts.textSmRegular.lineHeight};
`;

export const StyledTextButton = styled(TextButton)`
  margin-top: 28px;
`;

const NameCard = ({ className, title, subtitle }) => {
  const navigate = useNavigate();

  return(
    <StyledCard className={className}>
      <StyledImg src={default_avatar}/>
      <AutoLayout>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledTextButton onClick={() => navigate('info')}>查看个人信息</StyledTextButton>
      </AutoLayout>
    </StyledCard>
  )
};

export default NameCard;
