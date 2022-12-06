import { FC, memo, useEffect, useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Layout from '../../components/Layout';
import NewsContent from '../../components/News/NewsContent';
import NewsList from '../../components/News/NewsList';
import NewsPagination from '../../components/News/NewsPagination';
import NewsTitleSearch from '../../components/News/NewsHead';
import { countPages } from '../../utils/countPages';
import { useGetNewsQuery } from '../../redux/news/news.api';

const News: FC = () => {

  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useGetNewsQuery(9);

  return (
    <Layout>
      <NewsContent>
        <BreadCrumbs page="Новости" mb="25" link="/news"/>
        <NewsTitleSearch />
        {
          isLoading
            ? 'Loading...'
            : error
              ? 'Error...'
              : <>
                  {/* @ts-ignore */}
                  <NewsList news={data} />
                  {/* @ts-ignore */}
                  <NewsPagination changePage={setPage} countPage={[1, 2, 3, 4, 5]} currentPage={page} />
                </>
        }
      </NewsContent>
    </Layout>
  );
}

export default memo(News);