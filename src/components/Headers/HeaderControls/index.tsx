import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart  } from "react-icons/fi";
import cn from "classnames";
import st from "./style.module.scss";
import ThemeContext from '../../ThemeProvider/context';

const HeaderControls: FC = () => {
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <div className={st.controls}>
      {/* @ts-ignore */}
      <button className={st.like} onClick={() => toggleDark()} >
        <span>Закладки</span>
        <FiHeart fill={dark ? '#000' : '#fff'} style={{color: "#8291A3"}} />
      </button>
      <Link to={"/auth"} className={cn(st.auth, {[st.dark]: dark})}>Вход и регистрация</Link>
    </div> 
  );
}

export default HeaderControls;