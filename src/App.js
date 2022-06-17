import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'stylesheet.js'

import NavBar from "./components/navigation/NavBar";
import SideBarLayout from "./pages/SideBarLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import CoursePage from "./pages/CoursePage";
import CourseSelectPage from "./pages/CourseSelectPage";
import ScorePage from "./pages/ScorePage";
import TimeTablePage from "./pages/TimeTablePage";
import LoadingPage from "./pages/LoadingPage";
import { useTheme } from "./util/UseTheme";

function App() {
  const [theme, toggleTheme, componentMounted] = useTheme();

  if (!componentMounted) {
    return(<div/>);
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <BrowserRouter>
        <NavBar handleLogoClick={toggleTheme}/>
        <Routes>
          <Route path='' element={<LoadingPage/>}/>
          <Route path='login' element={<LoginPage/>}/>
          <Route element={<SideBarLayout/>}>
            <Route path='home' element={<HomePage/>}/>
            <Route path='info' element={<InfoPage/>}/>
            <Route path='course' element={<CoursePage/>}/>
            <Route path='selection' element={<CourseSelectPage/>}/>
            <Route path='score' element={<ScorePage/>}/>
            <Route path='timetable' element={<TimeTablePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
