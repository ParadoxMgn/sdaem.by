import { FC, memo, useState } from 'react';
import st from './style.module.scss';
import Container from '../../Container';
import SearchSvg from '../../SvgIcons/SearchSvg';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { setCurrentPage, setQuery } from '../../../redux/reducers/news/newsSlice';

const NewsHead: FC = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const search = (e: any) => {
    e.preventDefault()

    dispatch(setQuery(value))
    dispatch(setCurrentPage(1))
  }

  return (
    <div className={st.wrapper}>
      <Container>
        <div className={st.row}>
          <h1 className={st.title}>
            Новости
          </h1>
          <form action="#" className={st.form} onSubmit={(e: any) => search(e)} >
            {/* ts-ignore */}
            <input type='text' value={value} className={st.text} onChange={e => setValue(e.target.value.trim())} />
            <button className={st.btn}>
              <SearchSvg />
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default memo(NewsHead);