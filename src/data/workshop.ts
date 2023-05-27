import { WorkshopDataProps } from '@/interfaces';

export const IMAGE_BASE_PATH = '/images';
export const SVG_BASE_PATH = '/svg';

const workshops: WorkshopDataProps[] = [
  {
    meta: {
      slug: '/2-hour-design',
      title: '2 Hour Design',
      image: `${IMAGE_BASE_PATH}/coding_bg.png`,
      imageAltText: `is programming for you`,
      description:
        'Understand why everybody wants to be in Tech and should you learn Tech or not.',
      date: '2023-05-29', // YYYY-MM-DD
      time: '5 PM',
      instructor: {
        name: `Sachin Kr. Shukla`,
        designation: `Co-Founder, The Boring Education`,
        image: `${IMAGE_BASE_PATH}/sachin_shukla.png`,
        imageAltText: 'sachin shukla',
        about: [
          '1. Built Ed-tech startups since college.',
          '2. Worked with Newton School, Masai, Pesto & CueMath.',
          '3. Senior Software Engineer @PW.',
        ],
      },
      link: '#',
    },
    aboutWorkshop: {
      descriptions: [
        "Programming is becoming everyone's need these days. You want to build a software, You need programming. You want to get a job, you need programming.",
        'First thing as a learner you do, is look for an online programs. There are so many programs available in the market.',
        "With lot of options in market, You will be confused to choose an option, and with that you'll choose an expensive program that'll cost you lakhs.",
        "Everybody has a spending capacity and with a “Job in 6 Months” scheme, you'll be prompted to buy a program.",
        "Should you buy or should you not? We'll discuss it in our programs.",
      ],
      whatWillYouLearn: [
        "1. You'll learn with your background, will programming be helpful for you?",
        '2. Decide if you should be okay buying expensive bootcamps',
        '3. Understand what it takes to break into Tech',
      ],
    },
  },
  {
    meta: {
      slug: '/the-next-wave',
      title: 'The Next Wave',
      image: `${IMAGE_BASE_PATH}/coding_bg.png`,
      imageAltText: `is programming for you`,
      description:
        'Understand why everybody wants to be in Tech and should you learn Tech or not.',
      date: '2023-05-29', // YYYY-MM-DD
      time: '5 PM',
      instructor: {
        name: `Sachin Kr. Shukla`,
        designation: `Co-Founder, The Boring Education`,
        image: `${IMAGE_BASE_PATH}/sachin_shukla.png`,
        imageAltText: 'sachin shukla',
        about: [
          '1. Built Ed-tech startups since college.',
          '2. Worked with Newton School, Masai, Pesto & CueMath.',
          '3. Senior Software Engineer @PW.',
        ],
      },
      link: '#',
    },
    aboutWorkshop: {
      descriptions: [
        "Programming is becoming everyone's need these days. You want to build a software, You need programming. You want to get a job, you need programming.",
        'First thing as a learner you do, is look for an online programs. There are so many programs available in the market.',
        "With lot of options in market, You will be confused to choose an option, and with that you'll choose an expensive program that'll cost you lakhs.",
        "Everybody has a spending capacity and with a “Job in 6 Months” scheme, you'll be prompted to buy a program.",
        "Should you buy or should you not? We'll discuss it in our programs.",
      ],
      whatWillYouLearn: [
        "1. You'll learn with your background, will programming be helpful for you?",
        '2. Decide if you should be okay buying expensive bootcamps',
        '3. Understand what it takes to break into Tech',
      ],
    },
  },
];

export default workshops;
