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
import { NextPageContext } from 'next';

interface PageProps {
  slug: PageSlug;
}

const IsProgrammingForYouLanding = ({ slug }: PageProps) => {
  const { meta, aboutWebinar } = webinar;

  console.log('HERE', slug);

  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader {...meta} />
      <AboutWebinarContainer {...aboutWebinar} {...meta} />
      <AboutWebinarInstructorContainer {...meta} />
      <Testimonials />
      <AboutTheBoringEducation />
    </React.Fragment>
  );
};

export async function getPreFetchProps({ query }: NextPageContext) {
  const { webinar, microCamp } = query;
  console.log(query);

  return {
    props: { slug: '/' + webinar },
  };
}

export const getServerSideProps = getPreFetchProps;

export default IsProgrammingForYouLanding;
