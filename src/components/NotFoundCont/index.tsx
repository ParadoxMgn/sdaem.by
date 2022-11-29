import { FC, memo, PropsWithChildren } from 'react';
import cn from 'classnames';

import st from './style.module.scss';
import Container from '../Container';
import HomeSvg from '../SvgIcons/HomeSvg';
import { Link } from 'react-router-dom';

const NotFoundContent: FC = () => {

  return (
    <div className={cn(st.wrapper)}>
      <Container>
        <div className={cn(st.row)}>
          <div className={cn(st.column)}>
            <div className={cn(st.title)}>Ошибка 404</div>
            <div className={cn(st.text)}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</div>
            <Link to={"/"} className={cn(st.btn)}>
              <HomeSvg fill={"#1E2123"} />
              <span>Вернуться на главную</span>
            </Link>
          </div>
          <div className={cn(st.fail)}>404</div>
        </div>
      </Container>
    </div>
  );
}

export default memo(NotFoundContent);