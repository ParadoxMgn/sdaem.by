import React, { FC, PropsWithChildren, useState } from 'react'
import ThemeContext from './context';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
  };
  
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider
