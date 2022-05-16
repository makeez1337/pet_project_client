import React, { FC } from 'react';

import Brands from '../Brands/Brands';
import MemoryMap from '../MemoryMap/MemoryMap';
import RamMap from '../RamMap/RamMap';
import RangePriceSlider from '../RangePriceSlider/RangePriceSlider';
import css from './FilterMenu.module.css';

const FilterMenu: FC = () => {
  return (
    <div className={css.container}>
      <h1 className={css.header_style}>Смартфони</h1>
      <Brands />
      <MemoryMap />
      <RamMap />
      <RangePriceSlider />
    </div>
  );
};

export default FilterMenu;
