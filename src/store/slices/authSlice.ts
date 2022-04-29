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
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log('error message: ', e.response?.data);
        return rejectWithValue(e.response?.data);
      }
      if (e instanceof Error) {
        console.log('unexpected error: ', e.message);
        return rejectWithValue(e.message);
      }
    }
  }
);

export const checkAuthThunk = createAsyncThunk(
  'authSlice/checkAuthThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.refresh();
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log('error message: ', e.response?.data);
        return rejectWithValue(e.response?.data);
      }
      if (e instanceof Error) {
        console.log('unexpected error: ', e.message);
        return rejectWithValue(e.message);
      }
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'authSlice/logOutThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.logout();
      localStorage.removeItem('accessToken');
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log('error message: ', e.response?.data);
        return rejectWithValue(e.response?.data);
      }
      if (e instanceof Error) {
        console.log('unexpected error: ', e.message);
        return rejectWithValue(e.message);
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
    switchToLoginPrompt: (state) => {
      state.isRegistrationPromptOnScreen = false;
      state.isLoginPromptOnScreen = true;
    }
  },
  extraReducers: (builder) => {
    // loginThunk
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload?.user as IUser;
    });

    // checkAuthThunk
    builder.addCase(checkAuthThunk.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload?.user as IUser;
    });

    // logOutThunk
    builder.addCase(logOutThunk.fulfilled, (state, action) => {
      state.isAuth = false;
      state.user = null;
    })
  }
});

export const { openLoginPrompt, openRegistrationPrompt, switchToLoginPrompt } = authSlice.actions;

export default authSlice.reducer;
