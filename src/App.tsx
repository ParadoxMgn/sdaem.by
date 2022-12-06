import { FC } from 'react';
import Routs from './components/Routs';
import ThemeProvider from './components/ThemeProvider';
import { Provider } from 'react-redux'
import { store } from './redux/store/store';

const App: FC = () => {
  
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routs />
      </ThemeProvider>
    </Provider>
  )
}

export default App;
