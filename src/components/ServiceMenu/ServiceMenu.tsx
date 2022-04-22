import React from 'react';

import css from './ServiceMenu.module.css';

const ServiceMenu = () => {
  return (
    <div className={css.menu_wrap}>
      <div className={css.left_service}>
        <p className={css.service_describe}>
          <span className={css.text_wrap}>Детальніше</span>
        </p>
      </div>
      <div className={css.middle_service}>
        <p className={css.service_describe}>
          <span className={css.text_wrap}>Детальніше</span>
        </p>
      </div>
      <div className={css.right_service}>
        <p className={css.service_describe}>
          <span className={css.text_wrap}>Детальніше</span>
        </p>
      </div>
    </div>
  );
};

export default ServiceMenu;
