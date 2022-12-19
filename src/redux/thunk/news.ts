import { setCountPage, setNews } from "../reducers/news/newsSlice";
import { AppDispatch } from "../store/store";
import { countPages } from "../../utils/countPages";

//@ts-ignore
export const fetchNews = async(dispatch: AppDispatch, page = 1, query = '') => {
  
  //@ts-ignore
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}&_limit=9&_page=${page}`);
    const data = await response.json();
    //@ts-ignore
    const pages = countPages(response.headers.get("x-total-count"))
    
    dispatch(setNews(data))
    dispatch(setCountPage(pages))
}