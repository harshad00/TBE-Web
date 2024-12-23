import { envConfig, getSEOMeta, routes, seoCommonMeta } from '@/constant';
import {
  BaseShikshaCourseResponseProps,
  BaseInterviewSheetResponseProps,
  ProjectPickedPageProps,
} from '@/interfaces';
import {
  getSelectedCourseChapterMeta,
  getSelectedSheetQuestionMeta,
  getSelectedProjectChapterMeta,
  isUserAuthenticated,
} from '.';

const getPreFetchProps = async ({ resolvedUrl }: any) => {
  let slug = routes.home;

  if (resolvedUrl) {
    slug = resolvedUrl;
  }

  const seoMeta = getSEOMeta(slug);

  const redirect = !seoMeta && {
    destination: routes.home,
  };

  return {
    props: { slug, seoMeta },
    redirect,
  };
};

const getProjectPageProps = async (context: any) => {
  const { req, query } = context;
  const { projectSlug, projectId, sectionId, chapterId } = query;

  let slug = routes.home;

  if (projectSlug) {
    slug = `/projects/${projectSlug}`;
  }

  const seoMeta = getSEOMeta(slug);

  if (projectId && seoMeta) {
    try {
      // Authenticate user
      const user = await isUserAuthenticated(req);

      // Fetch project data using the new route builder function
      const { status, data } = await fetchAPIData(
        routes.api.projectByIdWithUser(projectId, user?.id)
      );

      // If the project data is not found, redirect to
      if (!status) {
        return {
          redirect: {
            destination: routes.home,
          },
          props: { slug },
        };
      }

      const project: ProjectPickedPageProps = data;
      let { meta } = project;
      let currentChapterId = '';

      // If section and chapter IDs are provided, get specific chapter metadata
      if (sectionId && chapterId) {
        currentChapterId = chapterId;

        const selectedChapterMeta = getSelectedProjectChapterMeta(
          project,
          sectionId,
          chapterId
        );

        if (selectedChapterMeta) {
          meta = selectedChapterMeta;
        }
      }

      return {
        props: {
          slug,
          seoMeta,
          project,
          meta,
          currentChapterId,
        },
      };
    } catch (error) {
      console.error('Error fetching project data:', error);
    }
  }

  // Redirect to  if projectId is missing or seoMeta is not set
  return {
    redirect: {
      destination: routes.home,
    },
    props: { slug },
  };
};

const getCoursePageProps = async (context: any) => {
  const { req, query } = context;
  const { courseSlug, courseId, chapterId } = query;

  let slug = routes.home;

  if (courseSlug) {
    slug = '/shiksha/' + courseSlug;
  }

  const seoMeta = getSEOMeta(slug);

  if (courseId && seoMeta) {
    try {
      const user = await isUserAuthenticated(req);

      const { status, data } = await fetchAPIData(
        routes.api.courseByIdWithUser(courseId, user?.id)
      );

      // If the project data is not found, return the message
      if (!status) {
        return {
          redirect: {
            destination: routes.home,
          },
          props: { slug },
        };
      }

      const course: BaseShikshaCourseResponseProps = data;
      let { meta } = course;
      let currentChapterId = '';

      if (chapterId) {
        currentChapterId = chapterId;

        const selectedChapterMeta = getSelectedCourseChapterMeta(
          course,
          chapterId
        );

        if (selectedChapterMeta) meta = selectedChapterMeta;
      }

      return {
        props: {
          slug,
          seoMeta,
          course,
          meta,
          currentChapterId,
        },
      };
    } catch (error) {
      console.error('Error fetching course data:', error);
    }
  }

  return {
    redirect: {
      destination: routes.home,
    },
    props: { slug },
  };
};

const getSheetPageProps = async (context: any) => {
  const { req, query } = context;
  const { sheetSlug, sheetId, questionId } = query;

  let slug = routes.home;

  if (sheetSlug) {
    slug = '/interview-prep/' + sheetSlug;
  }

  const seoMeta = getSEOMeta(slug);

  if (sheetId && seoMeta) {
    try {
      const user = await isUserAuthenticated(req);

      // Fetch sheet data with user ID if available
      const { status, data } = await fetchAPIData(
        routes.api.sheetByIdWithUser(sheetId as string, user?.id)
      );

      // Redirect if the sheet data is not found
      if (!status) {
        return {
          redirect: {
            destination: routes.home,
          },
          props: { slug },
        };
      }

      const sheet: BaseInterviewSheetResponseProps = data;
      let { meta } = sheet;
      let currentQuestionId = '';

      // If a specific question is selected, get its metadata
      if (questionId) {
        currentQuestionId = questionId as string;

        const selectedQuestionMeta = getSelectedSheetQuestionMeta(
          sheet,
          currentQuestionId
        );

        if (selectedQuestionMeta) meta = selectedQuestionMeta;
      }

      return {
        props: {
          slug,
          seoMeta,
          sheet,
          meta,
          currentQuestionId,
        },
      };
    } catch (error) {
      console.error('Error fetching sheet data:', error);
    }
  }

  return {
    redirect: {
      destination: routes.home,
    },
    props: { slug },
  };
};

const fetchAPIData = async (url: string) => {
  const response = await fetch(`${envConfig.BASE_API_URL}/${url}`);

  return await response.json();
};

const getWebinarPageProps = async (context: any) => {
  const { query } = context;
  const { webinarSlug: slug } = query;

  const { status, data: webinar } = await fetchAPIData(
    routes.api.webinarBySlug(slug)
  );

  if (!status) {
    return {
      redirect: {
        destination: routes.home,
      },
    };
  }

  const {
    _id,
    name,
    description,
    isFree,
    about,
    dateAndTime,
    learnings,
    registrationUrl,
    host,
  } = webinar;

  const seoMeta = {
    title: `${name} | The Boring Webinars`,
    siteName: 'The Boring Education',
    description,
    url: `${routes.webinar}/${slug}`,
    keywords:
      'Tech Education, Online Learning, Programming, Free Courses, Open Source, Webinars, The Boring Education, College Students, Working Professionals, Career Development, Skill Enhancement, GitHub, Instagram, Twitter, LinkedIn',
    ...seoCommonMeta,
  };

  return {
    props: {
      seoMeta,
      webinarId: _id,
      name,
      slug,
      description,
      learnings,
      isFree,
      about,
      host,
      dateAndTime,
      registrationUrl,
      bannerImageUrl:
        'https://wallpapers.com/images/hd/coding-background-9izlympnd0ovmpli.jpg',
    },
  };
};

export {
  getPreFetchProps,
  getProjectPageProps,
  getCoursePageProps,
  getSheetPageProps,
  getWebinarPageProps,
};
