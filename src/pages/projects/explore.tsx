import React from 'react';
import { CardContainerB, SEO } from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { TBP_PROJECTS } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <CardContainerB
        heading='Explore'
        focusText='Projects'
        cards={TBP_PROJECTS}
        borderColour={2}
        subtext='Pick A Real Life Project and Start Building'
      />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
