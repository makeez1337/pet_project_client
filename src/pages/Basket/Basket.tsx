import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Auth from '../../components/Auth/Auth';
import Header from '../../components/Header/Header';
import BasketItems from '../../components/BasketItems/BasketItems';
import { checkAuthThunk } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';

const Basket: FC = () => {
  const dispatch = useAppDispatch();
  const { user, authStatus } = useAppSelector((state) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, []);

  useEffect(() => {
    if (!user && (authStatus === 'fulfilled' || authStatus === 'rejected')) {
      navigate('../');
    }
  }, [user, authStatus]);

  return (
    <div>
      <Header />
      <Auth />
      <BasketItems />
    </div>
  );
};

export default Basket;
