import React, { FC } from 'react';

import { useAppDispatch } from '../../hooks/reduxHooks';
import { openLoginPrompt } from '../../store/slices/authSlice';
import login_logo from '../../images/login_logo.png';
import shop_bucket from '../../images/shop_bucket.png';
import css from './Header.module.css';

const Header: FC = () => {
  const dispatch = useAppDispatch();

  const openLogin = () => {
    dispatch(openLoginPrompt(true));
  };

  return (
    <div className={css.header_wrap}>
      <div className={css.left_side}>
        <h2>Каталог</h2>
        <h2>Блог</h2>
        <h2>Про нас</h2>
      </div>

      <div className={css.right_side}>
        <h2>Контакти</h2>
        <div className={css.login_logo}>
          <img src={login_logo} alt="login_logo" />
          <div className={css.login} onClick={openLogin}>
            Увійти
          </div>
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
