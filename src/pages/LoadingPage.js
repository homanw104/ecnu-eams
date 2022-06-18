import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CookieUtil from "../util/CookieUtil";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') != null) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  });

  return (<div/>);
};

export default LoadingPage;
