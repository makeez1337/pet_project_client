import React, { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { phoneService } from '../../services';
import css from './Pagination.module.css';

interface PaginationProps {
  totalPages: null | number;
  perPage: number | null;
}

const Pagination: FC<PaginationProps> = ({ totalPages, perPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [minPrice, setMinPrice] = useState<null | number>(null);
  const [maxPrice, setMaxPrice] = useState<null | number>(null);

  useEffect(() => {
    phoneService.minAndMax().then((res) => {
      setMinPrice(res.data[0].minPrice);
      setMaxPrice(res.data[0].maxPrice);
    });
  }, []);

  const gte = searchParams.get('gte') || String(minPrice);
  const lte = searchParams.get('lte') || String(maxPrice);
  const memoryId = searchParams.get('memoryId') || '';
  const ramId = searchParams.get('ramId') || '';
  const brandId = searchParams.get('brandId') || '';
  const page = searchParams.get('page') || 1;

  const setParamsObj = { gte, lte, memoryId, ramId, brandId };

  const isPageFirst = Number(page) === 1;
  const isPageLast = Number(page) >= Number(totalPages);

  const moveToPreviousPage = () => {
    const prevPage = Number(page) - 1;
    setSearchParams({ page: String(prevPage), ...setParamsObj });
  };

  const moveToNextPage = () => {
    const nextPage = Number(page) + 1;
    setSearchParams({ page: String(nextPage), ...setParamsObj });
  };

  useEffect(() => {
    if (totalPages && perPage === 0) {
      setSearchParams({ page: '1', ...setParamsObj });
    }
  }, [totalPages, perPage]);

  return (
    <div className={css.content_wrap}>
      <button
        onClick={moveToPreviousPage}
        disabled={isPageFirst || !totalPages}
        className={css.btn_style}>
        ПОПЕРЕДНЯ СТОРІНКА
      </button>
      <button onClick={moveToNextPage} disabled={isPageLast} className={css.btn_style}>
        НАСТУПНА СТОРІНКА
      </button>
    </div>
  );
};

export default Pagination;
