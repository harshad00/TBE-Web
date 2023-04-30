import React from 'react';
import {
  WebinarHeader,
  SEO,
  AboutWebinarContainer,
  AboutTheBoringEducation,
  AboutWebinarInstructorContainer,
} from '@/components';
import { PageSlug } from '@/interfaces';

const IsProgrammingForYouLanding = () => {
  const slug: PageSlug = '/is-programming-for-you';
  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader />
      <AboutWebinarContainer />
      <AboutWebinarInstructorContainer />
      <AboutTheBoringEducation />
    </React.Fragment>
  );
};

export default IsProgrammingForYouLanding;
