import React, { FC } from 'react';

import { IBrand } from '../../interfaces/PhoneFieldsInterface';
import css from './Brand.module.css';

const Brand: FC<IBrand> = ({ name }) => {
  return <div className={css.brand}>{name}</div>;
};

export default Brand;
