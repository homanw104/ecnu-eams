import { Outlet } from "react-router-dom";

import SideBar from "../components/navigation/SideBar";

const SideBarLayout = () => {
  return (
    <div>
      <Outlet>
      <SideBar/>

      </Outlet>
    </div>
  );
};

export default SideBarLayout;
