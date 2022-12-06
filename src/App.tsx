import { FC } from 'react';
import Routs from './components/Routs';
import ThemeProvider from './components/ThemeProvider';

const App: FC = () => {
  
  return (
    <ThemeProvider>
      <Routs />
    </ThemeProvider>
  )
}

export default App;
