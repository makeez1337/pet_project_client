import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';

import css from './Content.module.css';
import './RangePriceSlider.css';

export default function RangePriceSlider() {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = searchParams.get('gte') || 0;
  const max = searchParams.get('lte') || 45999;

  const [value, setValue] = useState<number[]>([Number(min), Number(max)]);

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
          max={45999}
          value={value}
          onChangeCommitted={handleChangeCommitted}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
}
