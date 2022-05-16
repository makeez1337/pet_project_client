import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IBrand } from '../../interfaces';
import css from './Brand.module.css';

const Brand: FC<IBrand> = ({ id, name }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const gte = searchParams.get('gte') || '';
  const lte = searchParams.get('lte') || '';
  const memoryId = searchParams.get('memoryId') || '';
  const ramId = searchParams.get('ramId') || '';
  const page = searchParams.get('page') || '1';
  let brandQuery = searchParams.get('brandId') || '';

  const setParamsObj = { gte, lte, memoryId, ramId, page };

  const isActive = searchParams.get('brandId')?.split(',').includes(id.toString()) as boolean;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && searchParams.get('brandId')) {
      brandQuery += `,${id.toString()}`;
      setSearchParams({ brandId: brandQuery, ...setParamsObj });
      return;
    }

    if (e.target.checked) {
      setSearchParams({ brandId: String(id), ...setParamsObj });
      return;
    }

    if (!e.target.checked && searchParams.get('brandId')) {
      brandQuery = brandQuery
        .split(',')
        .filter((val) => val !== id.toString())
        .join(',');
      setSearchParams({ brandId: brandQuery, ...setParamsObj });
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
