import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { constants } from '../../constants';
import Header from '../../components/Header/Header';
import Auth from '../../components/Auth/Auth';
import { IPhoneJoin } from '../../interfaces';
import { basketDeviceService, phoneService } from '../../services';
import { checkAuthThunk } from '../../store';
import { useAppDispatch } from '../../hooks';
import css from './Phone.module.css';

const Phone = () => {
  const [phone, setPhone] = useState<null | IPhoneJoin>(null);
  const { id } = useParams();

  const splittedImg = phone?.img.split('/')[3];

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      dispatch(checkAuthThunk());
    }
  }, []);

  useEffect(() => {
    phoneService.getById(Number(id)).then((res) => setPhone(res.data));
  }, [id]);

  const addItem = async () => {
    const response = await basketDeviceService.createBasketDevice(Number(id)).catch((e) => {
      window.alert('Потрібно авторизуватись');
    });

    if (response?.data) {
      window.alert('Товар добавлений в корзину');
    }
  };

  return (
    <div>
      <Header />
      <Auth />
      <div className={css.content_wrap}>
        <div>
          <span className={css.name_style}>{phone?.name}</span>
        </div>
        <div className={css.description_menu}>
          <div className={css.left_menu}>
            <img
              className={css.img}
              src={`${constants.baseImgUrl}${splittedImg}`}
              alt={phone?.name}
            />
            <div className={css.price_wrap}>
              <span className={css.description_header}>Ціна: <span className={css.clr_red}>{phone?.price.toString().replace(constants.numberWithCommas, ',')}</span></span>
            </div>
            <div className={css.btn_wrap}>
              <button onClick={addItem} className={css.btn}>
                Додати в корзину
              </button>
            </div>
          </div>
          <div className={css.right_menu}>
            <div>
              <span className={css.description_header}>Характеристики:</span>
            </div>
            <div className={css.mt20}>
              <span className={css.description_text}>Модель: {phone?.brand.name}</span>
            </div>
            <div>
              <span className={css.description_text}>
                Вбудована пам'ять: {phone?.memory.memory} Gb
              </span>
            </div>
            <div>
              <span className={css.description_text}>Оперативна пам'ять: {phone?.ram.ram} Gb</span>
            </div>
            <div>
              <span className={css.description_text}>Камера: {phone?.camera} px</span>
            </div>
            <div>
              <span className={css.description_text}>Процессор: {phone?.processor}</span>
            </div>
            <div className={css.mt20}>
              <span className={css.description_header}>Опис:</span>
            </div>
            <div className={`${css.description_text} ${css.mt20}`}>
              <span className={css.description_text}>{phone?.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
