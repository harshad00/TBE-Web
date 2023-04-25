import React from 'react';
import {
  LandingPageHero,
  OurPrograms,
  Skills,
  WeGuideDifferently,
  CanYouBeAProgrammer,
  Testimonials,
  Footer,
  SEO,
} from '@/components';
import { getSkillsBySlug } from '@/constant';
import { PageSlug } from '@/interfaces';

const Home = () => {
  const slug: PageSlug = '/';

  return (
    <React.Fragment>
      <SEO slug={slug} />
      <LandingPageHero />
      <OurPrograms />
      <Skills skills={getSkillsBySlug(slug)} />
      <WeGuideDifferently />
      <CanYouBeAProgrammer />
      <Testimonials />
    </React.Fragment>
  );
};

export default Home;
