import React, { Dispatch, FC, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';

import { SubmitHandler, useForm } from 'react-hook-form';
import { IPhoneFormData } from '../../interfaces';
import { generateFormDataForUpdate } from '../../utils/generateFormData';
import { phoneService } from '../../services';
import css from './ModalUpdate.module.css';

interface ModalUpdateProps {
  setIsUpdated: Dispatch<SetStateAction<boolean>>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;

  isOpened: boolean;
}

const ModalUpdate: FC<ModalUpdateProps> = ({ setIsUpdated, setIsOpened, isOpened }) => {
  const { handleSubmit, register } = useForm<IPhoneFormData>();
  const { id } = useParams();

  const onSubmit: SubmitHandler<IPhoneFormData> = (data: Partial<IPhoneFormData>) => {
    setIsUpdated(false);
    const formData = generateFormDataForUpdate(data);

    phoneService
        .updateById(id as string, formData)
        .then((res) => setIsUpdated(true))
        .catch((e) => setIsUpdated(false));
  };

  return (
    <div>
      <div className={isOpened ? css.form_wrap_opened : css.form_wrap_closed}>
        <h5 onClick={() => setIsOpened(false)} className={css.close_btn}>
          Закрити
        </h5>
        <form
          encType={'multipart/form-data'}
          onSubmit={handleSubmit(onSubmit)}
          className={css.form}>
          <input type="text" placeholder={'Назва телефону'} {...register('name')} />
          <div className={css.select_wrap}>
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
          <input type="text" placeholder={'Опис'} {...register('description')} />
          <input type="file" {...register('img')} />
          <button className={css.btn}>Оновити</button>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
