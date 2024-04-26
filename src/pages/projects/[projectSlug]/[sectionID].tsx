import React from 'react';
import { SEO } from '@/components';
import { ProjectPageProps } from '@/interfaces';
import { getProjectPageProps } from '@/utils';

const Home = ({ project, seoMeta }: ProjectPageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <div className='flex-col justify-start items-start gap-2 inline-flex'>
        <div className="text-zinc-900 text-2xl font-bold font-['Inter']">
          Under Dev | Section Page
        </div>
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps = getProjectPageProps;

export default Home;
