import React from 'react';
import Subheader from '../Utils/Subheader';
import Numeros from '../sections/Numeros';
import Reviews from '../home/Reviews';
import Contate from '../sections/Contate';
import Inscrever from '../sections/Inscrever';
import SobreSolutions from './SobreSolutions';
import OurSolutions from './OurSolutions';
import Head from '../Utils/Head';

const Solutions = () => {
  return (
    <div>
      <Head title="Solution" />
      <Subheader HeaderTitle={'Solution'} />
      <SobreSolutions />
      <OurSolutions />
      <Numeros />
      <Reviews />
      <Contate />
      <Inscrever />
    </div>
  );
};

export default Solutions;
