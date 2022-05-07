import React, { FC } from 'react';

import { IRam } from '../../interfaces/PhoneFieldsInterface';
import css from './Ram.module.css';

const Ram: FC<IRam> = ({ ram }) => {
  return <div className={css.ram}>{ram} Gb</div>;
};

export default Ram;
