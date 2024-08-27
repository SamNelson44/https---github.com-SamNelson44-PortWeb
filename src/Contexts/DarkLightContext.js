// DarkLightContext.js
import React, { createContext, useState, useContext } from 'react';

const DarkLightContext = createContext();

export const DarkLightProvider = ({ children }) => {
  const [toggleMode, setToggleMode] = useState(true);

  const toggleLightMode = () => {
    setToggleMode(prevMode => !prevMode);
    console.log("mode: ", toggleMode);
  };

  return (
    <DarkLightContext.Provider value={{ toggleMode, toggleLightMode }}>
      {children}
    </DarkLightContext.Provider>
  );
};

export const useDarkLight = () => useContext(DarkLightContext);
