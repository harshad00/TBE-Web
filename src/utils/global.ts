import { getSEOMeta } from '@/constant';
import { PageSlug } from '@/interfaces';

export const getPreFetchProps = async ({ resolvedUrl }: any) => {
  let slug = '/';

  if (resolvedUrl) {
    slug = resolvedUrl;
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
