import { configureStore } from '@reduxjs/toolkit'
import loginPromptReducer from './slices/loginPromptSlice';

export const store = configureStore({
  reducer: {
    loginPromptReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch