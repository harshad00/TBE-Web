import { GenerateSectionPathProps } from '@/interfaces';

const routes = {
  home: '/',
  roadmaps: '/roadmaps',
  projects: '/projects',
  projectsExplore: '/projects/explore',
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
