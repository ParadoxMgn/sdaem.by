import { FC, memo, PropsWithChildren } from 'react';
import cn from 'classnames';

import st from './style.module.scss';

const NewsContent: FC<PropsWithChildren> = ({ children }) => {

  return (
    <div className={cn(st.wrapper)}>
      { children }
    </div>
  );
}

export default memo(NewsContent);