import { FC, memo } from 'react';
import cn from 'classnames';
import { FaVk, FaFacebookF, FaViber, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

import st from './style.module.scss';
import Container from '../../Container';
import { Link } from 'react-router-dom';

const ArticleHead: FC = () => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.column}>
          <h1 className={st.title}>
            Название
          </h1>
          <div className={st.row}>
            <div className={st.date}>14 Января 2008</div>
            <div className={st.social}>
              <p className={st.share}>Поделиться</p>
              <Link to={"#"} className={st.circle}>
                <FaVk fill='#664EF9'/>
              </Link>
              <Link to={"#"} className={st.circle}>
                <FaFacebookF fill='#664EF9'/>
              </Link>
              <Link to={"#"} className={st.circle}>
                <FaViber fill='#664EF9'/>
              </Link>
              <Link to={"#"} className={st.circle}>
                <FaTelegramPlane fill='#664EF9'/>
              </Link>
              <Link to={"#"} className={st.circle}>
                <FaWhatsapp fill='#664EF9'/>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default memo(ArticleHead);