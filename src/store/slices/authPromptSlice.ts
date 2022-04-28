import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authService } from '../../services/authService';
import { ILoginCredentials } from '../../interfaces/authInterface';
import axios from "axios";

export interface authPromptState {
  isLoginPromptOnScreen: boolean;
  isRegistrationPromptOnScreen: boolean;
}

const initialState: authPromptState = {
  isLoginPromptOnScreen: false,
  isRegistrationPromptOnScreen: false
};

export const loginThunk = createAsyncThunk(
  'authPromptSlice/login',
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

export const authPromptSlice = createSlice({
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

export const { openLoginPrompt, openRegistrationPrompt, switchToLogin } = authPromptSlice.actions;

export default authPromptSlice.reducer;
