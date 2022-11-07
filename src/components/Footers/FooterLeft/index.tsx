import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/logo.png';
import st from "./style.module.scss";

const FooterLeft: FC = () => {

  return (
    <div className={st.column}>
      <Link to={"#"} className={st.logo}>
        <img src={logo} alt='SDAEM.BY' />
      </Link>
      <div className={st.title}>СДАЁМ БАЙ</div>
      <div className={st.content}>
        <span>ИП Шушкевич Андрей Викторович</span>
        <span>УНП 192602485 Минским горисполкомом 10.02.2016</span>
        <span>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</span>
        <span>+375 29 621 48 33, sdaem@sdaem.by</span>
        <span>Режим работы: 08:00-22:00</span>
      </div>
    </div>
  );
}

export default memo(FooterLeft);