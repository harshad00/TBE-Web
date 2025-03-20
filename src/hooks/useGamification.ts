import { useEffect } from 'react';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';

const useGamification = (course: any, isChapterCompleted: boolean, isCourseCompleted: boolean) => {
  const { makeRequest } = useApi(`shiksha/${course}`);
  const { user } = useUser();

  useEffect(() => {
    const userId = user?.id;
    if (!course.isEnrolled || !userId) return;

    console.log(`API URL: ${routes.api.gamification}?userId=${userId}`);

    let actionType = 'ENROLL';
    if (isCourseCompleted) {
      actionType = 'COMPLETE_COURSE';
    } else if (isChapterCompleted) {
      actionType = 'COMPLETE_CHAPTER';
    }

    (async () => {
      try {
        await makeRequest({
          method: 'POST',
          url: `${routes.api.gamification}?userId=${userId}`,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ actionType }),
        });
      } catch (error) {
        console.error('Error updating gamification progress:', error);
      }
    })();
  }, [course.isEnrolled, user?.id, isChapterCompleted, isCourseCompleted]);
};

export default useGamification;
