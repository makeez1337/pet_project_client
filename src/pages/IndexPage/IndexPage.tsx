import React, { FC } from 'react';

import Header from '../../components/Header/Header';
import ServiceMenu from '../../components/ServiceMenu/ServiceMenu';

const IndexPage: FC = () => {
  return (
    <div>
      <Header />
      <ServiceMenu />
    </div>
  );
};

export default IndexPage;
