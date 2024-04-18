import React from 'react';
import { CardContainerA, SEO, SectionHeaderContainer } from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { TBP_FEATURES } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <SectionHeaderContainer
        heading='Explore'
        focusText='Projects'
        subtext='Pick A Real Life Project and Start Building'
      />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
