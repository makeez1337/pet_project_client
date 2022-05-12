import React, { FC } from 'react';

import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import AdminPanel from '../../components/AdminPanel/AdminPanel';

const Admin: FC = () => {
  return (
    <div>
      <Header />
      <Auth />
      <AdminPanel />
    </div>
  );
};

export default Admin;
