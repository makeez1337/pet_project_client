import React, { FC } from 'react';

import Brands from '../Brands/Brands';
import MemoryMap from '../MemoryMap/MemoryMap';
import RamMap from '../RamMap/RamMap';
import css from './FilterMenu.module.css';
import RangeSlider from '../RangeSlider/RangeSlider';

const FilterMenu: FC = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header_style}>Смартфони</h1>
      <Brands />
      <MemoryMap />
      <RamMap />
      <RangeSlider />
    </div>
  );
};

export default FilterMenu;
