import React, { FC, useEffect, useState } from 'react';

import css from './FilterMenu.module.css';
import { brandService } from '../../services/brandService';
import { IBrand } from '../../interfaces/brandInterface';
import Brand from '../Brand/Brand';

const FilterMenu: FC = () => {
  const [brands, setBrands] = useState<IBrand[] | null>(null);

  useEffect(() => {
    brandService.getAll().then((res) => setBrands(res.data));
  }, []);

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.header_style}>Смартфони</h1>
        <div className={css.brands_wrap}>
          <hr />
          <div className={css.filter_describe}>Модель:</div>
          {brands?.map((brand) => (
            <Brand key={brand.id} {...brand} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
