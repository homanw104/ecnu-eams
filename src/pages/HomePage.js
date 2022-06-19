import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Grid } from "../components/layout/Grid";
import CookieUtil from "../util/CookieUtil";
import BackendApiUtil from "../util/BackendApiUtil";


const StyledTitle = styled.h1`
  grid-column: 1 / 12;
  margin: 0;
  text-align: left;
  
  color: ${props => props.theme.colors.gray900};
  font-family: ${props => props.theme.fonts.displayMdRegular.family};
  font-size: ${props => props.theme.fonts.displayMdRegular.size};
  font-weight: ${props => props.theme.fonts.displayMdRegular.weight};
  line-height: ${props => props.theme.fonts.displayMdRegular.lineHeight};
`;


const HomePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('欢迎使用本系统！');

  useEffect(() => {
    if (CookieUtil.getCookie('username') === null) {
      navigate('/login');
    }

    const id = CookieUtil.getCookie('username');
    const role = CookieUtil.getCookie('role');

    if (role === 'student') {
      BackendApiUtil.getStudentInfo(id).then((response) => {
        setTitle(response.data['name'].slice(0, 1) + '同学，欢迎您！');
      }).catch(e => {console.error(e)});
    } else if (role === 'teacher') {
      BackendApiUtil.getStudentInfo(id).then((response) => {
        setTitle(response.data['name'].slice(0, 1) + '老师，欢迎您！');
      }).catch(e => {console.error(e)});
    } else if (role === 'manager') {
      BackendApiUtil.getStudentInfo(id).then((response) => {
        setTitle(response.data['name'].slice(0, 1) + '教务，欢迎您！');
      }).catch(e => {console.error(e)});
    } else {
      alert('已登出！返回登录界面。');
      navigate('/login');
    }
  });

  return (
    <Grid>
      <StyledTitle>{title}</StyledTitle>
    </Grid>
  );
};

export default HomePage;
