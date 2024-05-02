import React, { Fragment } from 'react';
import { CardContainerB, LoadingSpinner, SEO } from '@/components';
import { PageProps } from '@/interfaces';
import {
  getPreFetchProps,
  mapProjectResponseToCard,
  sendRequest,
} from '@/utils';
import { useAPIResponseMapper, useApi } from '@/hooks';
import { routes } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  const { response, loading } = useApi('projects', sendRequest, {
    url: routes.api.projects,
  });

  const projects = useAPIResponseMapper(
    response?.data,
    mapProjectResponseToCard
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <CardContainerB
        heading='Explore'
        focusText='Projects'
        cards={projects}
        borderColour={2}
        subtext='Pick A Real Life Project and Start Building'
      />
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
