import styled from "styled-components";

import Background from "../components/Background";
import LoginForm from "../components/LoginForm";

const StyledPage = styled.div`
  position: relative;
`;

const LoginPage = () => {
  return(
    <StyledPage>
      <LoginForm/>
      <Background/>
    </StyledPage>
  );
};

export default LoginPage;
