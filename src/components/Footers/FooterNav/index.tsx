import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import st from './style.module.scss';

const FooterNav: FC = () => {

  return (
    <nav className={st.nav}>
      <ul className={st.list}>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link, st.bold)}>Коттеджи и усадьбы</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link, st.bold)}>Бани и сауны</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link, st.bold)}>Авто на прокат</Link>
        </li>
      </ul>
      <ul className={st.list}>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link, st.bold, st.gen)}>Квартиры</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Квартиры в Минске</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Квартиры в Гомеле</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Квартиры в Бресте</Link>
        </li>
      </ul>
      <ul className={st.list}>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Квартиры в Витебске</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Квартиры в Гродно</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Квартиры в Могилеве</Link>
        </li>
      </ul>
      <ul className={st.list}>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Новости</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Размещение и тарифы</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Объявления на карте</Link>
        </li>
        <li className={cn(st.item)}>
          <Link to={"#"} className={cn(st.link)}>Контакты</Link>
        </li>
      </ul>
    </nav>
  );
}

export default memo(FooterNav);