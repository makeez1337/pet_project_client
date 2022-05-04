import React, { FC } from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { SubmitHandler, useForm } from 'react-hook-form';

import { authValidator } from '../../validators/auth/authValidator';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  clearLoginError,
  loginThunk,
  openLoginPrompt,
  openRegistrationPrompt
} from '../../store/slices/authSlice';
import { IAuthResponse } from '../../interfaces/authInterface';
import close_button from '../../images/close_button.png';
import css from './LoginPrompt.module.css';

type FormValues = {
  email: string;
  password: string;
};

const LoginPrompt: FC = () => {
  const { isLoginPromptOnScreen, isRegistrationPromptOnScreen, loginError } = useAppSelector(
    (state) => state.authReducer
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: joiResolver(authValidator.login)
  });

  const dispatch = useAppDispatch();

  const closeLogin = () => {
    dispatch(openLoginPrompt(false));
    dispatch(clearLoginError());
    reset();
  };

  const openRegistration = () => {
    dispatch(openRegistrationPrompt(true));
    dispatch(clearLoginError());
    reset();
  };

  const onSubmit: SubmitHandler<FormValues> = async (inputData) => {
    const data = await dispatch(loginThunk(inputData));

    const { user } = data.payload as IAuthResponse;

    if (user) {
      window.location.reload();
    }
    reset();
  };

  return (
    <div>
      <div
        className={
          isLoginPromptOnScreen
            ? errors.email || errors.password || loginError
              ? `${css.content_wrap} ${css.height350}`
              : css.content_wrap
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
            {errors.email && <div className={css.error_msg}>{errors.email.message}</div>}
            <input type="password" placeholder={'Ваш пароль'} {...register('password')} />
            {errors.password && <div className={css.error_msg}>{errors.password.message}</div>}
            {loginError && !errors.password && !errors.email && (
              <div className={css.error_msg}>{loginError}</div>
            )}
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
