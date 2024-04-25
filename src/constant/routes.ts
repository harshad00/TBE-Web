import { GenerateSectionPathProps } from '@/interfaces';

const routes = {
  home: '/',
  roadmaps: '/roadmaps',
  projects: '/projects',
  projectsExplore: '/projects/explore',
  allProjects: {
    pharmashiftI: '/projects/pharmashift-i',
    pharmashiftII: '/projects/pharmashift-ii',
  },
  shiksha: '/shiksha',
  workshops: '/workshops',
  os: '/os',
  contactUs: '/contact',
  internals: {
    landing: {
      products: 'products',
    },
  },
  404: '/404',
};

const generateSectionPath = ({
  basePath,
  sectionID,
}: GenerateSectionPathProps) => {
  return basePath + '#' + sectionID;
};

export { routes, generateSectionPath };
