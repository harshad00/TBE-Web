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
import { getSkillsBySlug } from '@/constant';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';

const Home = ({ slug, seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero />
      <OurPrograms />
      <Skills skills={getSkillsBySlug(slug)} />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
