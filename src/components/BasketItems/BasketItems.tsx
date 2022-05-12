import React, { FC, useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks';
import { basketDeviceService } from '../../services/basketDeviceService';
import { IBasketDevicesCountResponse } from '../../interfaces';
import BasketItem from '../BasketItem/BasketItem';
import css from './BasketItems.module.css';

const BasketItems: FC = () => {
  const { user, authStatus } = useAppSelector((state) => state.authReducer);
  const [basketItems, setBasketItems] = useState<IBasketDevicesCountResponse[] | []>([]);

  useEffect(() => {
    if (authStatus === 'fulfilled') {
      basketDeviceService
        .getDevicesByUserId(user?.id as number)
        .then((res) => setBasketItems(res.data));
    }
  }, [authStatus]);

  return (
    <div className={css.header_wrap}>
      <div>
        <h1 className={css.header}>КОРЗИНА:</h1>
      </div>
      <div className={css.basket_item_wrap}>
        {basketItems && basketItems.map((value) => <BasketItem key={value.phone.id} {...value} />)}
      </div>
    </div>
  );
};

export default BasketItems;
