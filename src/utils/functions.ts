import { admins } from '@/constant';
import { getUserByEmailFromDB } from '@/database/query/user';
import {
  CourseModel,
  ProjectDocumentModel,
  ProjectPickedPageProps,
} from '@/interfaces';

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
};

const formatTime = (time: number) => time.toString().padStart(2, '0');

// Get % of Discount on Program
const getDiscountPercentage = (basePrice: number, sellingPrice: number) =>
  Math.floor(((basePrice - sellingPrice) / basePrice) * 100);

// Store data in Local Storage
const setLocalStorageItem = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error storing data in local storage:', error);
  }
};

// Get data from Local Storage
const getLocalStorageItem = (key: string): any | null => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error fetching data from local storage:', error);
    return;
  }
};

// Remove Data from Local Stoarge
const removeLocalStorageItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from local storage:', error);
  }
};

const mapProjectResponseToCard = (projectsData: ProjectDocumentModel[]) => {
  return projectsData?.map(
    ({ _id, coverImageURL, name, description, slug, isActive }) => ({
      id: _id,
      image: coverImageURL,
      imageAltText: name,
      title: name,
      content: description,
      href: `/projects/${slug}?projectId=${_id}`,
      active: isActive,
      ctaText: isActive ? 'Start The Project' : 'Coming Soon',
    })
  );
};

const getSelectedProjectChapterMeta = (
  project: ProjectPickedPageProps,
  sectionId: string,
  chapterId: string
) => {
  const selectedSection = project.sections.find(
    (section) => section.sectionId === sectionId
  );

  const selectedChapter = selectedSection?.chapters.find(
    (chapter) => chapter.chapterId === chapterId
  );

  return selectedChapter?.content ?? '';
};

const checkTheLoggedInUser = async (email: string): Promise<string | null> => {
  try {
    const { data, error } = await getUserByEmailFromDB(email);
    if (error) return null;
    return data._id;
  } catch (error) {
    return null;
  }
};

const isAdmin = (email: string): boolean => {
  return admins.includes(email);
};

const mapCourseResponseToCard = (coursesData: CourseModel[]) => {
  return coursesData?.map(
    ({ _id, thumbnailLink, title, description, liveOn, slug }) => ({
      id: _id,
      image: thumbnailLink,
      imageAltText: title,
      title,
      content: description,
      href: `/shiksha/${slug}/?courseId=${_id}`,
      active:
        new Date(liveOn).getMilliseconds() <=
        new Date(Date.now()).getMilliseconds(),
      ctaText:
        new Date(liveOn).getMilliseconds() <=
        new Date(Date.now()).getMilliseconds()
          ? 'Start The Project'
          : 'Coming Soon',
    })
  );
};

export {
  formatDate,
  formatTime,
  getDiscountPercentage,
  setLocalStorageItem,
  getLocalStorageItem,
  removeLocalStorageItem,
  mapProjectResponseToCard,
  getSelectedProjectChapterMeta,
  checkTheLoggedInUser,
  isAdmin,
  mapCourseResponseToCard,
};
