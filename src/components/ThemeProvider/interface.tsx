import React from 'react';

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

export default IThemeContext;