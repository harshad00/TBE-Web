import React, { Fragment } from 'react';
import { PageProps } from '@/interfaces';
import { SEO, CardContainerB, LoadingSpinner } from '@/components';
import { useAPIResponseMapper, useApi } from '@/hooks';
import {
  getPreFetchProps,
  mapCourseResponseToCard,
  sendRequest,
} from '@/utils';
import { routes } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  const { response, loading } = useApi('courses', sendRequest, {
    url: routes.api.courses,
  });

  const courses = useAPIResponseMapper(response?.data, mapCourseResponseToCard);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <CardContainerB
        heading='Explore'
        focusText='Courses'
        cards={courses}
        borderColour={2}
        subtext='Pick A Real Life Project and Start Building'
        sectionClassName='px-2 py-4'
      />
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
