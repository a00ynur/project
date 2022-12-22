import React from 'react';
import Subheader from '../Utils/Subheader';
import Inscrever from '../sections/Inscrever';
import BlogContainer from './BlogContainer';
import Head from '../Utils/Head';

const Blog = () => {
  return (
    <div>
      <Head title="Blog" />
      <Subheader HeaderTitle={'Blog'} />
      <BlogContainer />
      <Inscrever />
    </div>
  );
};

export default Blog;
