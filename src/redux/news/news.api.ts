import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INews } from './news.types'

export const newsApi = createApi({
  reducerPath: 'api/news',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: build => ({
    //@ts-ignore
    getNews: build.query({query: (page = 1) => ({
      url: `posts?_limit=9&_page=${page}`,
      // This is the same as passing 'text'
      //@ts-ignore
      responseHandler: (response) => {
      //@ts-ignore
        console.log(response.json().then());
        console.log(response.headers);
        return ({})
      } 
    }),
    }),
    //@ts-ignore
    getCount: build.query({query: (page = 1) => ({
      url: `posts?_limit=9&_page=${page}`,
      // This is the same as passing 'text'
      //@ts-ignore
      responseHandler: (response) => response.headers.get('x-total-count'),
    }),
    }),
  })
})


export const { useGetNewsQuery, useGetCountQuery } = newsApi
