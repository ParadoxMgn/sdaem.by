import { FC, memo, PropsWithChildren } from 'react';
import HeaderBottom from '../HeaderBottom';
import HeaderTop from '../HeaderTop';

const Header: FC<PropsWithChildren> = ({children}) => {

  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
);
}

export default memo(Header);