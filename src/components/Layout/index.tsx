import { FC, memo, PropsWithChildren } from 'react';
import Footer from '../Footers/Footer';
import Header from '../Headers/Header';

import st from "./style.module.scss";

const Layout: FC<PropsWithChildren> = ({children}) => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main className={st.main}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default memo(Layout);