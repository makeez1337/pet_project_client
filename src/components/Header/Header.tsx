import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { logOutThunk, openLoginPrompt } from '../../store';
import login_logo from '../../images/login_logo.png';
import shop_bucket from '../../images/shop_bucket.png';
import css from './Header.module.css';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { user, isCheckAuthLoading } = useAppSelector((state) => state.authReducer);

  const openLogin = () => {
    dispatch(openLoginPrompt(true));
  };

  const logOut = () => {
    dispatch(logOutThunk());
  };

  const { search } = useLocation();

  const onClick = () => {
    if (user?.role !== 'admin') {
      window.alert('You dont have access');
    }
  };

  return (
    <div className={css.header_wrap}>
      <div className={css.left_side}>
        <Link to={'/'}>
          <h2>Головна</h2>
        </Link>
        <Link to={search ? `/catalog${search}` : '/catalog'}>
          <h2>Каталог</h2>
        </Link>
        <h2>Про нас</h2>
      </div>
      {user && <div className={css.user_email}>{user.email}</div>}
      <div className={css.right_side}>
        <h2>Контакти</h2>
        <div>
          {user?.role === 'admin' ? (
            <Link to={'/admin'}>
              <button className={css.admin_button}>
                ADMIN PANEL
              </button>
            </Link>
          ) : (
            <Link to={''}>
              <button onClick={onClick} className={css.admin_button}>
                ADMIN PANEL
              </button>
            </Link>
          )}
        </div>
        <div className={css.login_logo}>
          <img src={login_logo} alt="login_logo" />
          {isCheckAuthLoading ? (
            <div className={css.login}>Загрузка...</div>
          ) : user ? (
            <div>
              <div className={css.login} onClick={logOut}>
                Вийти
              </div>
            </div>
          ) : (
            <div className={css.login} onClick={openLogin}>
              Увійти
            </div>
          )}
        </div>
        <div className={css.shop_bucket_image}>
          <img src={shop_bucket} alt="shop_bucket" />
          <div className={css.shop_bucket}>Корзина</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
