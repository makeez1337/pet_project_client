import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AdminPanel from '../../components/AdminPanel/AdminPanel';
import Auth from '../../components/Auth/Auth';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthThunk } from '../../store';
import Header from '../../components/Header/Header';

const Admin: FC = () => {
  const dispatch = useAppDispatch();
  const { user, authStatus } = useAppSelector((state) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkAuthThunk());
  }, []);

  useEffect(() => {
    if ((user?.role !== 'admin' && authStatus === 'fulfilled') || authStatus === 'rejected') {
      navigate('../');
    }
  }, [authStatus, user?.role]);

  return (
    <div>
      <Header />
      <Auth />
      <AdminPanel />
    </div>
  );
};

export default Admin;
