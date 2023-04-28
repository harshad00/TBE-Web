import { PageSlug } from '@/interfaces';
import { landingPageSkills, juniorInWebEngineeringSkills } from './pages';

const imageMeta = {
  logo: {
    path: '/svg/logo.svg',
    alt: 'the-boring-education-logo',
  },
};

const programs = {
  beFrontendMaster: {
    label: 'Be Front-end Master',
    slug: '/be-frontend-master',
    description:
      'Learn Core of Front-end Engineering with Placement Assistance in 8 Weeks.',
  },
  beBackendMaster: {
    label: 'Be Backend Master',
    slug: '/be-backend-master',
    description:
      'Learn Core of Backend Engineering with Placement Assistance in 8 Weeks.',
  },
  juniorInWebEngineering: {
    label: 'Junior in Web Engineering',
    slug: '/junior-in-web-engineering',
    description:
      'Learn Fundamentals of Web dev with industry experts in live sessions.',
  },
  theBoringWorkshops: {
    label: 'The Boring Workshops',
    slug: '/the-boring-workshops',
    description:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
  },
  isProgrammingForYou: {
    label: 'Is Programming For You',
    slug: '/is-programming-for-you',
    description:
      'Understand why everybody want to be in Tech and should learn Tech or not.',
  },
};

// Skills
const getSkillsBySlug = (slug: PageSlug) => {
  const skillsBySlug = {
    '/': landingPageSkills,
    [programs.juniorInWebEngineering.slug]: juniorInWebEngineeringSkills,
  };

  return skillsBySlug[slug];
};

// Global links
const LINKS = {
  juniorInWebEngineeringRegistrationLink:
    'https://docs.google.com/forms/d/e/1FAIpQLSejDBJvhWMWeKZFkWY2PxuUa_LZYsstDvJljrn0Tbm2_2Kd7Q/viewform?usp=sf_link',
  freeTechConsultation:
    'https://calendly.com/theboringeducation/tech-consultation',
};

// Google analytics
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;

const googleAnalyticsScript = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
          `;

export {
  imageMeta,
  programs,
  LINKS,
  getSkillsBySlug,
  gtag,
  googleAnalyticsScript,
};
