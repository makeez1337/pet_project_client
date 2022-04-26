import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface authPromptState {
  isLoginPromptOnScreen: boolean;
  isRegistrationPromptOnScreen: boolean;
}

const initialState: authPromptState = {
  isLoginPromptOnScreen: false,
  isRegistrationPromptOnScreen: false
};

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
