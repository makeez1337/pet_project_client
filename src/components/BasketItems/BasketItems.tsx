import React, { FC, useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks';
import { constants } from '../../constants';
import { basketDeviceService } from '../../services';
import { IBasketDevicesCountResponse } from '../../interfaces';
import BasketItem from '../BasketItem/BasketItem';
import css from './BasketItems.module.css';

const BasketItems: FC = () => {
  const { user, authStatus } = useAppSelector((state) => state.authReducer);
  const [basketItems, setBasketItems] = useState<IBasketDevicesCountResponse[] | []>([]);

  const [allAmount, setAllAmount] = useState<number | null>(null);

  const [isDeleted, setIsDeleted] = useState<null | boolean>(null);

  useEffect(() => {
    if (authStatus === 'fulfilled') {
      basketDeviceService.getDevicesByUserId(user?.id as number).then((res) => {
        setBasketItems(res.data);

        const allAmount = res.data.reduce((previousValue, currentValue) => {
          return previousValue + (currentValue.totalPrice * Number(currentValue.count));
        }, 0);
        setAllAmount(allAmount);
      });
    }
  }, [authStatus, isDeleted]);

  console.log(!!allAmount);

  return (
    <div className={css.header_wrap}>
      <div>
        <h1 className={css.header}>КОРЗИНА:</h1>
      </div>
      <div className={css.basket_item_wrap}>
        {!basketItems.length && <div>Корзина пуста</div>}
        {basketItems &&
          basketItems.map((value) => (
            <BasketItem key={value.phone.id} {...value} setIsDeleted={setIsDeleted} />
          ))}
        {!!allAmount && (
          <div>
            Загальна вартість:
            <span className={css.clr_red}>
               {allAmount.toString().replace(constants.numberWithCommas, ',')}
            </span>{' '}
            грн
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketItems;
