import React, { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';

import { constants } from '../../constants';
import { IPhone } from '../../interfaces';
import { basketDeviceService, phoneService } from '../../services';
import { useAppSelector } from '../../hooks';
import delete_circle from '../../images/red-circle-delete.png';
import css from './Phone.module.css';

interface PhoneProps extends IPhone {
  setIsDeleted: Dispatch<SetStateAction<boolean | null>>;
}

const Phone: FC<PhoneProps> = (props) => {
  const { name, img, price, id, setIsDeleted } = props;
  const { user } = useAppSelector((prev) => prev.authReducer);

  const splitedImg = img.split('/')[3];
  const phoneImg = `${constants.baseImgUrl}${splitedImg}`;

  const addItem = async () => {
    const response = await basketDeviceService.createBasketDevice(id).catch((e) => {
      window.alert('Потрібно авторизуватись');
    });

    if (response?.data) {
      window.alert('Товар добавлений в корзину');
    }
  };

  const deletePhone = async () => {
    setIsDeleted(false);
    try {
      await phoneService.deleteById(id);
      setIsDeleted(true);
    } catch (e) {
      setIsDeleted(false);
    }
  };

  const navigate = useNavigate();

  const navigateToSinglePhone = () => {
    navigate(`${id}`);
  };

  return (
    <div className={css.content_wrap}>
      {user?.role === 'admin' && (
        <div>
          <img onClick={deletePhone} className={css.dlt_circle} src={delete_circle} alt="" />
        </div>
      )}
      <div>
        <img onClick={navigateToSinglePhone} className={css.phoneImg} src={phoneImg} alt="phone" />
      </div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>Ціна: {price.toString().replace(constants.numberWithCommas, ',')}</span>
      </div>
      <button onClick={addItem} className={css.btn_style}>
        Добавити
      </button>
    </div>
  );
};

export default Phone;
