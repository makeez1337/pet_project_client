import React, { useEffect } from 'react';

import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import FilterMenu from '../../components/FilterMenu/FilterMenu';
import Phones from '../../components/Phones/Phones';
import { useAppDispatch } from '../../hooks';
import { checkAuthThunk } from '../../store';
import css from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuthThunk());
    }
  });

  return (
    <div>
      <Header />
      <Auth />
      <div className={css.menu_wrap}>
        <FilterMenu />
        <Phones />
      </div>
    </div>
  );
};

export default Catalog;
