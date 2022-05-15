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
          return previousValue + currentValue.totalPrice;
        }, 0);
        setAllAmount(allAmount);
      });
    }
  }, [authStatus, isDeleted]);

  const submitPurchase = async () => {
    setIsDeleted(false);
    try {
      await basketDeviceService.confirmPurchase(user?.email as string, user?.id as number);
      await basketDeviceService.deleteAllByBasketId(user?.id as number);
      setIsDeleted(true);
      window.alert('Замовлення прийняте, вам прийшов лист на почту!')
    } catch (e) {
      setIsDeleted(false);
      throw e;
    }
  };

  return (
    <div className={css.header_wrap}>
      <div>
        <h1 className={css.header}>КОРЗИНА:</h1>
      </div>
      <div className={css.basket_item_wrap}>
        {!basketItems.length && <div>Корзина пуста</div>}
        {basketItems &&
          basketItems.map((value) => (
            <BasketItem key={value?.id} {...value} setIsDeleted={setIsDeleted} />
          ))}
        {!!allAmount && (
          <div>
            Загальна вартість:
            <span className={css.clr_red}>
              {allAmount.toString().replace(constants.numberWithCommas, ',')}
            </span>{' '}
            грн
            <div>
              <button onClick={submitPurchase} className={css.btn}>
                Підтвердити замовлення
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketItems;
