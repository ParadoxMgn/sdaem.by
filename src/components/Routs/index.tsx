import { FC } from 'react';
import {Routes, Route} from "react-router-dom";
import list from './list';


const Routs: FC = () => {
  
  return (
    <>
      <Routes>
        {/* @ts-ignore */}
        {
          list.map(({ path, element }) =>
            <Route path={path} element={element} key={path} />
          )
        }
      </Routes>
    </>
  )
}

export default Routs;