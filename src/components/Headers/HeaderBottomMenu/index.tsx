import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import st from "./style.module.scss";
import menuList from './menuList';
import ThemeContext from '../../ThemeProvider/context';

const HeaderBottomMenu: FC = () => {

  const { dark } = useContext(ThemeContext);

  return (
    <nav className={st.nav}>
      <ul className={st.list}>
        {menuList.map(({ path, name, svg }, index) => (
          <li className={st.item} key={path + index}>
            <Link to={path} className={st.link}>
              <span>{ name }</span>
              {svg && <FaMapMarkerAlt fill={ dark ? '#2B2B2B' : '#FFD54F'} className={st.icon}/>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderBottomMenu;