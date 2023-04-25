import {
  FooterNavigationDataProps,
  MicroCampFeatureCardContentProps,
  OpportunityCardProps,
  SkillsProps,
  TestimonialCardProps,
  WeGuideDifferentlyCardProps,
  MicroCampFeaturePricingCardProps,
  SkillProps,
} from '@/interfaces';
import { programs } from '../global';
import { routes } from '../routes';
import { v4 } from 'uuid';

const SVG_BASE_PATH = '/svg';
const WEBP_BASE_PATH = '/webp';

const TOP_NAVIGATION = [
  {
    id: v4(),
    name: programs.juniorInWebEngineering.label,
    href: routes.microCampLanding(programs.juniorInWebEngineering.slug),
  },
  // {
  //   id: v4(),
  //   name: programs.beFrontendMaster.label,
  //   href: routes.microCampLanding(programs.beFrontendMaster.slug),
  // },
  // {
  //   id: v4(),
  //   name: programs.beBackendMaster.label,
  //   href: routes.microCampLanding(programs.beBackendMaster.slug),
  // },
  { id: v4(), name: 'Contact us', href: routes.contactUs },
];

const PROGRAMS = [
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/junior-in-web-engineering-banner.svg`,
    imageAltText: programs.juniorInWebEngineering.label,
    title: programs.juniorInWebEngineering.label,
    content: programs.juniorInWebEngineering.description,
    href: routes.microCampLanding(programs.juniorInWebEngineering.slug),
    active: true,
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/be-front-end-master-banner.svg`,
    imageAltText: programs.beFrontendMaster.label,
    title: programs.beFrontendMaster.label,
    content: programs.beFrontendMaster.description,
    href: routes.microCampLanding(programs.beFrontendMaster.slug),
    active: false,
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/be-back-end-master-banner.svg`,
    imageAltText: programs.beBackendMaster.label,
    title: programs.beBackendMaster.label,
    content: programs.beBackendMaster.description,
    href: routes.microCampLanding(programs.beBackendMaster.slug),
    active: false,
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/the-boring-workshop-banner.svg`,
    imageAltText: programs.theBoringWorkshops.label,
    title: programs.theBoringWorkshops.label,
    content: programs.theBoringWorkshops.description,
    href: programs.theBoringWorkshops.slug,
    active: false,
  },
];

const [
  HTML,
  CSS,
  JavaScript,
  ReactJS,
  NextJS,
  NodeJS,
  MongoDB,
  Figma,
  TypeScript,
]: SkillProps[] = [
  {
    id: v4(),
    name: `HTML`,
    image: `${SVG_BASE_PATH}/html.svg`,
    imageAltText: `HTML`,
  },
  {
    id: v4(),
    name: `CSS`,
    image: `${SVG_BASE_PATH}/css.svg`,
    imageAltText: `CSS`,
  },
  {
    id: v4(),
    name: `JavaScript`,
    image: `${SVG_BASE_PATH}/js.svg`,
    imageAltText: `JavaScript`,
  },
  {
    id: v4(),
    name: `ReactJS`,
    image: `${SVG_BASE_PATH}/reactjs.svg`,
    imageAltText: `ReactJS`,
  },
  {
    id: v4(),
    name: `NextJs`,
    image: `${SVG_BASE_PATH}/nextjs.svg`,
    imageAltText: `NextJS`,
  },
  {
    id: v4(),
    name: `NodeJS`,
    image: `${SVG_BASE_PATH}/nodejs.svg`,
    imageAltText: `NodeJS`,
  },
  {
    id: v4(),
    name: `MongoDB`,
    image: `${SVG_BASE_PATH}/mongodb.svg`,
    imageAltText: `MongoDB`,
  },
  {
    id: v4(),
    name: `Figma`,
    image: `${SVG_BASE_PATH}/figma.svg`,
    imageAltText: `Figma`,
  },
  {
    id: v4(),
    name: `TypeScript`,
    image: `${SVG_BASE_PATH}/typescript.svg`,
    imageAltText: `TypeScript`,
  },
];

const landingPageSkills: SkillsProps[] = [
  {
    id: v4(),
    title: `Front-end Engineering`,
    details: [JavaScript, ReactJS, NextJS],
  },
  {
    id: v4(),
    title: `Back-end Engineering`,
    details: [NodeJS, MongoDB],
  },
  {
    id: v4(),
    title: `Extra Skills`,
    details: [Figma, TypeScript],
  },
];

const juniorInWebEngineeringSkills: SkillsProps[] = [
  {
    id: v4(),
    title: `Basic of Web Engineering`,
    details: [HTML, CSS],
  },
  {
    id: v4(),
    title: `Programming Language`,
    details: [JavaScript],
  },
];

const USP: WeGuideDifferentlyCardProps[] = [
  {
    id: v4(),
    title: `Mentorship`,
    content: `You'll mentored by Industry Experts. From Code Review to 1:1, You'll be in touch them every week.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `mentorship`,
  },
  {
    id: v4(),
    title: `Peer Learning`,
    content: `You learn by practicing and also from your batchmates. Do Pair programming in our Discord community.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `peer learning`,
  },
  {
    id: v4(),
    title: `Weekend Workshop`,
    content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
  {
    id: v4(),
    title: `Doubt Clearing Sessions`,
    content: `Clear all your doubts over weekend and discuss any issue you’re facing.`,
    image: `${SVG_BASE_PATH}/peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
];

const TESTIMONIALS: TestimonialCardProps[] = [
  {
    id: v4(),
    title: `Satish Daraboina`,
    content: `Improved design skills by
    attending in the workshop, I
    leant about Figma from scratch and
    basics for designing mobile
    applications. I learnt how figma works,
    how to create screens and how to connect
    two screens and learn techniques, get
    hands on experience and I apply what I
    learned to the projects.`,
    image: `${WEBP_BASE_PATH}/testimonial-1.webp`,
    imageAltText: `profile image`,
  },
  {
    id: v4(),
    title: `Nikhil Maurya`,
    content: `Boring workshop helps me a lot to
    learn UI designing in a very easy and
    intellectual manner and the most
    important thing is that each and every
    concept is explained easily. in workshop
    they explain very complex things
    easily`,
    image: `${WEBP_BASE_PATH}/testimonial-2.webp`,
    imageAltText: `profile image`,
  },
];

const FOOTER_NAVIGATION: FooterNavigationDataProps[] = [
  {
    id: v4(),
    title: `Our Products`,
    isShow: true,
    urls: [
      {
        id: v4(),
        label: programs.juniorInWebEngineering.label,
        href: routes.microCampLanding(programs.juniorInWebEngineering.slug),
      },
      // {
      //   id: v4(),
      //   label: programs.beFrontendMaster.label,
      //   href: routes.microCampLanding(programs.beFrontendMaster.slug),
      // },
      // {
      //   id: v4(),
      //   label: programs.beBackendMaster.label,
      //   href: routes.microCampLanding(programs.beBackendMaster.slug),
      // },
    ],
  },
  {
    id: v4(),
    title: `Company`,
    isShow: true,
    urls: [
      // { id: v4(), label: `About US`, href: `#` },
      { id: v4(), label: `Contact Us`, href: routes.contactUs },
      // { id: v4(), label: `Refund Policy`, href: `#` },
    ],
  },
  // {
  //   id: v4(),
  //   title: `Resources`,
  //   isShow: false,
  //   urls: [
  //     { id: v4(), label: `Overview`, href: `#` },
  //     { id: v4(), label: `Overview`, href: `#` },
  //     { id: v4(), label: `Overview`, href: `#` },
  //   ],
  // },
  {
    id: v4(),
    title: `Connect With Us`,
    isShow: true,
    urls: [
      {
        id: v4(),
        label: `Discord`,
        href: `https://discord.com/invite/ypkKNsEFqU`,
        target: 'BLANK',
      },
      {
        id: v4(),
        label: `Instagram`,
        href: `https://www.instagram.com/theboringeducation/`,
        target: 'BLANK',
      },
    ],
  },
  // {
  //   id: v4(),
  //   title: `Legal`,
  //   isShow: false,
  //   urls: [
  //     { id: v4(), label: `Overview`, href: `#` },
  //     { id: v4(), label: `Overview`, href: `#` },
  //     { id: v4(), label: `Overview`, href: `#` },
  //   ],
  // },
];

const FRONTEND_MICROCAMP_CURRICULUM: MicroCampFeatureCardContentProps[] = [
  {
    id: v4(),
    title: `8 Weeks`,
    content: `Duration`,
  },
  {
    id: v4(),
    title: `1:1 Mentorship`,
    content: `Weekly Session with Mentors`,
  },
  {
    id: v4(),
    title: `Only Projects`,
    content: `Learn by Building`,
  },
  {
    id: v4(),
    title: `Code Review`,
    content: `Weekly code reviews by mentors`,
  },
  {
    id: v4(),
    title: `Tech Workshops`,
    content: `Workshops on Tech every weekend`,
  },
  {
    id: v4(),
    title: `Be Job Ready`,
    content: `Project & Resume to Job, All in one`,
  },
];

const BACKEND_MICROCAMP_CURRICULUM: MicroCampFeatureCardContentProps[] = [
  {
    id: v4(),
    title: `8 Weeks`,
    content: `Duration`,
  },
  {
    id: v4(),
    title: `1:1 Mentorship`,
    content: `Weekly Session with Mentors`,
  },
  {
    id: v4(),
    title: `Only Projects`,
    content: `Learn by Building`,
  },
  {
    id: v4(),
    title: `Code Review`,
    content: `Weekly code reviews by mentors`,
  },
  {
    id: v4(),
    title: `Tech Workshops`,
    content: `Workshops on Tech every weekend`,
  },
  {
    id: v4(),
    title: `Be Job Ready`,
    content: `Project & Resume to Job, All in one`,
  },
];

const JUNIOR_CAMP_CURRICULUM: MicroCampFeatureCardContentProps[] = [
  {
    id: v4(),
    title: `45 Days`,
    content: `Duration`,
  },
  {
    id: v4(),
    title: `Live Classes`,
    content: `Evening classes with Experts`,
  },
  {
    id: v4(),
    title: `Build Projects`,
    content: `Build projects on HTML, CSS, JS`,
  },
  {
    id: v4(),
    title: `Doubt Sessions`,
    content: `Clear your doubts on Sunday`,
  },
  {
    id: v4(),
    title: `HW Everyday`,
    content: `Practice problems everyday`,
  },
  {
    id: v4(),
    title: `24x7 Support`,
    content: `Ask questions anytime, We’ll answer.`,
  },
];

const JUNIOR_CAMP_CURRICULUM_PRICING: MicroCampFeaturePricingCardProps[] = [
  {
    id: v4(),
    content: `Live Sessions with Experts`,
  },
  {
    id: v4(),
    content: `Sunday Doubt Session`,
  },
  {
    id: v4(),
    content: `Only Project-based learning`,
  },
  {
    id: v4(),
    content: `Extra Skills in Tech Workshops`,
  },
  {
    id: v4(),
    content: `Community based learning`,
  },
];

const WHAT_WE_DO_FOR_YOU_MICROCAMP = [
  {
    id: v4(),
    title: `Live Classes`,
    content: `Attend Evening classes after your work and prepare yourself for the future.`,
    image: `${SVG_BASE_PATH}/live_mock_interview.svg`,
    imageAltText: `Live Classes`,
  },
  {
    id: v4(),
    title: `Sunday Doubt Sessions`,
    content: `Ask any doubt you've while preparing on Sunday. We also have 24x7 Support on our Discord community.`,
    image: `${SVG_BASE_PATH}/linkedin_optimization.svg`,
    imageAltText: `Sunday Doubt Sessions`,
  },
  {
    id: v4(),
    title: `Build Projects with Peers`,
    content: `Don't just learn, Apply the coding skills into real-life projects.`,
    image: `${SVG_BASE_PATH}/live_mock_interview.svg`,
    imageAltText: `Build Projects with Peers`,
  },
  {
    id: v4(),
    title: `Some "Boring" Skills`,
    content: `On Weekend workshops with "The Boring Workshop", You’ll get hands-on experience in Tech topics.`,
    image: `${SVG_BASE_PATH}/some_boring_skills.svg`,
    imageAltText: `Some Boring Skills`,
  },
  // {
  //   id: v4(),
  //   title: `Some "Boring" Skills`,
  //   content: `On Weekend workshops with “The Boring Workshop”, You’ll get hands-on experience in Tech topics.`,
  //   image: `${SVG_BASE_PATH}/some_boring_skills.svg`,
  //   imageAltText: `Some Boring Skills`,
  // },
];

const WE_TAUGHT = [
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/pesto.svg`,
    imageAltText: `pesto`,
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/masai.svg`,
    imageAltText: `masai`,
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/cuemath.svg`,
    imageAltText: `cuemath`,
  },
  {
    id: v4(),
    image: `${SVG_BASE_PATH}/newton.svg`,
    imageAltText: `newton`,
  },
];

const NOT_ANOTHER_TECH_COURSE = [
  {
    id: v4(),
    title: `Context based learning`,
    content: `ChatGPT writes better code than us so we make sure your learnings are relevant.`,
    image: `${SVG_BASE_PATH}/context_learning.svg`,
    imageAltText: `context based learning`,
  },
  {
    id: v4(),
    title: `Arjuna Needed Drona.`,
    content: `You can learn anything from Internet but you can’t do it in shortest way possible.`,
    image: `${SVG_BASE_PATH}/arjun_needed_drona.svg`,
    imageAltText: `arjun needed drona`,
  },
  {
    id: v4(),
    title: `Minimal Learning`,
    content: `We make sure you start small, on each topic, every week so you don’t feel to much.`,
    image: `${SVG_BASE_PATH}/minimal_learning.svg`,
    imageAltText: `minimal learning`,
  },
];

const TALK_ABOUT_OPPORTUNITIES: OpportunityCardProps[] = [
  {
    id: v4(),
    heading: `Avg. Salary`,
    title: `8-20 LPA`,
    content: `Source: Glassdoor`,
  },
  {
    id: v4(),
    heading: `Jobs In Market`,
    title: `55000+`,
    content: `Source: Glassdoor`,
  },
];

export {
  FOOTER_NAVIGATION,
  PROGRAMS,
  juniorInWebEngineeringSkills,
  landingPageSkills,
  TESTIMONIALS,
  TOP_NAVIGATION,
  USP,
  FRONTEND_MICROCAMP_CURRICULUM,
  WHAT_WE_DO_FOR_YOU_MICROCAMP,
  BACKEND_MICROCAMP_CURRICULUM,
  JUNIOR_CAMP_CURRICULUM,
  WE_TAUGHT,
  NOT_ANOTHER_TECH_COURSE,
  TALK_ABOUT_OPPORTUNITIES,
  JUNIOR_CAMP_CURRICULUM_PRICING,
};
