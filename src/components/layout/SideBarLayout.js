import { Outlet } from "react-router-dom";

import SideBar from "../navigation/SideBar";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const SideBarLayout = () => {
  return (
    <StyledLayout>
      <SideBar/>
      <Outlet/>
    </StyledLayout>
  );
};

export default SideBarLayout;
