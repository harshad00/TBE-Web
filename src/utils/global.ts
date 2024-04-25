import { getSEOMeta } from '@/constant';
import { PageSlug } from '@/interfaces';

const getPreFetchProps = async ({ query, resolvedUrl }: any) => {
  const { projectSlug } = query;
  let slug = '/';

  if (resolvedUrl) {
    slug = resolvedUrl;
  }

  if (projectSlug) {
    slug = `/projects/${projectSlug}`;
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

const getProjectPageProps = async ({ query, resolvedUrl }: any) => {
  const { projectSlug, projectId } = query;
  let slug = '/';

  if (resolvedUrl) {
    slug = resolvedUrl;
  }

  if (projectSlug) {
    slug = `/projects/${projectSlug}`;
  }

  const seoMeta = getSEOMeta(slug as PageSlug);

  // FETCH HERE

  const redirect = !seoMeta && {
    destination: '/404',
  };

  return {
    props: { slug, seoMeta },
    redirect,
  };
};

export { getPreFetchProps, getProjectPageProps };
