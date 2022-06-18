import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CookieUtil from "../util/CookieUtil";

const ScorePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') === null) {
      navigate('/login');
    }
  });

  return (
    <div>
      ScorePage
    </div>
  );
};

export default ScorePage;
