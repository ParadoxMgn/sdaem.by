import { FC, memo } from 'react';
import Container from '../../Container';
import cn from 'classnames';

import st from './style.module.scss';

//@ts-ignore
const NewsPagination: FC = ({ changePage, countPage, currentPage }) => {

  return (
    <div className={st.wrapper}>
      <Container>
        <ul className={st.row}>
          {
            // @ts-ignore
            countPage.map(item => {
              return (
              <li 
                key={item}
                className={cn(st.item, item === currentPage ? st.active : false)}
                onClick={() => changePage(item)}>
                {item}
              </li>)
            })
          }
        </ul>
      </Container>
    </div>
  );
}

export default memo(NewsPagination);