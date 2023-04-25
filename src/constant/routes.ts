import { GenerateSectionPathProps, PageSlug } from '@/interfaces';

const routes = {
  home: '/',
  microCamps: '/micro-camps',
  microCampLanding: function (microCampSlug: PageSlug | string) {
    return this.microCamps + microCampSlug;
  },
  contactUs: 'tel:+918072937581',
  internals: {
    landing: {
      programs: 'programs',
    },
    microCampLanding: {
      explore: 'explore',
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
