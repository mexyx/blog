import React from 'react';

import MainContainer from '@/components/main-container';
import PageHeader from '@/components/page-header';
import PostList from '@/components/post-list';

const Home = () => (
  <>
    <PageHeader title="HOME" signature="There is Homepage" />
    <MainContainer main={<PostList />} aside={<h1>TODO</h1>} />
  </>
);

export default Home;
