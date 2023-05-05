import React from 'react';
import {
  WebinarHeader,
  SEO,
  AboutWebinarContainer,
  AboutTheBoringEducation,
  AboutWebinarInstructorContainer,
  Testimonials,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { webinar } from '@/data';

const IsProgrammingForYouLanding = () => {
  const slug: PageSlug = '/is-programming-for-you';

  const { meta, aboutWebinar, instructor } = webinar;

  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader {...meta} />
      <AboutWebinarContainer {...aboutWebinar} {...meta} />
      <AboutWebinarInstructorContainer {...instructor} />
      <Testimonials />
      <AboutTheBoringEducation />
    </React.Fragment>
  );
};

export default IsProgrammingForYouLanding;
