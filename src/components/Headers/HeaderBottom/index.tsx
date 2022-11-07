import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt } from "react-icons/fa";
import Container from '../../Container';

import logo from '../../../assets/img/logo.png';
import st from "./style.module.scss";

const HeaderBottom: FC = () => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
          <Link to={"#"} className={st.logo}>
            <img src={logo} alt='SDAEM.BY' />
          </Link>
          <nav className={st.nav}>
            <ul className={st.list}>
              <li className={st.item}>
                <Link to={"#"} className={st.link}>
                  <span>Квартиры на сутки</span>
                  <FaMapMarkerAlt fill='#FFD54F' className={st.icon}/>
                </Link>
              </li>
              <li className={st.item}>
                <Link to={"#"} className={st.link}>Коттеджи и усадьбы</Link>
              </li>
              <li className={st.item}>
                <Link to={"#"} className={st.link}>Бани и Сауны</Link>
              </li>
              <li className={st.item}>
                <Link to={"#"} className={st.link}>Авто напрокат</Link>
              </li>
            </ul>
          </nav>
          <button className={st.btn}>
            +  Разместить объявление
          </button>
        </div>
      </Container>
    </div>
  );
}

export default HeaderBottom;