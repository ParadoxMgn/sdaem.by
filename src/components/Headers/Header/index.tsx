import { FC, memo } from 'react';
import HeaderBottom from '../HeaderBottom';
import HeaderBottomMenu from '../HeaderBottomMenu';
import HeaderButton from '../HeaderButton';
import HeaderControls from '../HeaderControls';
import HeaderTop from '../HeaderTop';
import HeaderTopMenu from '../HeaderTopMenu';

const Header: FC = () => {
  
  return (
    <>
      <HeaderTop>
        <HeaderTopMenu />
        <HeaderControls />
      </HeaderTop>
      <HeaderBottom>
        <HeaderBottomMenu />
        <HeaderButton />
      </HeaderBottom>
    </>
);
}

export default memo(Header);