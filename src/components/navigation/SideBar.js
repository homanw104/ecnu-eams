import React from "react";
import styled from "styled-components";

import SecondaryButton from "../button/SecondaryButton";

const AutoLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;

  position: absolute;
  width: 306px;
  height: 192px;
  left: 24px;
  top: 186px;
`;

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  position: absolute;
  width: 354px;
  height: calc(100vh - 80px);
`;

const SideBar = () => {
  return(
    <StyledCard>
      <AutoLayout>

        <SecondaryButton>开课查询</SecondaryButton>
        <SecondaryButton>学生选课</SecondaryButton>
        <SecondaryButton>成绩查询</SecondaryButton>
        <SecondaryButton>我的课程表</SecondaryButton>
      </AutoLayout>
    </StyledCard>
  );
};

export default SideBar;
