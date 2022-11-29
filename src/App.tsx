import { FC } from 'react';
import {Routes, Route} from "react-router-dom";
import NewsArticle from './pages/NewsArticle';
import Main from './pages/Main';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Contacts from './pages/Contacts';
import Auth from './pages/Auth';
import Reg from './pages/Reg';

const App: FC = () => {
  
  return (
    <>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path={"/"} element={<Main />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"/news/:id"} element={<NewsArticle />} />
        <Route path={"/auth"} element={<Auth />} />
        <Route path={"/registration"} element={<Reg />} />
        {/* <Route path={"/profile"} element={<Protected redirect={'/login'}><Profile/></Protected>}/> */}
      </Routes>
    </>
  )
}

export default App;
