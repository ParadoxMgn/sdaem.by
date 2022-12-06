import { FC, PropsWithChildren } from 'react';
import Container from '../../Container';

import st from "./style.module.scss";

const HeaderTop: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
        { children }
        </div>
      </Container>
    </div>
  );
}

export default HeaderTop;