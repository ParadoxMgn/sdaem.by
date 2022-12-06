import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { newsApi } from '../news/news.api'

export const store = configureStore({
  reducer: {[newsApi.reducerPath]: newsApi.reducer},
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(newsApi.middleware)
})

setupListeners(store.dispatch)

export type TypeRootState = ReturnType<typeof store.getState>