import { FC, memo, useEffect, useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Layout from '../../components/Layout';
import NewsContent from '../../components/News/NewsContent';
import NewsList from '../../components/News/NewsList';
import NewsPagination from '../../components/News/NewsPagination';
import NewsTitleSearch from '../../components/News/NewsHead';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { fetchNews } from '../../redux/thunk/news';

const News: FC = () => {

  const [page, setPage] = useState(1);
  
  const news = useSelector((state: RootState) => state.news.news)
  const countPages = useSelector((state: RootState) => state.news.countPage)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchNews(dispatch, page)    
  }, [page]);

  return (
    <Layout>
      <NewsContent>
        <BreadCrumbs page="Новости" mb="25" link="/news"/>
        <NewsTitleSearch />
        {/* @ts-ignore */}
        <NewsList news={news} />
        {/* @ts-ignore */}
        <NewsPagination changePage={setPage} countPage={countPages} currentPage={page} />
      </NewsContent>
    </Layout>
  );
}

export default memo(News);


// {
//   isLoading
//     ? 'Loading...'
//     : error
//       ? 'Error...'
//       : <>
//           {/* @ts-ignore */}
//           <NewsList news={data} />
//           {/* @ts-ignore */}
//           <NewsPagination changePage={setPage} countPage={[1, 2, 3, 4, 5]} currentPage={page} />
//         </>
// }