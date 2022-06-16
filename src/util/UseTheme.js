/**
 * @file Custom React 'use' hook.
 * @author Homan Wong
 */

import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setModeInStorage = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === 'light') {
      setModeInStorage('dark');
    } else {
      setModeInStorage('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setModeInStorage('dark') :
      localTheme ? setTheme(localTheme) : setModeInStorage('light');
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted]
};
