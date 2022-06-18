import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import CookieUtil from "../util/CookieUtil";

const UserManagePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') === null) {
      navigate('/login');
    }
  });

  return (
    <div>
      UserManagePage
    </div>
  );
};

export default UserManagePage;
