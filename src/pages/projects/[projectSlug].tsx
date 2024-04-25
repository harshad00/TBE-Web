import React from 'react';
import { SEO } from '@/components';
import { PageProps } from '@/interfaces';
import { getProjectPageProps } from '@/utils';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
    </React.Fragment>
  );
};

export const getServerSideProps = getProjectPageProps;

export default Home;
