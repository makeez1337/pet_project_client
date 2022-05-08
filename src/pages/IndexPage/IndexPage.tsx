import React, { FC, useEffect } from 'react';

import Header from '../../components/Header/Header';
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu';
import DiscountProducts from '../../components/DiscountProducts/DiscountProducts';
import Auth from '../../components/Auth/Auth';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { checkAuthThunk } from '../../store/slices/authSlice';

const IndexPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuthThunk());
    }
  }, []);

  return (
    <div>
      <Header />
      <ServiceMenu />
      <DiscountProducts />
      <Auth />
    </div>
  );
};

export default IndexPage;
