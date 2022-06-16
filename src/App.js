import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'stylesheet.js'

import SideBarLayout from "./pages/SideBarLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import NavBar from "./components/navigation/NavBar";

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
          <Route path='login' element={<LoginPage/>}/>
          <Route element={<SideBarLayout/>}>
            <Route path='' element={<HomePage/>}/>
            <Route path='info' element={<InfoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
