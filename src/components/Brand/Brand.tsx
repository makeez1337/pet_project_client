import React, { FC } from 'react';

import { IBrand } from '../../interfaces/PhoneFieldsInterface';
import css from './Brand.module.css';

const Brand: FC<IBrand> = ({ name }) => {
  return <div className={css.text_wrap}><span className={css.brand}>{name}</span></div>;
};

export default Brand;
