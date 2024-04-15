import React from 'react';
import {
  LandingPageHero,
  OurProducts,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  Testimonials,
  SEO,
} from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero />
      <OurProducts />
      <CanYouBeAProgrammer />
      <WeGuideDifferently />
      <Testimonials />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
