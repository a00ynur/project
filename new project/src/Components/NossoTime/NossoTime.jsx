import React from 'react';
import Inscrever from '../sections/Inscrever';
import Head from '../Utils/Head';
import Subheader from '../Utils/Subheader';
import Time from './Time';

const NossoTime = () => {
  return (
    <div>
      <Head title="Our team" />
      <Subheader HeaderTitle={'Nosso Time'} />
      <Time />
      <Inscrever />
    </div>
  );
};

export default NossoTime;
