import React, { FC } from 'react';

import { constants } from '../../constants/constants';
import { IPhone } from '../../interfaces/PhoneFieldsInterface';
import css from './Phone.module.css';

const Phone: FC<IPhone> = (props) => {
  const { name, brandId, description, camera, img, memoryId, price, ramId } = props;

  const splitedImg = img.split('/')[3];
  const phoneImg = `${constants.baseImgUrl}${splitedImg}`;

  return (
    <div className={css.content_wrap}>
      <div>
        <img className={css.phoneImg} src={phoneImg} alt="phone image" />
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>Ціна: {price}</span>
      </div>
    </div>
  );
};

export default Phone;
