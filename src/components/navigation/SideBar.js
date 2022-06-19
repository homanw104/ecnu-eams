import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SecondaryButton from "../button/SecondaryButton";
import StampLogo from "../logo/StampLogo";
import NameCard from "../NameCard";

import BackendApiUtil from "../../util/BackendApiUtil";
import CookieUtil from "../../util/CookieUtil";


const StyledSideBar = styled.nav`
  background-color: ${props => props.theme.colors.white};
  position: relative;
  width: 354px;
  height: calc(100vh - 80px);
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledStampLogo = styled(StampLogo)`
  filter: invert(5%);
  position: absolute;
  width: 374px;
  height: 374px;
  
  left: -103px;
  bottom: -187px;
`;

const StyledNameCard = styled(NameCard)`
  margin: 24px;
`;

const AutoLayout = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState('姓名');
  const [subtitle, setSubtitle] = useState('学号');

  const id = CookieUtil.getCookie('username');
  const role = CookieUtil.getCookie('role');

  useEffect(() => {
    if (role === 'student') {
      BackendApiUtil.getStudentInfo(id).then((response) => {
        setTitle(response.data['name']);
        setSubtitle('学号 ' + id);
      }).catch(() => {
        setTitle('学生');
        setSubtitle('学号 加载失败');
      });
    } else if (role === 'teacher') {
      BackendApiUtil.getStudentInfo(id).then((response) => {
        setTitle(response.data['name']);
        setSubtitle('工号 ' + id);
      }).catch(() => {
        setTitle('教师');
        setSubtitle('工号 加载失败');
      });
    } else if (role === 'manager') {
      BackendApiUtil.getStudentInfo(id).then((response) => {
        setTitle(response.data['name']);
        setSubtitle('工号 ' + id);
      }).catch(() => {
        setTitle('教务');
        setSubtitle('工号 加载失败');
      });
    } else {
      alert('已登出，请返回登录界面。');
      navigate('/login');
    }
  });

  let navButtonList;
  if (role === 'student') {
    navButtonList = [
      <SecondaryButton key='1' selected={location.pathname === '/course/query'} onClick={() => navigate('/course/query')}>开课查询</SecondaryButton>,
      <SecondaryButton key='2' selected={location.pathname === '/course/select'} onClick={() => navigate('/course/select')}>学生选课</SecondaryButton>,
      <SecondaryButton key='3' selected={location.pathname === '/score'} onClick={() => navigate('/score')}>成绩查询</SecondaryButton>,
      <SecondaryButton key='4' selected={location.pathname === '/timetable'} onClick={() => navigate('/timetable')}>我的课程表</SecondaryButton>,
    ];
  } else if (role === 'teacher') {
    navButtonList = [
      <SecondaryButton key='1' selected={location.pathname === '/course/query'} onClick={() => navigate('course/query')}>开课查询</SecondaryButton>,
      <SecondaryButton key='2' selected={location.pathname === '/course/manage'} onClick={() => navigate('course/manage')}>课程管理</SecondaryButton>,
      <SecondaryButton key='3' selected={location.pathname === '/course/timetable'} onClick={() => navigate('timetable')}>我的课程表</SecondaryButton>,
    ];
  } else {
    navButtonList = [
      <SecondaryButton key='1' selected={location.pathname === '/course/query'} onClick={() => navigate('course/query')}>开课查询</SecondaryButton>,
      <SecondaryButton key='2' selected={location.pathname === '/course/manage'} onClick={() => navigate('course/manage')}>课程管理</SecondaryButton>,
      <SecondaryButton key='3' selected={location.pathname === '/user/manage'} onClick={() => navigate('user/manage')}>用户管理</SecondaryButton>,
      <SecondaryButton key='4' selected={location.pathname === '/semester/manage'} onClick={() => navigate('semester/manage')}>学期管理</SecondaryButton>,
    ];
  }

  return(
    <StyledSideBar>
      <StyledNameCard title={title} subtitle={subtitle}/>
      <AutoLayout>
        {navButtonList}
      </AutoLayout>
      <StyledStampLogo/>
    </StyledSideBar>
  );
};

export default SideBar;
