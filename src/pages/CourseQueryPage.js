import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Grid, Row, Col } from "../components/layout/Grid";
import CookieUtil from "../util/CookieUtil";

const CourseQueryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (CookieUtil.getCookie('username') === null) {
      navigate('/login');
    }
  });

  return (
    <Grid>
      <div>Test</div>
      <div>Test</div>
    </Grid>
  );
};

export default CourseQueryPage;
