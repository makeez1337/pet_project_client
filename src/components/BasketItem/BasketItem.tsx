import React, { Dispatch, FC, SetStateAction } from 'react';

import minus_button from '../../images/minus_button.png';
import { constants } from '../../constants';
import { IBasketDevicesCountResponse } from '../../interfaces';
import { basketDeviceService } from '../../services';
import { useAppSelector } from '../../hooks';
import css from './BasketItem.module.css';

interface BasketItemProps extends IBasketDevicesCountResponse {
  setIsDeleted: Dispatch<SetStateAction<boolean | null>>;
}

const BasketItem: FC<BasketItemProps> = (props) => {
  const { user } = useAppSelector((state) => state.authReducer);

  const { count, totalPrice, setIsDeleted, id, 'phone.img': img, 'phone.name': name } = props;

  const splitedImg = img.split('/')[3];
  const phoneImg = `${constants.baseImgUrl}${splitedImg}`;

  const deleteItem = () => {
    setIsDeleted(false);
    basketDeviceService
      .deleteItemByParams(id, user?.id as number)
      .then((res) => {
        console.log(res.data);
        setIsDeleted(true);
      })
      .catch((e) => setIsDeleted(false));
  };

  return (
    <div className={css.content_wrap}>
      <div>{name}</div>
      <div>
        <img className={css.img} src={phoneImg} alt={name} />
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
      <div>
        <img onClick={deleteItem} className={css.minus_btn} src={minus_button} alt="" />
      </div>
    </div>
  );
};

export default BasketItem;
