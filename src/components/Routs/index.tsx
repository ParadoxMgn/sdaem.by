import { FC } from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import list from './list';


const Routs: FC = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        {
          list.map(({ path, element }) =>
            <Route path={path} element={element} key={path} />
          )
        }
      </Routes>
    </BrowserRouter>
  )
}

export default Routs;