import React from 'react';

import { useAppSelector } from '../../hooks/reduxHooks';
import LoginPrompt from '../LoginPrompt/LoginPrompt';
import RegistrationPrompt from '../RegistrationPrompt/RegistrationPrompt';
import css from './Auth.module.css';

const Auth = () => {
  const { isLoginPromptOnScreen, isRegistrationPromptOnScreen, user } = useAppSelector(
    (state) => state.authReducer
  );
  return (
    <div
      className={
        isRegistrationPromptOnScreen || isLoginPromptOnScreen ? css.auth_wrap_active : ''}>
      <LoginPrompt />
      <RegistrationPrompt />
    </div>
  );
};

export default Auth;
