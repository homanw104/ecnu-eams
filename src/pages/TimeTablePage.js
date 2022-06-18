import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CookieUtil from "../util/CookieUtil";

const TimeTablePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') === null) {
      navigate('/login');
    }
  });

  return (
    <div>
      TimeTablePage
    </div>
  );
};

export default TimeTablePage;
