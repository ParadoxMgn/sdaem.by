import { FC, memo } from 'react';
import cn from 'classnames';

import st from './style.module.scss';import Container from '../../Container';
import NewsItem from '../NewsItem';
//@ts-ignore
const NewsList: FC = ({ news }) => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
        {/* @ts-ignore */}
          {news.map(item => {
            {/* @ts-ignore */}
            return (<NewsItem key={item.id} item={item}/>)
          })}
        </div>
      </Container>
    </div>
  );
}

export default memo(NewsList);