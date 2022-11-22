import { FC, memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import st from './style.module.scss';
import image from "../../../assets/img/title.png";

{/* @ts-ignore */}
const NewsItem: FC = ({ item }) => {

  return (
    <div className={st.wrapper}>
      <div className={st.column}>
        <div className={st.image}>
          <img src={image} alt="image" />
        </div>
        <div className={st.title}>{item.title}</div>
        <div className={st.content}>{item.body.slice(0, 220) + '...'}</div>
        <div className={st.hr}></div>
        <div className={st.footer}>
          <div className={st.date}>14 Января 2008</div>
          <Link to={`/news/${item.id}`} className={st.btn}>Читать</Link>
        </div>
      </div>
    </div>
  );
}

export default memo(NewsItem);