import { FC } from 'react';
import {Routes, Route} from "react-router-dom";
import News from './pages/News';

const App: FC = () => {
  
  return (
    <>
      <Routes>
        {/* <Route path={''} element={<Main/>}/> */}
        {/* <Route path={"/articles/:id"} element={<Article/>}/> */}
        <Route path={"/"} element={<News />}/>
        {/* <Route path={"/profile"} element={<Protected redirect={'/login'}><Profile/></Protected>}/> */}
      </Routes>
    </>
  )
}

export default App;
