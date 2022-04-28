import React, { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import css from './LoginPrompt.module.css';
import close_button from '../../images/close_button.png';
import {
  loginThunk,
  openLoginPrompt,
  openRegistrationPrompt
} from '../../store/slices/authSlice';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

const LoginPrompt: FC = () => {
  const { isLoginPromptOnScreen, isRegistrationPromptOnScreen } = useAppSelector(
    (state) => state.authPromptReducer
  );
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const dispatch = useAppDispatch();

  const closeLogin = () => {
    dispatch(openLoginPrompt(false));
  };

  const openRegistration = () => {
    dispatch(openRegistrationPrompt(true));
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <div>
      <div
        className={
          isLoginPromptOnScreen
            ? css.content_wrap
            : isRegistrationPromptOnScreen
            ? css.content_wrap_switch
            : css.content_wrap_closed
        }>
        <div className={css.close_button_wrap}>
          <img src={close_button} alt="close_button" onClick={closeLogin} />
        </div>
        <div className={css.content}>
          <div className={css.header}>
            <h1>Вхід в кабінет</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'Ваш емейл'} {...register('email')} />
            <input type="text" placeholder={'Ваш пароль'} {...register('password')} />
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
