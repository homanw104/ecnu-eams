import { Outlet } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../navigation/NavBar";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavBarLayout = ({ handleLogoClick }) => {
  return (
    <StyledLayout>
      <NavBar handleLogoClick={handleLogoClick}/>
      <Outlet/>
    </StyledLayout>
  );
};

export default NavBarLayout;
