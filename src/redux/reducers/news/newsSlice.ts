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
}

const initialState: INews = {
  news: [],
  countPage: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    listNews: (state, action: PayloadAction<IItem[]>) => {
      state.news = action.payload
    },
    getCountPage: (state, action: PayloadAction<number[]>) => {
      state.countPage = action.payload
    },
  },
})

export const { listNews, getCountPage } = newsSlice.actions

export default newsSlice.reducer