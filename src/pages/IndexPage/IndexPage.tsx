import React, { FC, useEffect } from 'react';

import Header from '../../components/Header/Header';
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu';
import Auth from '../../components/Auth/Auth';
import { useAppDispatch } from '../../hooks';
import { checkAuthThunk } from '../../store';
import BottomMenu from '../../components/BottomMenu/BottomMenu';

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
      <BottomMenu />
      <Auth />
    </div>
  );
};

export default IndexPage;
