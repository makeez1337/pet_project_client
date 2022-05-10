import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IBrand } from '../../interfaces/PhoneFieldsInterface';
import css from './Brand.module.css';

const Brand: FC<IBrand> = ({ id, name }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const gte = searchParams.get('gte') || '0';
  const lte = searchParams.get('lte') || '45999';
  const memoryId = searchParams.get('memoryId') || '';
  const ramId = searchParams.get('ramId') || '';
  let brandQuery = searchParams.get('brandId') || '';

  const isActive = searchParams.get('brandId')?.split(',').includes(id.toString()) as boolean;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && searchParams.get('brandId')) {
      brandQuery += `,${id.toString()}`;
      setSearchParams({ brandId: brandQuery, memoryId, ramId, gte, lte });
      return;
    }

    if (e.target.checked) {
      setSearchParams({ brandId: String(id), memoryId, ramId, gte, lte });
      return;
    }

    if (!e.target.checked && searchParams.get('brandId')) {
      brandQuery = brandQuery
        .split(',')
        .filter((val) => val !== id.toString())
        .join(',');
      setSearchParams({ brandId: brandQuery, memoryId, ramId, gte, lte });
      return;
    }

    if (!e.target.checked && !searchParams.get('brandId')) {
      searchParams.delete('brandId');
    }
  };

  return (
    <div className={css.text_wrap}>
      <input type="checkbox" defaultChecked={isActive} onChange={onChange} />
      <span className={css.brand}>{name}</span>
    </div>
  );
};

export default Brand;
