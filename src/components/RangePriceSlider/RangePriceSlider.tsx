import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useSearchParams } from 'react-router-dom';

import css from './Content.module.css';
import './RangePriceSlider.css';

export default function RangePriceSlider() {
  const [searchParams, setSearchParams] = useSearchParams();
  const min = searchParams.get('gte') || 0;
  const max = searchParams.get('lte') || 45999;

  const [value, setValue] = React.useState<number[]>([Number(min), Number(max)]);

  const brandId = searchParams.get('brandId') || '';
  const memoryId = searchParams.get('memoryId') || '';
  const ramId = searchParams.get('ramId') || '';
  const page = searchParams.get('page') || '1';

  const searchParamsObj = { brandId, memoryId, ramId, page };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    const gte = value[0];
    const lte = value[1];
    setSearchParams({ gte: gte.toString(), lte: lte.toString(), ...searchParamsObj });
  };

  return (
    <div className={css.content_wrap}>
      <hr />
      <div className={css.filter_describe}>Ціна:</div>
      <Box sx={{ width: 300 }}>
        <Slider max={45999} value={value} onChange={handleChange} valueLabelDisplay="auto" />
      </Box>
    </div>
  );
}
