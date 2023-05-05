import React from 'react';
import {
  WebinarHeader,
  SEO,
  AboutWebinarContainer,
  AboutTheBoringEducation,
  AboutWebinarInstructorContainer,
  Testimonials,
} from '@/components';
import { PageProps } from '@/interfaces';
import { webinar } from '@/data';
import { getPreFetchProps } from '@/utils';

const IsProgrammingForYouLanding = ({ seoMeta }: PageProps) => {
  const { meta, aboutWebinar } = webinar;

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <WebinarHeader {...meta} />
      <AboutWebinarContainer {...aboutWebinar} {...meta} />
      <AboutWebinarInstructorContainer {...meta} />
      <Testimonials />
      <AboutTheBoringEducation />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default IsProgrammingForYouLanding;
