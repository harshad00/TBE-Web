import React from 'react';
import { SEO } from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
