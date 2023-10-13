import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const HandleDarkMode = () => {
    setDarkMode(!darkMode)
  }


  return (
    <DarkModeContext.Provider value={{ darkMode, HandleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}