import { FC, memo } from 'react';
import cn from 'classnames';
import { AiOutlineSearch } from "react-icons/ai";

import st from './style.module.scss';
import Container from '../../Container';
import SearchSvg from '../../SvgIcons/SearchSvg';

const NewsTitleSearch: FC = () => {

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
          <h1 className={st.title}>
            Новости
          </h1>
          <form action="#" className={st.form}>
            <input type='text' className={st.text} />
            <button className={st.btn}>
              <SearchSvg />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default memo(NewsTitleSearch);