import React from 'react';
import LoginPrompt from '../LoginPrompt/LoginPrompt';
import RegistrationPrompt from '../RegistrationPrompt/RegistrationPrompt';

const Auth = () => {
  return (
    <div>
      <LoginPrompt/>
      <RegistrationPrompt/>
    </div>
  );
};

export default Auth;