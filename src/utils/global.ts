import { getSEOMeta } from '@/constant';
import { PageSlug } from '@/interfaces';
import { NextPageContext } from 'next';

export const getPreFetchProps = async ({ query }: NextPageContext) => {
  const { workshop, microCamp } = query;

  let slug = '/';

  if (microCamp) slug += microCamp;

  const seoMeta = getSEOMeta(slug as PageSlug);

  const redirect = !seoMeta && {
    destination: '/404',
  };

  return {
    props: { slug, seoMeta },
    redirect,
  };
};
