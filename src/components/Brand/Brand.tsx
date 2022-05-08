import React, { FC } from 'react';

import { IBrand } from '../../interfaces/PhoneFieldsInterface';
import css from './Brand.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addBrand } from '../../store/slices/filterSlice';

const Brand: FC<IBrand> = ({ id, name }) => {
  const dispatch = useAppDispatch();
  const { activeBrand } = useAppSelector((state) => state.filterReducer);

  const addBrandFilter = () => {
    dispatch(addBrand(id));
  };

  const isActive = activeBrand.includes(id);

  return (
    <div className={css.text_wrap}>
      <span className={isActive ? css.active : css.brand} onClick={addBrandFilter}>
        {name}
      </span>
    </div>
  );
};

export default Brand;
