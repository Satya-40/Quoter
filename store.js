import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './Slices/quoteSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
})