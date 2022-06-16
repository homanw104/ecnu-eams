import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  background: linear-gradient(
          270deg,
          rgba(255, 255, 255, 0.8) -1.95%,
          rgba(247, 247, 247, 0.856442) 49.98%,
          rgba(227, 227, 227, 0.533438) 76.27%,
          rgba(196, 196, 196, 0) 102.57%
  ), url(${props => props.theme.background}) no-repeat center;
  background-size: cover;
  border: none;
  width: 100vw;
  height: calc(100vh - 80px);
`;

const Background = () => {
  return (
    <StyledBackground/>
  );
};

export default Background;
