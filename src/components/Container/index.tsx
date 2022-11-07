import { FC, memo, PropsWithChildren } from 'react';

import st from './style.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={st.container}>
      { children }
    </div>
  );
}

export default memo(Container);