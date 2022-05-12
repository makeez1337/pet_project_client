import React, { FC } from 'react';

import { constants } from '../../constants';
import { IPhone } from '../../interfaces';
import css from './Phone.module.css';
import { basketDeviceService } from '../../services/basketDeviceService';

const Phone: FC<IPhone> = (props) => {
  const { name, img, price, id } = props;

  const splitedImg = img.split('/')[3];
  const phoneImg = `${constants.baseImgUrl}${splitedImg}`;

  const addItem = async () => {
    const response = await basketDeviceService.createBasketDevice(id);

    if (response.data) {
      window.alert('Товар добавлений в корзину')
    }
  };

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
      <button onClick={addItem} className={css.btn_style}>
        Добавити
      </button>
    </div>
  );
};

export default Phone;
