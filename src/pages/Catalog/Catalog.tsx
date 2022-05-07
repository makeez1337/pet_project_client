import React from 'react';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import FilterMenu from '../../components/FilterMenu/FilterMenu';

import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div>
      <Header />
      <Auth />
      <div className={css.menu_wrap}>
        <FilterMenu />
      </div>
    </div>
  );
};

export default Catalog;
