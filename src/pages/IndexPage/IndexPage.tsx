import React, { FC } from 'react';

import Header from '../../components/Header/Header';
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu';
import DiscountProducts from '../../components/DiscountProducts/DiscountProducts';
import Auth from '../../components/Auth/Auth';

const IndexPage: FC = () => {
  return (
    <div>
      <Header />
      <ServiceMenu />
      <DiscountProducts />
      <Auth/>
    </div>
  );
};

export default IndexPage;
