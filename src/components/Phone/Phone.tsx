import React, { FC } from 'react';

import { constants } from '../../constants';
import { IPhone } from '../../interfaces';
import css from './Phone.module.css';

const Phone: FC<IPhone> = (props) => {
  const { name, img, price } = props;

  const splitedImg = img.split('/')[3];
  const phoneImg = `${constants.baseImgUrl}${splitedImg}`;

  return (
    <div className={css.content_wrap}>
      <div>
        <img className={css.phoneImg} src={phoneImg} alt="phone" />
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>Ціна: {price}</span>
      </div>
      <button className={css.btn_style}>
        Замовити
      </button>
    </div>
  );
};

export default Phone;
