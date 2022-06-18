import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CookieUtil from "../util/CookieUtil";

const CourseSelectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') === null) {
      navigate('/login');
    }
  });

  return (
    <div>
      CourseSelectionPage
    </div>
  );
};

export default CourseSelectPage;
