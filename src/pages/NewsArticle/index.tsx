import { FC, memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from '../../components/Article/ArticleContent';
import ArticleFooter from '../../components/Article/ArticleFooter';
import ArticleHead from '../../components/Article/ArticleHead';
import ArticleMain from '../../components/Article/ArticleMain';
import BreadCrumbs from '../../components/BreadCrumbs';
import Layout from '../../components/Layout';

const NewsArticle: FC = () => {

  const params = useParams();

  const [article, setArticle] = useState({});
  const [news, setNews] = useState([]);

  //@ts-ignore
  const getArticle = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    //@ts-ignore
    setArticle(data);
  }
  //@ts-ignore
  const getNews = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`);
    const data = await response.json();
    //@ts-ignore
    setNews(data);
  }

  useEffect(() => {
    getArticle(params.id);
    //@ts-ignore
    getNews();
  }, [params.id]);

  return (
    <Layout>
      <ArticleContent>
        <ArticleHead />
        <ArticleMain />
        {/* @ts-ignore */}
        <ArticleFooter news={news} />
      </ArticleContent>
    </Layout>
  );
}

export default memo(NewsArticle);