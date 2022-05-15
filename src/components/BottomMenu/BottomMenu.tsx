import { FC } from 'react';
import { Link } from 'react-router-dom';

import phoneImg from '../../images/phone_for_menu.png';
import css from './BottomMenu.module.css';

const BottomMenu: FC = () => {
  return (
    <div className={css.content_wrap}>
      <div className={css.box}>
        <div className={css.text_wrap}>
          <span className={css.text_up}>Смартфони</span>
          <span className={css.text_down}>
            <Link to={'catalog'}>Переглянути всі {'>'} </Link>
          </span>
        </div>
        <div>
          <img className={css.phoneImg} src={phoneImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BottomMenu;
