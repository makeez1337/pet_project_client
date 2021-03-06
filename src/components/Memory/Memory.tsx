import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { IMemory } from '../../interfaces';
import css from './Memory.module.css';

const Memory: FC<IMemory> = ({ id, memory }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const gte = searchParams.get('gte') || '';
  const lte = searchParams.get('lte') || '';
  const brandId = searchParams.get('brandId') || '';
  const ramId = searchParams.get('ramId') || '';
  const page = searchParams.get('page') || '1';
  let memoryQuery = searchParams.get('memoryId') || '';

  const setParamsObj = { gte, lte, brandId, ramId, page };

  const isActive = searchParams.get('memoryId')?.split(',').includes(id.toString()) as boolean;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && searchParams.get('memoryId')) {
      memoryQuery += `,${id.toString()}`;
      setSearchParams({ memoryId: memoryQuery, ...setParamsObj });
      return;
    }

    if (e.target.checked) {
      setSearchParams({ memoryId: String(id), ...setParamsObj });
      return;
    }

    if (!e.target.checked && searchParams.get('memoryId')) {
      memoryQuery = memoryQuery
        .split(',')
        .filter((val) => val !== id.toString())
        .join(',');
      setSearchParams({ memoryId: memoryQuery, ...setParamsObj });
      return;
    }

    if (!e.target.checked && !searchParams.get('memoryId')) {
      searchParams.delete('memoryId');
    }
  };

  return (
    <div className={css.text_wrap}>
      <input type="checkbox" defaultChecked={isActive} onChange={onChange} />
      <span className={css.memory}>{memory} Gb</span>
    </div>
  );
};

export default Memory;
