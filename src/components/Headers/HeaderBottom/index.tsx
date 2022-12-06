import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../Container';

import logo from '../../../assets/img/logo.png';
import st from "./style.module.scss";

const HeaderBottom: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
          <Link to={"#"} className={st.logo}>
            <img src={logo} alt='SDAEM.BY' />
          </Link>
          { children }
        </div>
      </Container>
    </div>
  );
}

export default HeaderBottom;