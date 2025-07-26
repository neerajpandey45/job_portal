"use client";
import { createContext, useContext, useState } from "react";
const themeContext = createContext();
export const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);
    const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <div>
      <themeContext.Provider value={{ isDark, toggleTheme }}>
        <div className={`${isDark?"bg-gray-800 text-white":"bg-white"}`}>{children}</div>
      </themeContext.Provider>
    </div>
  );
};
export const useTheme = () => useContext(themeContext);
