import React, { FC } from 'react';

import { IMemory } from '../../interfaces/PhoneFieldsInterface';
import css from './Memory.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addMemory } from '../../store/slices/filterSlice';

const Memory: FC<IMemory> = ({ id, memory }) => {
  const dispatch = useAppDispatch();
  const { activeMemory } = useAppSelector((state) => state.filterReducer);

  const addMemoryFilter = () => {
    dispatch(addMemory(id));
  };

  const isActive = activeMemory.includes(id);

  return (
    <div className={css.text_wrap}>
      <span className={isActive ? css.active : css.memory} onClick={addMemoryFilter}>
        {memory} Gb
      </span>
    </div>
  );
};

export default Memory;
