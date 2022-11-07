import { FC, memo } from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import Container from '../../components/Container';
import Layout from '../../components/Layout';
import NewsContent from '../../components/News/NewsContent';
import NewsTitleSearch from '../../components/News/NewsTitleSearch';

const News: FC = () => {

  return (
    <Layout>
      <NewsContent>
        <BreadCrumbs page="Новости" mb="25" />
        <NewsTitleSearch />
      </NewsContent>
    </Layout>
  );
}

export default memo(News);