import React, { useEffect, useState } from 'react';

import { brandService } from '../../services/brandService';
import { IBrand } from '../../interfaces/PhoneFieldsInterface';
import Brand from '../Brand/Brand';

import css from './Brands.module.css';

const Brands = () => {
  const [brands, setBrands] = useState<IBrand[] | null>(null);

  useEffect(() => {
    brandService.getAll().then((res) => setBrands(res.data));
  }, []);

  return (
    <div className={css.brands_wrap}>
      <hr />
      <div className={css.filter_describe}>Модель:</div>
      {brands?.map((brand) => (
        <Brand key={brand.id} {...brand} />
      ))}
    </div>
  );
};

export default Brands;
