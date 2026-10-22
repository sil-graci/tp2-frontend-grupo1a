import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'devstudio-theme';

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    let saved;
    try {
      saved = window.localStorage.getItem(STORAGE_KEY);
    } catch { /* El navegador puede bloquear el acceso a localStorage. */ }
    if (saved === 'dark' || saved === 'light') return saved;

    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn('No se pudo guardar la preferencia de tema en localStorage', e);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
