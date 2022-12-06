import React, { createContext } from 'react';
import IThemeContext from './interface';

const defaultState = {
  dark: false,
};

const ThemeContext = createContext<IThemeContext>(defaultState);

export default ThemeContext;