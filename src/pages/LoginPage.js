import Background from "../components/Background";
import LoginForm from "../components/LoginForm";
import styled from "styled-components";

const StyledPage = styled.div`
  position: absolute;
`;

const LoginPage = () => {
  return (
    <StyledPage>
      <LoginForm/>
      <Background/>
    </StyledPage>
  );
};

export default LoginPage;
