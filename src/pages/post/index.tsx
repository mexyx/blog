import React from 'react';

import MainContainer from '@/components/main-container';
import PageHeader from '@/components/page-header';
import PostList from '@/components/post-list';

const Home = () => (
  <>
    <PageHeader title="POST" signature="There is POST" />
    <MainContainer main={<PostList />} aside={<h1>POST</h1>} />
  </>
);

export default Home;
