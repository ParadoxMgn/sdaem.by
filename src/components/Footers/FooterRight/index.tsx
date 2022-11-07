import { FC, memo } from 'react';
import FooterCommunity from '../FooterCommunity';
import FooterNav from '../FooterNav';

import st from './style.module.scss';

const FooterRight: FC = () => {

  return (
    <div className={st.column}>
      <FooterNav />
      <FooterCommunity />
    </div>
  );
}

export default memo(FooterRight);