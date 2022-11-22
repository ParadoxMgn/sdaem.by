import { FC } from 'react';
import {Routes, Route} from "react-router-dom";
import NewsArticle from './pages/NewsArticle';
import Main from './pages/Main';
import News from './pages/News';

const App: FC = () => {
  
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />}/>
        <Route path={"/news"} element={<News />} />
        <Route path={"/news/:id"} element={<NewsArticle/>}/>
        {/* <Route path={"/profile"} element={<Protected redirect={'/login'}><Profile/></Protected>}/> */}
      </Routes>
    </>
  )
}

export default App;
