import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

import SecondaryButton from "../button/SecondaryButton";
import StampLogo from "../logo/StampLogo";
import NameCard from "../NameCard";

import BackendApiUtil from "../../util/BackendApiUtil";
import CookieUtil from "../../util/CookieUtil";

const StyledCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  position: relative;
  width: 354px;
  height: calc(100vh - 80px);
`;

const StyledStampLogo = styled(StampLogo)`
  position: absolute;
  width: 374px;
  height: 374px;
  left: -103px;
  bottom: -187px;
  filter: invert(5%);
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
  const [title, setTitle] = useState('姓名');
  const [subtitle, setSubtitle] = useState('学号');

  useEffect(() => {
    const id = CookieUtil.getCookie('username')
    BackendApiUtil.getStudentInfo(id).then((response) => {
      setTitle(response.data['name']);
      setSubtitle('学号 ' + id);
    });
  });

  return(
    <StyledCard>
      <StyledNameCard title={title} subtitle={subtitle}/>
      <AutoLayout>
        <SecondaryButton onClick={() => navigate('course/query')}>开课查询</SecondaryButton>
        <SecondaryButton onClick={() => navigate('course/select')}>学生选课</SecondaryButton>
        <SecondaryButton onClick={() => navigate('course/manage')}>课程管理</SecondaryButton>
        <SecondaryButton onClick={() => navigate('user/manage')}>用户管理</SecondaryButton>
        <SecondaryButton onClick={() => navigate('semester/manage')}>学期管理</SecondaryButton>
        <SecondaryButton onClick={() => navigate('score')}>成绩查询</SecondaryButton>
        <SecondaryButton onClick={() => navigate('timetable')}>我的课程表</SecondaryButton>
      </AutoLayout>
      <StyledStampLogo/>
    </StyledCard>
  );
};

export default SideBar;
