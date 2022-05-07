import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import css from './Content.module.css';
import './RangeSlider.css';

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 15000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={css.content_wrap}>
      <hr />
      <div className={css.filter_describe}>Ціна:</div>
      <Box sx={{ width: 300 }}>
        <Slider
          max={15000}
          getAriaLabel={() => 'Temperature range'}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
}
