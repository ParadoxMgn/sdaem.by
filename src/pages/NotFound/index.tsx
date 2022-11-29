import { FC, memo } from 'react';
import Layout from '../../components/Layout';
import NotFoundContent from '../../components/NotFoundContent';

const NotFound: FC = () => {

  return (
    <Layout>
      <NotFoundContent />
    </Layout>
  );
}

export default memo(NotFound);