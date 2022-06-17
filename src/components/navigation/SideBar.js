import React from "react";
import styled from "styled-components";

import SecondaryButton from "../button/SecondaryButton";
import NameCard from "../NameCard";
import {useNavigate} from "react-router-dom";

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 354px;
  height: calc(100vh - 80px);
`;

const StyledNameCard = styled(NameCard)`
  margin: 24px;
`;

const AutoLayout = styled.div`
  margin: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SideBar = () => {
  const navigate = useNavigate();

  return(
    <StyledCard>
      <StyledNameCard/>
      <AutoLayout>
        <SecondaryButton onClick={() => navigate('course')}>开课查询</SecondaryButton>
        <SecondaryButton onClick={() => navigate('selection')}>学生选课</SecondaryButton>
        <SecondaryButton onClick={() => navigate('score')}>成绩查询</SecondaryButton>
        <SecondaryButton onClick={() => navigate('timetable')}>我的课程表</SecondaryButton>
      </AutoLayout>
    </StyledCard>
  );
};

export default SideBar;
