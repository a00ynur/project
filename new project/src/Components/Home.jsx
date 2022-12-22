import React from 'react';
import Intro from './home/Intro';
import Vantagens from './home/vantagens';
import Qualidade from './home/Qualidade';
import BlogSection from './home/BlogSection';
import Reviews from './home/Reviews';
import Numeros from './sections/numeros';
import Contate from './sections/contate';
import Inscrever from './sections/Inscrever';
import Head from './Utils/Head';

const Home = () => {
  return (
    <div>
      <Head title="Home" />
      <Intro />
      <Vantagens />
      <Qualidade />
      <BlogSection />
      <Reviews />
      <Numeros />
      <Contate />
      <Inscrever />
    </div>
  );
};

export default Home;
