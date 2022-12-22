import React from 'react';
import Subheader from '../Utils/Subheader';
import PerguntasFrequentes from './PerguntasFrequentes';
import Contate from '../sections/Contate';
import Head from '../Utils/Head';

const Faq = () => {
  return (
    <div>
      <Head title="FAQ" />
      <Subheader HeaderTitle={'FAQ'} />
      <PerguntasFrequentes />
      <Contate />
    </div>
  );
};

export default Faq;
