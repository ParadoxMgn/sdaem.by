import { FC, memo, useEffect, useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Layout from '../../components/Layout';
import NewsContent from '../../components/News/NewsContent';
import NewsList from '../../components/News/NewsList';
import NewsPagination from '../../components/News/NewsPagination';
import NewsHead from '../../components/News/NewsHead';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { fetchNews } from '../../redux/thunk/news';
import { setCurrentPage } from '../../redux/reducers/news/newsSlice';

const News: FC = () => {

  // const [page, setPage] = useState(1);
  
  const { news, countPage, currentPage, query } = useSelector((state: RootState) => state.news)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchNews(dispatch, currentPage, query)
  }, [currentPage, query]);

  return (
    <Layout>
      <NewsContent>
        <BreadCrumbs page="Новости" mb="25" link="/news"/>
        <NewsHead />
        {/* @ts-ignore */}
        <NewsList news={news} />
        {/* @ts-ignore */}
        <NewsPagination changePage={page => dispatch(setCurrentPage(page))} countPage={countPage} currentPage={currentPage} />
      </NewsContent>
    </Layout>
  );
}

export default memo(News);