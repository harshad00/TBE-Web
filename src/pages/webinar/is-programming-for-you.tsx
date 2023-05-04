import React from 'react';
import {
  WebinarHeader,
  SEO,
  AboutWebinarContainer,
  AboutTheBoringEducation,
  AboutWebinarInstructorContainer,
} from '@/components';
import { PageSlug } from '@/interfaces';
import { webinar } from '@/data';

const IsProgrammingForYouLanding = () => {
  const slug: PageSlug = '/is-programming-for-you';

  const { header, aboutWebinar } = webinar;

  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader {...header} />
      <AboutWebinarContainer {...aboutWebinar} />
      {/* <AboutWebinarInstructorContainer /> */}
      <AboutTheBoringEducation />
    </React.Fragment>
  );
};

export default IsProgrammingForYouLanding;
