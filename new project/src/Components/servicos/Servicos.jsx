import React from 'react';
import Subheader from '../Utils/Subheader';
import Inscrever from '../sections/Inscrever';
import Contate from '../sections/Contate';
import Numeros from '../sections/Numeros';
import ServicosCards from './ServicosCards';
import Head from '../Utils/Head';

const Servicos = () => {
  return (
    <div>
      <Head title="Services" />
      <Subheader HeaderTitle={'Services'} />
      <ServicosCards />
      <Numeros />
      <Contate />
      <Inscrever />
    </div>
  );
};

export default Servicos;
