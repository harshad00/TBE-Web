import { ProgramsDataProps } from '@/interfaces';

const imageMeta = {
  logo: {
    light: '/svg/logo.svg',
    dark: '/svg/logo-dark.svg',
    alt: 'the-boring-education-logo',
  },
};

const programs: ProgramsDataProps = {
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
  twoHourDesign: {
    label: '2 Hour Design',
    slug: '/2-hour-design',
    description: 'Learn to Design Tech Products in just 2 Hours.',
  },
  theNextWave: {
    label: 'The Next Wave',
    slug: '/the-next-wave',
    description: 'The Fundamentals of Next.js in 90 Min.',
  },
};

// Global links
const LINKS = {
  juniorInWebEngineeringRegistrationLink:
    'https://docs.google.com/forms/d/e/1FAIpQLSejDBJvhWMWeKZFkWY2PxuUa_LZYsstDvJljrn0Tbm2_2Kd7Q/viewform',
  freeTechConsultation:
    'https://calendly.com/theboringeducation/tech-consultation',
  bootcamp:
    'https://docs.google.com/forms/d/e/1FAIpQLSf40vUjRclTXIivifbahZ-L0EtnFhQw32BzQj3GWgBzeVfnXQ/viewform',
};

// Google analytics
const gtag = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;

const googleAnalyticsScript = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `;

// Paths
const STATIC_FILE_PATH = {
  svg: '/svg',
  webp: '/webp',
  image: '/images',
};

export {
  imageMeta,
  programs,
  LINKS,
  gtag,
  googleAnalyticsScript,
  STATIC_FILE_PATH,
};
