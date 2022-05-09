import React, { FC } from 'react';

import { IMemory } from '../../interfaces/PhoneFieldsInterface';
import css from './Memory.module.css';
import { useSearchParams } from 'react-router-dom';

const Memory: FC<IMemory> = ({ id, memory }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const brandId = searchParams.get('brandId') || '';
  const ramId = searchParams.get('ramId') || '';
  let memoryQuery = searchParams.get('memoryId') || '';

  const isActive = searchParams.get('memoryId')?.split(',').includes(id.toString()) as boolean;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && searchParams.get('memoryId')) {
      memoryQuery += `,${id.toString()}`;
      setSearchParams({ memoryId: memoryQuery, brandId, ramId });
      return;
    }

    if (e.target.checked) {
      setSearchParams({ memoryId: String(id), brandId, ramId });
      return;
    }

    if (!e.target.checked && searchParams.get('memoryId')) {
      memoryQuery = memoryQuery
        .split(',')
        .filter((val) => val !== id.toString())
        .join(',');
      setSearchParams({ memoryId: memoryQuery, brandId, ramId });
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
