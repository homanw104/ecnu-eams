import { useNavigate } from "react-router-dom";

import CookieUtil from "../util/CookieUtil";
import {useEffect} from "react";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') != null) {
      navigate('home');
    } else {
      navigate('login');
    }
  });

  return (<div/>);
};

export default LoadingPage;
