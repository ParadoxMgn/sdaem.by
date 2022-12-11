import { configureStore } from '@reduxjs/toolkit'
import { newsApi } from '../news/news.api'
import newsReducer from '../reducers/news/newsSlice'

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    news: newsReducer
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(newsApi.middleware)
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch