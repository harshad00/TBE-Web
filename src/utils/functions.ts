import { envConfig } from '@/constant';
import { getUserByEmailFromDB } from '@/database/query/user';
import {
  BaseShikshaCourseResponseProps,
  ProjectDocumentModel,
  ProjectPickedPageProps,
  User,
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

const getSelectedCourseChapterMeta = (
  course: BaseShikshaCourseResponseProps,
  chapterId: string
) => {
  if (!course.chapters) return null;

  const selectedChapter = course?.chapters.find(
    (chapter) => chapter._id.toString() === chapterId
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

const isAdmin = (adminSecret: string): boolean => {
  return envConfig.ADMIN_SECRET == adminSecret;
};

const isUserAuthenticated = async (req: any): Promise<User | null> => {
  const cookie = req.headers.cookie || req.headers.get('cookie');

  try {
    const response = await fetch(
      `${envConfig.BASE_AUTH_API_URL}/auth/session`,
      {
        headers: {
          'Content-Type': 'application/json',
          Cookie: cookie || '',
        },
      }
    );

    const session = await response.json();
    return session && session.user ? session.user : null;
  } catch (error) {
    console.error('Error fetching session:', error);
    return null;
  }
};

const isProgramActive = (liveOn: Date) => new Date(liveOn) <= new Date();

const mapCourseResponseToCard = (
  coursesData: BaseShikshaCourseResponseProps[]
) => {
  return coursesData?.map(
    ({
      _id,
      coverImageURL,
      name,
      description,
      liveOn = new Date(),
      slug,
      isEnrolled,
    }) => {
      const isActive = isProgramActive(liveOn);

      let ctaText = 'Coming Soon';

      if (isEnrolled) {
        ctaText = 'Continue Learning';
      } else if (isActive) {
        ctaText = 'Start The Project';
      }

      return {
        id: _id,
        image: coverImageURL,
        title: name,
        imageAltText: name,
        content: description,
        href: `/shiksha/${slug}/?courseId=${_id}`,
        isEnrolled,
        active: isActive,
        ctaText,
      };
    }
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
  isUserAuthenticated,
  getSelectedCourseChapterMeta,
};
