import React, {useEffect, useState} from 'react';

import css from './FilterMenu.module.css';
import {brandService} from "../../services/brandService";
import {IBrand} from "../../interfaces/brandInterface";

const FilterMenu = () => {

  const [posts, setPosts] = useState<IBrand | null>(null);

  useEffect( () => {
     brandService.getAll().then(res => setPosts(res.data));
  },[])

  return (
    <div className={css.container}>
      <div>
        <h1>Смартфони</h1>
      </div>
    </div>
  );
};

export default FilterMenu;
