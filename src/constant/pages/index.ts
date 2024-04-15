import {
  TestimonialCardProps,
  WeGuideDifferentlyCardProps,
  TopNavbarContainerProps,
  CohortCardProps,
} from '@/interfaces';
import { products, STATIC_FILE_PATH } from '../global';
import { routes } from '../routes';
import { v4 } from 'uuid';

const TOP_NAVIGATION: TopNavbarContainerProps = {
  products: [
    {
      id: v4(),
      name: products.roadmaps.label,
      description: products.roadmaps.description,
      href: products.roadmaps.slug,
    },
    {
      id: v4(),
      name: products.projects.label,
      description: products.projects.description,
      href: products.projects.slug,
    },
  ],
  links: [
    {
      id: v4(),
      name: 'Contact us',
      href: routes.contactUs,
      description: 'Talk to our co-founders directly.',
    },
  ],
};

const PRODUCTS: CohortCardProps[] = [
  {
    id: 'roadmaps',
    image: `${STATIC_FILE_PATH.svg}/roadmaps.svg`,
    imageAltText: products.roadmaps.label,
    title: products.roadmaps.label,
    content: products.roadmaps.description,
    href: products.roadmaps.slug,
    active: true,
  },
  {
    id: 'projects',
    image: `${STATIC_FILE_PATH.svg}/projects.svg`,
    imageAltText: products.projects.label,
    title: products.projects.label,
    content: products.projects.description,
    href: products.projects.slug,
    active: true,
  },
  {
    id: 'workshops',
    image: `${STATIC_FILE_PATH.svg}/workshops.svg`,
    imageAltText: products.workshops.label,
    title: products.workshops.label,
    content: products.workshops.description,
    href: products.workshops.slug,
    active: true,
  },
  {
    id: 'shiksha',
    image: `${STATIC_FILE_PATH.svg}/shiksha.svg`,
    imageAltText: products.shiksha.label,
    title: products.shiksha.label,
    content: products.shiksha.description,
    href: products.shiksha.slug,
    active: true,
  },
  {
    id: 'os',
    image: `${STATIC_FILE_PATH.svg}/os.svg`,
    imageAltText: products.os.label,
    title: products.os.label,
    content: products.os.description,
    href: products.os.slug,
    active: true,
  },
];

const USP: WeGuideDifferentlyCardProps[] = [
  {
    id: v4(),
    title: `Personalised Roadmap`,
    content: `You can create your version of Roadmap and follow along. You don't need old hardcoded roadmaps.`,
    image: `${STATIC_FILE_PATH.svg}/mentorship.svg`,
    imageAltText: `mentorship`,
  },
  {
    id: v4(),
    title: `Build Real Life Projects`,
    content: `Stop Building Clone Projects. Build Something that People would Love to use and also Add into your Resume.`,
    image: `${STATIC_FILE_PATH.svg}/peer-to-peer-learning.svg`,
    imageAltText: `peer learning`,
  },
  // {
  //   id: v4(),
  //   title: `Learn Skills in Workshops`,
  //   content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
  //   image: `${STATIC_FILE_PATH.svg}/workshop.svg`,
  //   imageAltText: `weekend workshop`,
  // },
  {
    id: v4(),
    title: `Free Mentorship Sessions`,
    content: `We Provide Free Mentorship Sessions. Take Tech Guidance or Get Your Resume Reviewed.`,
    image: `${STATIC_FILE_PATH.svg}/peer-to-peer-learning.svg`,
    imageAltText: `doubt session`,
  },
];

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    id: v4(),
    title: `Manish Kumar`,
    content:
      'The Front-end cohort at The Boring Education transformed my web development skills. Their comprehensive curriculum and engaging teaching style made learning Front-end enjoyable and practical.',
    image: `https://ik.imagekit.io/tbe/webapp/manish-kumar-testimonial.png`,
    imageAltText: `profile image`,
    work: 'Software Engineer at Infosys',
  },
  {
    id: v4(),
    title: `Nancy Sharma`,
    content: `Thanks to The Boring Education's Front-end Cohort, my confidence in Web Dev skills has soared. Hands-on learning and supportive instructors made JavaScript accessible and rewarding.`,
    image: `https://ik.imagekit.io/tbe/webapp/nancy-sharma-testimonial.png`,
    imageAltText: `profile image`,
    work: 'Software Engineer at Cognizant',
  },
  {
    id: v4(),
    title: `Gautom Das`,
    content: `I highly recommend The Boring Education's Front-end cohort! Clear explanations, real-world examples, and challenging projects strengthened my understanding of Front-end Engineering.`,
    image: `https://ik.imagekit.io/tbe/webapp/gautom-das-testimonial.png`,
    imageAltText: `profile image`,
    work: 'College Passed Out',
  },
  {
    id: v4(),
    title: `Mohammad Sufyan`,
    content: `A fantastic tech learning platform for aspiring web developers, providing a pathway to explore and excel in this exciting career.`,
    image: `https://ik.imagekit.io/tbe/webapp/mohammad-sufyan-testimonial.png`,
    imageAltText: `profile image`,
    work: '12th completed',
  },
  {
    id: v4(),
    title: `Eshan Mishra`,
    content: `I'm extremely grateful to be part of The Boring Education as a learner, acquiring valuable web development skills.`,
    image: `https://ik.imagekit.io/tbe/webapp/eshan-mishra-testimonial.png`,
    imageAltText: `profile image`,
    work: 'College Student',
  },
  {
    id: v4(),
    title: `Kusum Sahani`,
    content: `I'm grateful to be part of The Boring Education as a learner, acquiring Front-end Engineering skills with exceptional faculty.`,
    image: `https://ik.imagekit.io/tbe/webapp/kusum-sahani-testimonial.png`,
    imageAltText: `profile image`,
    work: 'College Passed Out',
  },
  {
    id: v4(),
    title: `Nikhil Maurya`,
    content: `The Boring workshop made UI design easy and accessible. They explained complex concepts in a simple and understandable manner.`,
    image: `https://ik.imagekit.io/tbe/webapp/nikhil-testimonial.png`,
    imageAltText: `profile image`,
    work: 'College Student',
  },
  {
    id: v4(),
    title: `Satish Daraboina`,
    content: `The workshop at The Boring Education elevated my design skills. From Figma basics to creating and connecting screens, I gained hands-on experience to apply in real projects.`,
    image: `https://ik.imagekit.io/tbe/webapp/satish-testimonial.png`,
    imageAltText: `profile image`,
    work: 'College Student',
  },
];

const MY_PREV_EXPERIENCE = [
  {
    id: v4(),
    image: `${STATIC_FILE_PATH.svg}/pesto.svg`,
    imageAltText: `pesto`,
  },
  {
    id: v4(),
    image: `${STATIC_FILE_PATH.svg}/masai.svg`,
    imageAltText: `masai`,
  },
  {
    id: v4(),
    image: `${STATIC_FILE_PATH.svg}/cuemath.svg`,
    imageAltText: `cuemath`,
  },
  {
    id: v4(),
    image: `${STATIC_FILE_PATH.svg}/newton.svg`,
    imageAltText: `newton`,
  },
];

export { PRODUCTS, TESTIMONIALS, TOP_NAVIGATION, USP, MY_PREV_EXPERIENCE };
