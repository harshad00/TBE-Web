import React from 'react';
import {
  Skills,
  MicroCampLandingHeader,
  InThisCohortContainer,
  Testimonials,
  NotAnotherTechCourse,
  ContextBasedLearning,
  MicrocampPricing,
  WhatWeDoForYou,
  WeTaughtAt,
  SEO,
} from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps, getSkillsBySlug } from '@/utils';

const MicroCampLanding = ({ slug, seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <MicroCampLandingHeader />
      <InThisCohortContainer />
      <Skills skills={getSkillsBySlug(slug)} />
      <WhatWeDoForYou />
      <NotAnotherTechCourse />
      <ContextBasedLearning />
      <MicrocampPricing />
      <WeTaughtAt />
      <Testimonials />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default MicroCampLanding;
