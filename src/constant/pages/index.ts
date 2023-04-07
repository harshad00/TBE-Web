const TOP_NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Micro-Camps', href: '/micro-camps' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'Contact Us', href: '/contact' },
];

const PROGRAMS = [
  {
    image: 'boring_workshop.svg',
    imageAltText: '',
    title: 'The Boring Micro-Camp',
    content:
      '6 Weeks Bootcamp with hands-on project-building and placement assistance.',
    buttonText: 'Registration open',
    href: '/micro-camps',
  },
  {
    image: 'boring_workshop.svg',
    imageAltText: 'workshop',
    title: 'The Boring Workshop',
    content:
      'Learn to build In-Demand Tech & Design skills over a weekend, that stays for life!',
    buttonText: 'Registration open',
    href: '/workshops',
  },
];

const SKILLS = [
  {
    title: `FrontEnd Engineering`,
    details: [
      {
        name: `ReactJS`,
        image: `reactjs.svg`,
        imageAltText: `ReactJS`,
      },
      {
        name: `NextJs`,
        image: `nextjs.svg`,
        imageAltText: `NextJS`,
      },
    ],
  },
  {
    title: `BackEnd Engineering`,
    details: [
      {
        name: `NodeJS`,
        image: `nodejs.svg`,
        imageAltText: `NodeJS`,
      },
      {
        name: `MongoDB`,
        image: `mongodb.svg`,
        imageAltText: `MongoDB`,
      },
    ],
  },
  {
    title: `Skills to UpSkill`,
    details: [
      {
        name: `Figma`,
        image: `figma.svg`,
        imageAltText: `Figma`,
      },
      {
        name: `TypeScript`,
        image: `typescript.svg`,
        imageAltText: `Typescript`,
      },
    ],
  },
];

const USP = [
  {
    title: `Mentorship`,
    content: `You'll mentored by Industry Experts. From Code Review to 1:1, You'll be in touch them every week.`,
    image: `mentorship.svg`,
    imageAltText: `mentorship`,
  },
  {
    title: `Peer Learning`,
    content: `You learn by practicing and also from your batchmates. Do Pair programming in our Discord community.`,
    image: `peer_learning.svg`,
    imageAltText: `peer learning`,
  },
  {
    title: `Weekend Workshop`,
    content: `Learn skill over weekend that spreads your horizon in Tech Opportunities.`,
    image: `mentorship.svg`,
    imageAltText: `weekend workshop`,
  },
  {
    title: `Doubt Clearing Sessions`,
    content: `Clear all your doubts over weekend and discuss any issue you’re facing.`,
    image: `peer_learning.svg`,
    imageAltText: `weekend workshop`,
  },
];

const TESTIMONIALS = [
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
  {
    title: `John Doe`,
    content: `Boring workshop helps me a lot to learn UI designing in a very easy and intellectual manner and the most important thing is that each and every concept is explained easily. in workshop they explain very complex things easily.`,
    image: `profile_image.svg`,
    imageAltText: `profile image`,
  },
];

const FOOTER_NAVIGATION = [
  {
    title: `Product`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Company`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Resources`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Social`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
  {
    title: `Legal`,
    url_content: [
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
      {
        link_text: `Overview`,
        href: `#`,
      },
    ],
  },
];

export {
  FOOTER_NAVIGATION,
  PROGRAMS,
  SKILLS,
  TESTIMONIALS,
  TOP_NAVIGATION,
  USP,
};
