import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INews } from './news.types'

export const newsApi = createApi({
  reducerPath: 'api/news',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    getNews: build.query<INews[], number>({query: (page = 1) => `posts?_limit=9&_page=${page}`})
  })
})


export const { useGetNewsQuery } = newsApi