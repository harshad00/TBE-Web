import React from 'react';
import {
  LandingPageHero,
  OurPrograms,
  Skills,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  Testimonials,
  SEO,
  OurWorkshops,
  ChooseTechCohort,
} from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { landingPageSkills, routes } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero />
      <ChooseTechCohort id={routes.internals.microCampRegister} />
      <OurPrograms />
      <Skills skills={landingPageSkills} />
      <OurWorkshops />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
