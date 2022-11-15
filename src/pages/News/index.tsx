import { FC, memo, useEffect, useState } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Layout from '../../components/Layout';
import NewsContent from '../../components/News/NewsContent';
import NewsList from '../../components/News/NewsList';
import NewsPagination from '../../components/News/NewsPagination';
import NewsTitleSearch from '../../components/News/NewsTitleSearch';
import { countPages } from '../../utils/countPages';

const News: FC = () => {

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [countPage, setCountPage] = useState([]);

  //@ts-ignore
  const getNews = async (page) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
    const data = await response.json();
    //@ts-ignore
    setCountPage(countPages(response.headers.get("x-total-count")));
    setNews(data);
  }

  useEffect(() => {
    getNews(page);
  }, [page]);

  console.log(countPage);
  
  
  
  return (
    <Layout>
      <NewsContent>
        <BreadCrumbs page="Новости" mb="25" />
        <NewsTitleSearch />
        {/* @ts-ignore */}
        <NewsList news={news} />
        {/* @ts-ignore */}
        <NewsPagination changePage={setPage} countPage={countPage} currentPage={page} />
      </NewsContent>
    </Layout>
  );
}

export default memo(News);