import axios, { AxiosError } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { authService } from '../../services';
import { IAuthResponse, ILoginCredentials, IRegistrationForm } from '../../interfaces';
import { IUser } from '../../interfaces';

export interface authPromptState {
  user: IUser | null;
  isAuth: boolean;
  isCheckAuthLoading: boolean;
  authStatus: string;
  loginError: string | null | undefined;

  isLoginPromptOnScreen: boolean;
  isRegistrationPromptOnScreen: boolean;
}

export interface CustomError {
  message: string;
}

const initialState: authPromptState = {
  user: null,
  isAuth: false,
  isCheckAuthLoading: false,
  authStatus: '',
  loginError: null,

  isLoginPromptOnScreen: false,
  isRegistrationPromptOnScreen: false
};

export const registrationThunk = createAsyncThunk<
  IAuthResponse,
  Partial<IRegistrationForm>,
  {
    rejectValue: CustomError;
  }
>('authSlice/registration', async (userData: Partial<IRegistrationForm>, { rejectWithValue }) => {
  try {
    const response = await authService.registration({ ...userData });
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data as IAuthResponse;
  } catch (err) {
    let error = err as AxiosError<CustomError>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const loginThunk = createAsyncThunk<
  IAuthResponse,
  ILoginCredentials,
  {
    rejectValue: CustomError;
  }
>('authSlice/login', async (credentials: ILoginCredentials, { rejectWithValue }) => {
  try {
    const response = await authService.login(credentials);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data as IAuthResponse;
  } catch (err) {
    let error = err as AxiosError<CustomError>;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const checkAuthThunk = createAsyncThunk(
  'authSlice/checkAuthThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.refresh();
      localStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
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
      await authService.logout();
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
    },
    clearLoginError: (state) => {
      state.loginError = null;
    }
  },
  extraReducers: (builder) => {
    // registrationThunk
    builder.addCase(registrationThunk.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload?.user as IUser;
    });
    builder.addCase(registrationThunk.rejected, (state, action) => {
      state.isAuth = false;
      state.user = null;
    });

    // loginThunk
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload?.user as IUser;
      state.loginError = null;
    });
    builder.addCase(loginThunk.rejected, (state, action) => {
      state.isAuth = false;
      state.user = null;
      state.loginError = action.payload?.message;
      state.isCheckAuthLoading = false;
    });

    // checkAuthThunk
    builder.addCase(checkAuthThunk.pending, (state, action) => {
      state.isCheckAuthLoading = true;
      state.user = null;
      state.authStatus = 'pending';
      state.isAuth = false;
    });
    builder.addCase(checkAuthThunk.fulfilled, (state, action) => {
      state.isCheckAuthLoading = false;
      state.user = action.payload?.user as IUser;
      state.authStatus = 'fulfilled';
      state.isAuth = true;
    });
    builder.addCase(checkAuthThunk.rejected, (state, action) => {
      state.isCheckAuthLoading = false;
      state.authStatus = 'rejected';
      state.user = null;
      state.isAuth = false;
    });

    // logOutThunk
    builder.addCase(logOutThunk.fulfilled, (state, action) => {
      state.isAuth = false;
      state.user = null;
    });
  }
});

export const { openLoginPrompt, openRegistrationPrompt, switchToLoginPrompt, clearLoginError } =
  authSlice.actions;

export default authSlice.reducer;
