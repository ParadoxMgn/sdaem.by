import { FC, memo } from 'react';
import ContactsContent from '../../components/ContactsContent';
import Layout from '../../components/Layout';

const Contacts: FC = () => {

  return (
    <Layout>
      <ContactsContent />
    </Layout>
  );
}

export default memo(Contacts);