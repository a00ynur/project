import React from 'react';
import Head from '../Utils/Head';
import Subheader from '../Utils/Subheader';
import ContatosForm from './ContatosForm';
import ContatosMap from './ContatosMap';

const Contatos = () => {
  return (
    <div>
      <Head title="Contatos" />
      <Subheader HeaderTitle={'Contatos'} />
      <ContatosForm />
      <ContatosMap />
    </div>
  );
};

export default Contatos;
