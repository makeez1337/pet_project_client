import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios, { AxiosResponse } from 'axios';

import { phoneService } from '../../services';
import { IPhone, IPhoneFormData } from '../../interfaces';
import { generateFormDataForCreate } from '../../utils/generateFormData';
import css from './AdminPanel.module.css';

const AdminPanel: FC = () => {
  const { handleSubmit, register } = useForm<IPhoneFormData>();
  const [phone, setPhone] = useState<null | IPhone>(null);
  const [err, setErr] = useState<null | { message: string }>(null);

  const onSubmit: SubmitHandler<IPhoneFormData> = (data) => {
    const formData = generateFormDataForCreate(data);

    phoneService
      .create(formData)
      .then((res) => {
        setPhone(res.data);
        setErr(null);
      })
      .catch((e) => {
        if (axios.isAxiosError(e)) {
          const {
            data: { message }
          } = e.response as AxiosResponse;
          setErr({ message });
          setPhone(null);
        } else {
          setErr(e.message);
        }
      });
  };

  return (
    <div className={css.content_wrap}>
      <h1>Створити телефон</h1>
      <form encType={'multipart/form-data'} className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={'Назва телефону'} type="text" {...register('name')} />
        <input placeholder={'Опис телефону'} type="text" {...register('description')} />
        <div className={css.selects_wrap}>
          <select {...register('memoryId')}>
            <option value="2">16 Gb</option>
            <option value="3">32 Gb</option>
            <option value="4">64 Gb</option>
            <option value="5">128 Gb</option>
            <option value="6">256 Gb</option>
          </select>
          <select {...register('ramId')}>
            <option value="1">1 Gb</option>
            <option value="2">2 Gb</option>
            <option value="3">3 Gb</option>
            <option value="4">4 Gb</option>
            <option value="5">6 Gb</option>
            <option value="6">8 Gb</option>
            <option value="7">12 Gb</option>
          </select>
          <select {...register('brandId')}>
            <option value="1">Samsung</option>
            <option value="2">Xiaomi</option>
            <option value="3">Nokia</option>
          </select>
        </div>

        <input type="text" placeholder={'Процессор'} {...register('processor')} />
        <input type="number" placeholder={'Камера'} {...register('camera')} />
        <input type="number" placeholder={'Ціна'} {...register('price')} />
        <input type="file" {...register('img')} />
        <button className={css.btn_style}>Створити</button>
      </form>
      {phone && <div>Телефон успішно створений</div>}
      {err && <div>{err.message}</div>}
    </div>
  );
};

export default AdminPanel;
