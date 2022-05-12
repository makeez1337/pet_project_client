import React, { FC } from 'react';
import { IBasketDevicesCountResponse } from '../../interfaces';

import css from './BasketItem.module.css';
import { constants } from '../../constants';

const BasketItem: FC<IBasketDevicesCountResponse> = ({ count, totalPrice, phone }) => {
  const { img } = phone;

  const splitedImg = img.split('/')[3];
  const phoneImg = `${constants.baseImgUrl}${splitedImg}`;

  return (
    <div className={css.content_wrap}>
      <div>{phone.name}</div>
      <div>
        <img className={css.img} src={phoneImg} alt={phone.name} />
      </div>
      <div>
        <span>
          Шт: <span style={{ color: 'red' }}>{count}</span>
        </span>
      </div>
      <div>
        <span>
          , Ціна:{' '}
          <span style={{ color: 'red' }}>
            {totalPrice.toString().replace(constants.numberWithCommas, ',')}
          </span>{' '}
          грн
        </span>
      </div>
    </div>
  );
};

export default BasketItem;
