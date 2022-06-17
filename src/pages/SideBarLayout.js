import { Outlet } from "react-router-dom";

import SideBar from "../components/navigation/SideBar";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
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
