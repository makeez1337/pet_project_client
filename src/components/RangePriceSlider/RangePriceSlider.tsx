import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';
import { SyntheticEvent, useEffect, useState } from 'react';

import { phoneService } from '../../services';
import './RangePriceSlider.css';
import css from './Content.module.css';

export default function RangePriceSlider() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [minPrice, setMinPrice] = useState<null | number>(null);
  const [maxPrice, setMaxPrice] = useState<null | number>(null);

  let min = Number(searchParams.get('gte')) || minPrice;
  let max = Number(searchParams.get('lte')) || maxPrice;

  const [value, setValue] = useState<number[]>([Number(min), Number(max)]);

  useEffect(() => {
    phoneService.minAndMax().then((res) => {
      setMinPrice(res.data[0].minPrice);
      setMaxPrice(res.data[0].maxPrice);
    });
  }, []);

  useEffect(() => {
    if (minPrice && maxPrice) {
      setValue([minPrice, maxPrice]);
    }
  }, [maxPrice, minPrice]);

  const brandId = searchParams.get('brandId') || '';
  const memoryId = searchParams.get('memoryId') || '';
  const ramId = searchParams.get('ramId') || '';
  const page = searchParams.get('page') || '1';

  const searchParamsObj = { brandId, memoryId, ramId, page };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleChangeCommitted = (event: SyntheticEvent | Event, newValue: number | number[]) => {
    const [gte, lte] = newValue as number[];
    setSearchParams({ gte: gte.toString(), lte: lte.toString(), ...searchParamsObj });
  };

  return (
    <div className={css.content_wrap}>
      <hr />
      <div className={css.filter_describe}>Ціна:</div>
      <Box sx={{ width: 300 }}>
        <Slider
          min={minPrice as number}
          max={maxPrice as number}
          value={value}
          onChangeCommitted={handleChangeCommitted}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
}
