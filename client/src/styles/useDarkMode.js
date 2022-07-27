import { useState, useEffect } from "react";

export const useDarkMode = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return [theme, toggleTheme];
};
