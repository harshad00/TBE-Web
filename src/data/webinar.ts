import { v4 } from 'uuid';

const IMAGE_BASE_PATH = '/images';
const SVG_BASE_PATH = '/svg';

const webinar = {
  Header: {
    id: v4(),
    image: `${IMAGE_BASE_PATH}/coding_bg.png`,
    imageAltText: `is programming for you`,
    heading: `Free Webinar`,
    mainHeading: `Is Programming for you?`,
    content: `Understand why everybody wants to be in Tech and should you learn Tech or not.`,
    cardContent: {
      id: v4(),
      image: `${IMAGE_BASE_PATH}/sachin_shukla.png`,
      imageAltText: `sachin shukla`,
      name: `Sachin Kr. Shukla`,
      designation: `Co-Founder, The Boring Education`,
      date: `29 Apr, Saturday`,
      dateIcon: `${SVG_BASE_PATH}/calendar.svg`,
      dateIconAltText: `Calendar`,
      time: `5 PM`,
      timeIcon: `${SVG_BASE_PATH}/clock.svg`,
      timeIconAltText: `Clock`,
    },
    countdown: {
      id: v4(),
      heading: `Starts In`,
      date: ``,
    },
  },
  Register: {
    id: v4(),
    heading: `Register Now`,
    ctaText: `Join Webinar`,
    infoText: `25 Slots only, Few seats left.`,
  },
  AboutWebinar: {
    id: v4(),
    heading: `About Webinar`,
    schedule: {
      id: v4(),
      date: `29 Apr, Saturday`,
      dateIcon: `${SVG_BASE_PATH}/calendar.svg`,
      dateIconAltText: `Calendar`,
      time: `5 PM`,
      timeIcon: `${SVG_BASE_PATH}/clock.svg`,
      timeIconAltText: `Clock`,
    },
    aboutText: [
      {
        id: v4(),
        p1: `Programming is becoming everyone's need these days. You want to build a software, You need programming. You want to get a job, you need programming.`,
      },
      {
        id: v4(),
        p1: `First thing as a learner you do, is look for an online programs. There are so many programs available in the market.`,
      },
      {
        id: v4(),
        p1: `With lot of options in market, You will be confused to choose an option, and with that you'll choose an expensive program that'll cost you lakhs.`,
      },
      {
        id: v4(),
        p1: `Everybody has a spending capacity and with a “Job in 6 Months” scheme, you'll be prompted to buy a program.`,
      },
      {
        id: v4(),
        p1: `Should you buy or should you not? We'll discuss it in our programs.`,
      },
    ],
  },
  whatWillYouLearn: {
    id: v4(),
    heading: `What will you learn`,
    content: [
      {
        id: v4(),
        p1: `1. You'll learn with your background, will programming be helpful for you?`,
      },
      {
        id: v4(),
        p1: `2. Decide if you should be okay buying expensive bootcamps`,
      },
      {
        id: v4(),
        p1: `3. Understand what it takes to break into Tech`,
      },
    ],
  },
  instructorCard: {
    id: v4(),
    heading: `Meet your instructor`,
    image: ``,
    imageAltText: ``,
    name: `Sachin Kr. Shukla`,
    socialIcon: ``,
    designation: `Co-Founder, The Boring Education`,
    instructorDetail: [
      {
        id: v4(),
        p1: `1. Built Ed-tech startups since college.`,
      },
      {
        id: v4(),
        p1: `2. Worked with Newton School, Masai, Pesto & CueMath.`,
      },
      {
        id: v4(),
        p1: `3. Senior Software Engineer @PW.`,
      },
    ],
  },
};

export default webinar;
