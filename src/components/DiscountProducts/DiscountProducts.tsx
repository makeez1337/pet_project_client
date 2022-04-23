import React, { FC } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import css from './DiscountProducts.module.css';

const DiscountProducts: FC = () => {
  return (
    <div>
      <div className={css.header}>
        <h1>Акційні пропозиції</h1>
      </div>
      <div className={css.slider_wrap}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className={css.mySwiper}>
          <SwiperSlide style={{ backgroundColor: 'black' }}>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide style={{ backgroundColor: 'orange' }}>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide style={{ backgroundColor: 'cornflowerblue' }}>Slide 5</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DiscountProducts;
