import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import css from './LoginPrompt.module.css';
import close_button from '../../images/close_button.png';
import {
  openLoginPrompt,
  openRegistrationPrompt
} from '../../store/slices/authPromptSlice';

const LoginPrompt: FC = () => {
  const { isLoginPromptOnScreen, isRegistrationPromptOnScreen } = useAppSelector(
    (state) => state.authPromptReducer
  );

  const dispatch = useAppDispatch();

  const closeLogin = () => {
    dispatch(openLoginPrompt(false));
  };

  const openRegistration = () => {
    dispatch(openRegistrationPrompt(true));
  };

  return (
    <div>
      <div className={isLoginPromptOnScreen ?
        css.content_wrap :
        isRegistrationPromptOnScreen ?
          css.content_wrap_switch :
          css.content_wrap_closed
      }>
        <div className={css.close_button_wrap}>
          <img src={close_button} alt="close_button" onClick={closeLogin} />
        </div>
        <div className={css.content}>
          <div className={css.header}>
            <h1>Вхід в кабінет</h1>
          </div>
          <form>
            <input type="text" placeholder={'Ваш емейл'} />
            <input type="text" placeholder={'Ваш пароль'} />
            <button className={css.btn}>Увійти в кабінет</button>
          </form>
        </div>
        <div className={css.bottom_menu}>
          <div>
            <span>Забули пароль</span>
          </div>
          <div>
            <span className={css.registration_button} onClick={openRegistration}>
              Зареєструватись
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrompt;