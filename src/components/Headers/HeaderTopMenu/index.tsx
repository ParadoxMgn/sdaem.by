import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";

import st from "./style.module.scss";
import menuList from './menuList';

const HeaderTopMenu: FC = () => {

  return (
    <nav className={st.nav}>
      <ul className={st.list}>
        {menuList.map(({path, name, svg}, index) => (
          <li className={st.item} key={path + index}>
            <Link to={path} className={st.link}>
              {svg && <FaMapMarkerAlt fill='#8291A3' className={st.icon}/>}
              <span>{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderTopMenu;

{/* <li className={st.item}>
          <Link to={"/"} className={st.link}>Главная</Link>
        </li>
        <li className={st.item}>
          <Link to={"/news"} className={st.link}>Новости</Link>
        </li>
        <li className={st.item}>
          <Link to={"#"} className={st.link}>Размещение и тарифы</Link>
        </li>
        <li className={st.item}>
          <Link to={"#"} className={st.link}>
            <FaMapMarkerAlt fill='#8291A3' className={st.icon}/>
            <span>Объявления на карте</span>
          </Link>
        </li>
        <li className={st.item}>
          <Link to={"/contacts"} className={st.link}>Контакты</Link>
        </li> */}