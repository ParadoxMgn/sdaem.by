import { FC, memo, PropsWithChildren } from 'react';
import Container from '../../Container';
import FooterLeft from '../FooterLeft';
import FooterRight from '../FooterRight';

import st from "./style.module.scss";

const Footer: FC<PropsWithChildren> = ({children}) => {

  return (
    <footer className={st.footer}>
      <Container>
        <div className={st.row}>
          <FooterLeft />
          <FooterRight />
        </div>
      </Container>
    </footer>
);
}

export default memo(Footer);