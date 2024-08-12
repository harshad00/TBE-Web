import React, { Fragment } from 'react';
import { PageProps } from '@/interfaces';
import {
  SEO,
  CardContainerB,
  LoadingSpinner,
  FlexContainer,
  Text,
  LinkButton,
} from '@/components';
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

  if (!courses || courses.length === 0) {
    return (
      <FlexContainer
        justifyCenter={true}
        className='w-screen h-screen item-center justify-center flex-col'
      >
        <Text level='h1' className='heading-4 mb-3'>
          Oops! No Courses found.
        </Text>
        <LinkButton
          buttonProps={{
            variant: 'PRIMARY',
            text: 'Go Back To Home',
          }}
          href={routes.shiksha}
        ></LinkButton>
      </FlexContainer>
    );
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
