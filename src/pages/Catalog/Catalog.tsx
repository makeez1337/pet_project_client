import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import FilterMenu from '../../components/FilterMenu/FilterMenu';

import css from './Catalog.module.css';
import Phones from '../../components/Phones/Phones';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { checkAuthThunk } from '../../store/slices/authSlice';

const Catalog = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthThunk());
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
