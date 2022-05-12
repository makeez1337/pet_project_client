import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import IndexPage from './pages/IndexPage/IndexPage';
import Catalog from './pages/Catalog/Catalog';
import Admin from './pages/Admin/Admin';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />

      <Route path={'catalog'} element={<Catalog />} />

      <Route path={'admin'} element={<Admin />} />
    </Routes>
  );
};

export default App;
