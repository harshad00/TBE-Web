import { getSEOMeta } from '@/constant';
import { PageSlug } from '@/interfaces';

export const getPreFetchProps = async ({ query, resolvedUrl }: any) => {
  const { project } = query;
  let slug = '/';

  if (resolvedUrl) {
    slug = resolvedUrl;
  }

  if (project) {
    slug = `/projects/${project}`;
  }

  const seoMeta = getSEOMeta(slug as PageSlug);

  const redirect = !seoMeta && {
    destination: '/404',
  };

  return {
    props: { slug, seoMeta },
    redirect,
  };
};
