import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import './index.css';
import IndexPage from './pages/IndexPage/IndexPage';

const App: FC = () => {
  return (
    <Routes>
      <Route index element={<IndexPage/>}/>
    </Routes>
  );
};

export default App;
