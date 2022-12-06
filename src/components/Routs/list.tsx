import NewsArticle from '../../pages/NewsArticle';
import Main from '../../pages/Main';
import News from '../../pages/News';
import NotFound from '../../pages/NotFound';
import Contacts from '../../pages/Contacts';
import Auth from '../../pages/Auth';
import Reg from '../../pages/Reg';

{/* <Route path={"/profile"} element={<Protected redirect={'/login'}><Profile/></Protected>}/> */}

const list = [
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: "/",
    element: <Main />
  },
  {
    path: '/news',
    element: <News />
  },
  {
    path: '/news/:id',
    element: <NewsArticle />
  },
  {
    path: '/contacts',
    element: <Contacts />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/registration',
    element: <Reg />
  },
]

export default list