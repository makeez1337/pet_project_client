import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { phoneService } from '../../services/phoneService';
import { IPhone } from '../../interfaces/PhoneFieldsInterface';
import Phone from '../Phone/Phone';
import css from './Phones.module.css';
import Pagination from '../Pagination/Pagination';

const Phones: FC = () => {
  const [phones, setPhones] = useState<IPhone[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [perPage, setPerPage] = useState<number | null>(null);

  const { search } = useLocation();

  useEffect(() => {
    setIsLoading(true);
    phoneService.getByQuery(search || '').then((res) => {
      setCurrentPage(res.data.page);
      setTotalPages(res.data.totalPages);
      setPerPage(res.data.perPage);
      setPhones(res.data.rows);
      setIsLoading(false);
    });
  }, [search]);


  return (
    <div className={css.content_wrap}>
      {isLoading ? (
        <div className={css.loading_wrap}>
          <h1 className={css.loading}>LOADING...</h1>
        </div>
      ) : null}
      {phones?.map((phone) => (
        <Phone key={phone.id} {...phone} />
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} perPage={perPage} />
    </div>
  );
};

export default Phones;
