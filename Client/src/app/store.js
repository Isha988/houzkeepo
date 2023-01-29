import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user/userSlice'

export const store = configureStore({
    reducer: { 
      // combining reducers
      user: userReducer,
      
    },
  })