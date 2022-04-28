import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import close_button from '../../images/close_button.png';
import css from './RegistrationPrompt.module.css';
import { switchToLoginPrompt } from '../../store/slices/authSlice';

const RegistrationPrompt = () => {
  const { isRegistrationPromptOnScreen } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const switchToLog = () => {
    dispatch(switchToLoginPrompt());
  };

  return (
    <div
      className={isRegistrationPromptOnScreen ? css.content_wrap_opened : css.content_wrap_closed}>
      <div className={css.close_button_wrap}>
        <img src={close_button} alt="close_button" onClick={switchToLog} />
      </div>
      <h1 className={css.header}>Реєстрація</h1>
      <form className={css.form_style}>
        <input type="text" placeholder={'Ваше імя'} />
        <input type="text" placeholder={'Ваша фамілія'} />
        <input type="text" placeholder={'Ваш емейл'} />
        <input type="text" placeholder={'Пароль'} />
        <button className={css.btn}>Зареєструватись</button>
      </form>
      <div className={css.bottom_menu}>
        Вже зареєстровані?{' '}
        <span className={css.switch_to_login_text} onClick={switchToLog}>
          Увійти
        </span>
      </div>
    </div>
  );
};

export default RegistrationPrompt;
