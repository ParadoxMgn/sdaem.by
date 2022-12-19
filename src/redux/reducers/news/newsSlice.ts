import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface INews {
  news: IItem[];
  countPage: number[];
  currentPage: number;
  query: string;
}

const initialState: INews = {
  news: [],
  countPage: [],
  currentPage: 1,
  query: '',
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<IItem[]>) => {
      state.news = action.payload
    },
    setCountPage: (state, action: PayloadAction<number[]>) => {
      state.countPage = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload
    },
  },
})

export const { setNews, setCountPage, setCurrentPage, setQuery } = newsSlice.actions

export default newsSlice.reducer