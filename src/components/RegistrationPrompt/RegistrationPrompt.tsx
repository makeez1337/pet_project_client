import React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import { SubmitHandler, useForm } from 'react-hook-form';

import { authValidator } from '../../validators';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IAuthResponse, IRegistrationForm } from '../../interfaces';
import { registrationThunk, switchToLoginPrompt } from '../../store';
import close_button from '../../images/close_button.png';
import css from './RegistrationPrompt.module.css';

const RegistrationPrompt = () => {
  const { isRegistrationPromptOnScreen } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IRegistrationForm>({
    resolver: joiResolver(authValidator.registration)
  });

  const switchToLog = () => {
    dispatch(switchToLoginPrompt());
    reset();
  };

  const onSubmit: SubmitHandler<IRegistrationForm> = async (data) => {
    const { firstName, lastName, email, password, repeatedPassword } = data;

    if (password !== repeatedPassword) {
      throw new Error('Passwords is not equal');
    }

    const response = await dispatch(registrationThunk({ firstName, lastName, email, password }));

    const { user } = response.payload as IAuthResponse;
    if (user) {
      window.location.reload();
    }
    reset();
  };

  const isErrors = !!Object.keys(errors).length;

  return (
    <div
      className={
        isRegistrationPromptOnScreen
          ? isErrors
            ? `${css.content_wrap_opened} ${css.cover_wrap}`
            : css.content_wrap_opened
          : css.content_wrap_closed
      }>
      <div className={css.close_button_wrap}>
        <img src={close_button} alt="close_button" onClick={switchToLog} />
      </div>
      <h1 className={css.header}>Реєстрація</h1>
      <form className={css.form_style} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder={'Ваше імя'} {...register('firstName')} />
        {errors.firstName && <div className={css.error_msg}>{errors.firstName.message}</div>}
        <input type="text" placeholder={'Ваша фамілія'} {...register('lastName')} />
        {errors.lastName && <div className={css.error_msg}>{errors.lastName.message}</div>}
        <input type="text" placeholder={'Ваш емейл'} {...register('email')} />
        {errors.email && <div className={css.error_msg}>{errors.email.message}</div>}
        <input type="password" placeholder={'Пароль'} {...register('password')} />
        {errors.password && <div className={css.error_msg}>{errors.password.message}</div>}
        <input type="password" placeholder={'Повторіть пароль'} {...register('repeatedPassword')} />
        {errors.repeatedPassword && (
          <div className={css.error_msg}>{errors.repeatedPassword.message}</div>
        )}
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
