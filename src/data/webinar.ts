import {
  WebinarAboutProps,
  WebinarDataProps,
  WebinarHeaderProps,
  WebinarInstructorCardProps,
  WebinarMetaDataProps,
} from '@/interfaces';
import { v4 } from 'uuid';

const IMAGE_BASE_PATH = '/images';
const SVG_BASE_PATH = '/svg';

const webinar: WebinarDataProps = {
  meta: {
    title: 'Is Programming for you?',
    description: `Understand why everybody wants to be in Tech and should you learn Tech or not.`,
    date: `2023-05-10`,
    time: `5 PM`,
  },
  header: {
    image: `${IMAGE_BASE_PATH}/coding_bg.png`,
    imageAltText: `is programming for you`,
    pillText: `Free Webinar`,
    mainHeading: `Is Programming for you?`,
    content: `Understand why everybody wants to be in Tech and should you learn Tech or not.`,
    cardContent: {
      image: `${IMAGE_BASE_PATH}/sachin_shukla.png`,
      imageAltText: `sachin shukla`,
      name: `Sachin Kr. Shukla`,
      designation: `Co-Founder, The Boring Education`,
      date: `2023-05-10`,
      dateIcon: `${SVG_BASE_PATH}/calendar.svg`,
      dateIconAltText: `Calendar`,
      time: `5 PM`,
      timeIcon: `${SVG_BASE_PATH}/clock.svg`,
      timeIconAltText: `Clock`,
    },
    countdownTime: ['03 d', '02 h', '01 m'],
  },
  aboutWebinar: {
    heading: `About Webinar`,
    schedule: {
      id: v4(),
      date: `2023-05-10`,
      dateIcon: `${SVG_BASE_PATH}/calendar.svg`,
      dateIconAltText: `Calendar`,
      time: `5 PM`,
      timeIcon: `${SVG_BASE_PATH}/clock.svg`,
      timeIconAltText: `Clock`,
    },
    aboutText: [
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
  instructor: {
    heading: `Meet your instructor`,
    image: `${IMAGE_BASE_PATH}/sachin_shukla.png`,
    imageAltText: `sachin shukla`,
    name: `Sachin Kr. Shukla`,
    designation: `Co-Founder, The Boring Education`,
    about: [
      '1. Built Ed-tech startups since college.',
      '2. Worked with Newton School, Masai, Pesto & CueMath.',
      '3. Senior Software Engineer @PW.',
    ],
  },
};

export default webinar;
