import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'stylesheet.js'

import NavBarLayout from "./components/layout/NavBarLayout";
import SideBarLayout from "./components/layout/SideBarLayout";
import LoadingPage from "./pages/LoadingPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import CourseQueryPage from "./pages/CourseQueryPage";
import CourseSelectPage from "./pages/CourseSelectPage";
import CourseManagePage from "./pages/CourseManagePage";
import UserManagePage from "./pages/UserManagePage";
import SemesterManagePage from "./pages/SemesterManagePage";
import TimeTablePage from "./pages/TimeTablePage";
import ScorePage from "./pages/ScorePage";

import { useTheme } from "./util/UseTheme";

function App() {
  const [theme, toggleTheme, componentMounted] = useTheme();

  /* Disable scroll bar. */
  document.body.style.overflow = "hidden";

  /* Do not render until components are all mounted. */
  if (!componentMounted) {
    return(<div/>);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <HashRouter>
        <Routes>

          <Route element={<NavBarLayout handleLogoClick={toggleTheme}/>}>
            <Route path='' element={<LoadingPage/>}/>
            <Route path='login' element={<LoginPage/>}/>
            <Route element={<SideBarLayout/>}>
              <Route path='home' element={<HomePage/>}/>
              <Route path='info' element={<InfoPage/>}/>
              <Route path='course/query' element={<CourseQueryPage/>}/>
              <Route path='course/select' element={<CourseSelectPage/>}/>
              <Route path='course/manage' element={<CourseManagePage/>}/>
              <Route path='user/manage' element={<UserManagePage/>}/>
              <Route path='semester/manage' element={<SemesterManagePage/>}/>
              <Route path='score' element={<ScorePage/>}/>
              <Route path='timetable' element={<TimeTablePage/>}/>
            </Route>
          </Route>

        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
