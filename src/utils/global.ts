import { getSEOMeta } from '@/constant';
import { PageSlug } from '@/interfaces';
import { NextPageContext } from 'next';

export const getPreFetchProps = async ({ query }: NextPageContext) => {
  const { webinar, microCamp } = query;

  let slug = '/';

  if (microCamp) slug += microCamp;
  else if (webinar) slug += webinar;

  const seoMeta = getSEOMeta(slug as PageSlug);

  const redirect = !seoMeta && {
    destination: '/404',
  };

  return {
    props: { slug, seoMeta },
    redirect,
  };
};
