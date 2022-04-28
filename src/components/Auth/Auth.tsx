import React from 'react';

import LoginPrompt from '../LoginPrompt/LoginPrompt';
import RegistrationPrompt from '../RegistrationPrompt/RegistrationPrompt';
import css from './Auth.module.css';
import { useAppSelector } from '../../hooks/reduxHooks';

const Auth = () => {
  const { isLoginPromptOnScreen, isRegistrationPromptOnScreen } = useAppSelector(
    (state) => state.authReducer
  );
  return (
    <div
      className={isRegistrationPromptOnScreen || isLoginPromptOnScreen ? css.auth_wrap_active : ''}>
      <LoginPrompt />
      <RegistrationPrompt />
    </div>
  );
};

export default Auth;
