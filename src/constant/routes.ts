import { GenerateSectionPathProps, PageSlug } from '@/interfaces';

const routes = {
  home: '/',
  microCamps: '/micro-camps',
  microCampLanding: function (microCampSlug: PageSlug | string) {
    return this.microCamps + microCampSlug;
  },

  contactUs: '/contact',
  internals: {
    landing: {
      programs: 'programs',
    },
    microCampLanding: {
      explore: 'explore',
    },
  },
  404: '/404',
  isProgrammingForYou: '/is-programming-for-you',
};

const generateSectionPath = ({
  basePath,
  sectionID,
}: GenerateSectionPathProps) => {
  return basePath + '#' + sectionID;
};

export { routes, generateSectionPath };
