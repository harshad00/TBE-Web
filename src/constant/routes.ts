import { GenerateSectionPathProps } from '@/interfaces';

const routes = {
  home: '/',
  roadmaps: '/roadmaps',
  projects: '/projects',
  register: '/register',
  projectsExplore: '/projects/explore',
  allProjects: {
    pharmashiftI: '/projects/pharmasift-i',
    pharmashiftII: '/projects/pharmasift-ii',
  },
  shiksha: '/shiksha',
  shikshaExplore: '/shiksha/explore',
  workshops: '/workshops',
  os: '/os',
  contactUs: '/contact',
  internals: {
    landing: {
      products: 'products',
    },
  },
  404: '/404',
  api: {
    base: '/api/v1',
    projects: '/projects',
    project: (project: string) => `/projects/${project}`,
  },
};

const generateSectionPath = ({
  basePath,
  sectionID,
}: GenerateSectionPathProps) => {
  return basePath + '#' + sectionID;
};

export { routes, generateSectionPath };
