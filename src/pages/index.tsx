import React from 'react';
import {
  LandingPageHero,
  OurPrograms,
  Skills,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  Testimonials,
  SEO,
} from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { landingPageSkills } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero />
      <OurPrograms />
      <Skills skills={landingPageSkills} />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
