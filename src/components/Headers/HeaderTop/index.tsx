import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart  } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import Container from '../../Container';

import st from "./style.module.scss";

const HeaderTop: FC = () => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
          <nav className={st.nav}>
            <ul className={st.list}>
              <li className={st.item}>
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
                <Link to={"#"} className={st.link}>Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className={st.controls}>
            <button className={st.like}>
              <span>Закладки</span>
              <FiHeart fill='#fff' style={{color: "#8291A3"}} />
            </button>
            <Link to={"#"} className={st.auth}>Вход и регистрация</Link>
          </div> 
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;