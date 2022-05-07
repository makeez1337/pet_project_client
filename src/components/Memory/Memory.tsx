import React, { FC } from 'react';

import { IMemory } from '../../interfaces/PhoneFieldsInterface';
import css from './Memory.module.css';

const Memory: FC<IMemory> = ({ memory }) => {
  return <div className={css.memory}>{memory}</div>;
};

export default Memory;
