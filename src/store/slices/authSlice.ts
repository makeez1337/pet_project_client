import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';
import { ILoginCredentials } from '../../interfaces/authInterface';
import axios from 'axios';
import { IUser } from '../../interfaces/userInterface';

export interface authPromptState {
  user: IUser | null;
  isAuth: boolean;

  isLoginPromptOnScreen: boolean;
  isRegistrationPromptOnScreen: boolean;
}

const initialState: authPromptState = {
  user: null,
  isAuth: false,

  isLoginPromptOnScreen: false,
  isRegistrationPromptOnScreen: false
};

export const loginThunk = createAsyncThunk(
  'authSlice/login',
  async (credentials: ILoginCredentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials);
      console.log(response.data);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log('error message: ', e.response?.data);
        return e.response?.data;
      }
      if (e instanceof Error) {
        console.log('unexpected error: ', e.message);
        return e.message;
      }
    }
  }
);

export const authSlice = createSlice({
  name: 'authPromptSlice',
  initialState,
  reducers: {
    openLoginPrompt: (state, action: PayloadAction<boolean>) => {
      state.isLoginPromptOnScreen = action.payload;
      state.isRegistrationPromptOnScreen = false;
    },
    openRegistrationPrompt: (state, action: PayloadAction<boolean>) => {
      state.isRegistrationPromptOnScreen = action.payload;
      state.isLoginPromptOnScreen = false;
    },
    switchToLogin: (state) => {
      state.isRegistrationPromptOnScreen = false;
      state.isLoginPromptOnScreen = true;
    }
  }
});

export const { openLoginPrompt, openRegistrationPrompt, switchToLogin } = authSlice.actions;

export default authSlice.reducer;
