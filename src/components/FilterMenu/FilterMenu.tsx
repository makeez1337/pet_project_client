import React, { FC } from 'react';

import css from './FilterMenu.module.css';
import Brands from '../Brands/Brands';
import MemoryMap from "../MemoryMap/MemoryMap";

const FilterMenu: FC = () => {

  return (
    <div className={css.container}>
      <h1 className={css.header_style}>Смартфони</h1>
      <Brands />
      <MemoryMap/>

    </div>
  );
};

export default FilterMenu;
