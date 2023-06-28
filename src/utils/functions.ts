import {
  juniorInWebEngineeringSkills,
  landingPageSkills,
  programs,
} from '@/constant';
import workshops from '@/data/workshop';
import { PageSlug } from '@/interfaces';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
};

const formatTime = (time: number) => time.toString().padStart(2, '0');

// Get Workshop data
const getWorkshopData = (slug: PageSlug) =>
  workshops.find((workshop) => workshop.meta.slug === slug);

// Skills
const getSkillsBySlug = (slug: PageSlug) => {
  const skillsBySlug = {
    '/': landingPageSkills,
    [programs.juniorInWebEngineering.slug]: juniorInWebEngineeringSkills,
  };

  return skillsBySlug[slug];
};

export { formatDate, formatTime, getWorkshopData, getSkillsBySlug };
