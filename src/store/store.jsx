import { configureStore } from '@reduxjs/toolkit'
import serviceSlice from './reducers/serviceSlice';

export const store = configureStore({
  reducer: {
    services : serviceSlice,
  },
})