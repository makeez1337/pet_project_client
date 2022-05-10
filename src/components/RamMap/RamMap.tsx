import React, { useEffect, useState } from 'react';

import Ram from '../Ram/Ram';
import { IRam } from '../../interfaces';
import { ramService } from '../../services';
import css from './RamMap.module.css';

const RamMap = () => {
  const [ram, setRam] = useState<IRam[] | null>(null);

  useEffect(() => {
    ramService.getAll().then((res) => setRam(res.data));
  }, []);

  return (
    <div className={css.ram_wrap}>
      <hr />
      <div className={css.filter_describe}>Оперативна пам'ять:</div>
      {ram?.map((ram) => (
        <Ram key={ram.id} {...ram} />
      ))}
    </div>
  );
};

export default RamMap;
