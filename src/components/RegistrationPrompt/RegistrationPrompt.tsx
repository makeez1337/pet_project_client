import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { registrationThunk, switchToLoginPrompt } from '../../store/slices/authSlice';
import { IAuthResponse, IRegistrationForm } from '../../interfaces/authInterface';
import close_button from '../../images/close_button.png';
import css from './RegistrationPrompt.module.css';

const RegistrationPrompt = () => {
  const { isRegistrationPromptOnScreen } = useAppSelector((state) => state.authReducer);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset } = useForm<IRegistrationForm>();

  const switchToLog = () => {
    dispatch(switchToLoginPrompt());
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

  return (
    <div
      className={isRegistrationPromptOnScreen ? css.content_wrap_opened : css.content_wrap_closed}>
      <div className={css.close_button_wrap}>
        <img src={close_button} alt="close_button" onClick={switchToLog} />
      </div>
      <h1 className={css.header}>Реєстрація</h1>
      <form className={css.form_style} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder={'Ваше імя'} {...register('firstName')} />
        <input type="text" placeholder={'Ваша фамілія'} {...register('lastName')} />
        <input type="text" placeholder={'Ваш емейл'} {...register('email')} />
        <input type="password" placeholder={'Пароль'} {...register('password')} />
        <input type="password" placeholder={'Повторіть пароль'} {...register('repeatedPassword')} />
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
