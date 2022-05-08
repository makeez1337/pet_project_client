import React, { FC } from 'react';

import { IRam } from '../../interfaces/PhoneFieldsInterface';
import css from './Ram.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addRam } from '../../store/slices/filterSlice';

const Ram: FC<IRam> = ({ id, ram }) => {
  const dispatch = useAppDispatch();
  const { activeRam } = useAppSelector((state) => state.filterReducer);

  const addRamFilter = () => {
    dispatch(addRam(id));
  };

  const isActive = activeRam.includes(id);

  return (
    <div className={css.text_wrap}>
      <span className={isActive ? css.active : css.ram} onClick={addRamFilter}>
        {ram} Gb
      </span>
    </div>
  );
};

export default Ram;
