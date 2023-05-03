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
  return (
    <React.Fragment>
      <SEO slug={slug} />
      <WebinarHeader id={webinar.header.id} mainHeading={webinar.header.mainHeading} pillText={webinar.header.pillText}
        image={webinar.header.image}
        imageAltText={webinar.header.imageAltText}
        content={webinar.header.content}
        cardContent={webinar.header.cardContent} />
      <AboutWebinarContainer id={webinar.aboutWebinar.id} heading={webinar.aboutWebinar.heading}
        schedule={webinar.aboutWebinar.schedule}
        aboutText={webinar.aboutWebinar.aboutText}
        whatWillYouLearn={webinar.aboutWebinar.whatWillYouLearn} />
      <AboutWebinarInstructorContainer />
      <AboutTheBoringEducation />
    </React.Fragment>
  );
};

export default IsProgrammingForYouLanding;
