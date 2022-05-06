import React from 'react';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import FilterMenu from '../../components/FilterMenu/FilterMenu';

const Catalog = () => {
  return (
    <div>
      <Header />
      <Auth />
      <FilterMenu />
    </div>
  );
};

export default Catalog;
