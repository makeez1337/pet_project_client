import React, { FC } from 'react';

import Header from '../../components/Header/Header';
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu';
import DiscountProducts from '../../components/DiscountProducts/DiscountProducts';

const IndexPage: FC = () => {
  return (
    <div>
      <Header />
      <ServiceMenu />
      <DiscountProducts/>
    </div>
  );
};

export default IndexPage;
