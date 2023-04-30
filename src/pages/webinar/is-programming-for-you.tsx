import React from 'react';
import { WebinarHeader, SEO } from '@/components';
import { PageSlug } from '@/interfaces';

const IsProgrammingForYouLanding = () => {
  const slug: PageSlug = '/is-programming-for-you';
  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader />
    </React.Fragment>
  );
};

export default IsProgrammingForYouLanding;
