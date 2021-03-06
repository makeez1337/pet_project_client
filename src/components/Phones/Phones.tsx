import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { phoneService } from '../../services';
import { IPhone } from '../../interfaces';
import Pagination from '../Pagination/Pagination';
import Phone from '../Phone/Phone';
import css from './Phones.module.css';

const Phones: FC = () => {
  const [phones, setPhones] = useState<IPhone[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [perPage, setPerPage] = useState<number | null>(null);

  const [isDeleted, setIsDeleted] = useState<boolean | null>(null);

  const { search } = useLocation();

  useEffect(() => {
    setIsLoading(true);
    phoneService.getByQuery(search || '').then((res) => {
      setTotalPages(res.data.totalPages);
      setPerPage(res.data.perPage);
      setPhones(res.data.rows);
      setIsLoading(false);
    });
  }, [search, isDeleted]);

  return (
    <div className={css.content_wrap}>
      {isLoading ? (
        <div className={css.loading_wrap}>
          <h1 className={css.loading}>LOADING...</h1>
        </div>
      ) : null}
      {phones?.map((phone) => (
        <Phone key={phone.id} {...phone} setIsDeleted={setIsDeleted} />
      ))}
      <Pagination totalPages={totalPages} perPage={perPage} />
    </div>
  );
};

export default Phones;
