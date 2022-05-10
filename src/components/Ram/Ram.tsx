import React, { FC } from 'react';

import { IRam } from '../../interfaces/PhoneFieldsInterface';
import css from './Ram.module.css';
import { useSearchParams } from 'react-router-dom';

const Ram: FC<IRam> = ({ id, ram }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const gte = searchParams.get('gte') || '0';
  const lte = searchParams.get('lte') || '45999';
  const brandId = searchParams.get('brandId') || '';
  const memoryId = searchParams.get('memoryId') || '';
  let ramQuery = searchParams.get('ramId') || '';

  const isActive = searchParams.get('ramId')?.split(',').includes(id.toString()) as boolean;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && searchParams.get('ramId')) {
      ramQuery += `,${id.toString()}`;
      setSearchParams({ ramId: ramQuery, memoryId, brandId, gte, lte });
      return;
    }

    if (e.target.checked) {
      setSearchParams({ ramId: String(id), memoryId, brandId, gte, lte });
      return;
    }

    if (!e.target.checked && searchParams.get('ramId')) {
      ramQuery = ramQuery
        .split(',')
        .filter((val) => val !== id.toString())
        .join(',');
      setSearchParams({ ramId: ramQuery, memoryId, brandId, gte, lte });
      return;
    }

    if (!e.target.checked && !searchParams.get('ramId')) {
      searchParams.delete('ramId');
    }
  };

  return (
    <div className={css.text_wrap}>
      <input type="checkbox" defaultChecked={isActive} onChange={onChange} />
      <span className={css.ram}>{ram} Gb</span>
    </div>
  );
};

export default Ram;
