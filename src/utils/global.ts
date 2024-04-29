import { BASE_API_URL, getSEOMeta } from '@/constant';
import { PageSlug, ProjectPickedPageProps } from '@/interfaces';
import { getSelectedProjectChapterMeta } from '.';

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
  const { projectSlug, projectId, sectionId, chapterId } = query;

  let slug = '/';

  if (projectSlug) {
    slug = '/projects/' + projectSlug;
  }

  if (projectId) {
    try {
      const seoMeta = getSEOMeta(slug as PageSlug);

      const { status, data } = await fetchAPIData(`projects/${projectId}`);

      // If the project data is not found, return the message
      if (!status) {
        return {
          redirect: {
            destination: '/404',
          },
          props: { slug },
        };
      }

      const project: ProjectPickedPageProps = data;
      let { meta } = project;

      if (sectionId && chapterId) {
        const selectedChapterMeta = getSelectedProjectChapterMeta(
          project,
          sectionId,
          chapterId
        );

        if (selectedChapterMeta) meta = selectedChapterMeta;
      }

      return {
        props: {
          slug,
          seoMeta,
          project,
          resolvedUrl,
          meta,
        },
      };
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  }

  return {
    redirect: {
      destination: '/404',
    },
    props: { slug },
  };
};

const fetchAPIData = async (url: string) => {
  const response = await fetch(`${BASE_API_URL}/${url}`);

  return await response.json();
};

export { getPreFetchProps, getProjectPageProps };
