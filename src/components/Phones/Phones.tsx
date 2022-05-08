import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { phoneService } from '../../services/phoneService';
import { IPhone } from '../../interfaces/PhoneFieldsInterface';
import Phone from '../Phone/Phone';
import css from './Phones.module.css';

const Phones: FC = () => {
  const location = useLocation();
  const { search } = location;

  const [phones, setPhones] = useState<IPhone[] | null>(null);

  useEffect(() => {
    phoneService.getByPage(search).then((res) => setPhones(res.data.rows));
  }, [search]);

  return (
    <div className={css.content_wrap}>
      {phones?.map((phone) => (
        <Phone key={phone.id} {...phone}/>
      ))}
    </div>
  );
};

export default Phones;
