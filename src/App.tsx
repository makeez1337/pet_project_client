import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import IndexPage from './pages/IndexPage/IndexPage';
import Catalog from './pages/Catalog/Catalog';
import Admin from './pages/Admin/Admin';
import Basket from './pages/Basket/Basket';
import Phone from './pages/Phone/Phone';
import './index.css';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />

      <Route path={'catalog'} element={<Catalog />} />
      <Route path={'catalog/:id'} element={<Phone />} />

      <Route path={'admin'} element={<Admin />} />

      <Route path={'basket'} element={<Basket />} />
    </Routes>
  );
};

export default App;
