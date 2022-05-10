import React, { FC, useEffect, useState } from 'react';

import { IMemory } from '../../interfaces';
import Memory from '../Memory/Memory';
import { memoryService } from '../../services';
import css from './MemoryMap.module.css';

const MemoryMap: FC = () => {
  const [memory, setMemory] = useState<IMemory[] | null>(null);

  useEffect(() => {
    memoryService.getAll().then((res) => setMemory(res.data));
  }, []);

  return (
    <div className={css.memory_wrap}>
      <hr />
      <div className={css.filter_describe}>Вбудована пам'ять:</div>
      {memory?.map((memory) => (
        <Memory key={memory.id} {...memory} />
      ))}
    </div>
  );
};

export default MemoryMap;
