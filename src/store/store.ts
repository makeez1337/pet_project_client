import { configureStore } from '@reduxjs/toolkit'
import authPromptReducer from './slices/authPromptSlice';

export const store = configureStore({
  reducer: {
    authPromptReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch