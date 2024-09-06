import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  ChapterLink,
  CourseHeroContainer,
  FlexContainer,
  MDXRenderer,
  Section,
  SEO,
  Text,
} from '@/components';
import { CoursePageProps } from '@/interfaces';
import { getCoursePageProps } from '@/utils';
import { useApi, useMediaQuery, useUser } from '@/hooks';
import { routes, SCREEN_BREAKPOINTS } from '@/constant';

const CoursePage = ({
  course,
  meta,
  slug,
  seoMeta,
  currentChapterId,
}: CoursePageProps) => {
  const [courseMeta, setCourseMeta] = useState<string>(meta || '');
  const [chapters, setChapters] = useState(course.chapters || []);
  const [isChapterCompleted, setIsChapterCompleted] = useState(
    chapters.find((chapter) => chapter._id.toString() === currentChapterId)
      ?.isCompleted
  );
  const [isLoading, setIsLoading] = useState(false);
  const isSmallScreen = useMediaQuery(SCREEN_BREAKPOINTS.SM);

  useEffect(() => {
    const currentChapter = chapters.find(
      (chapter) => chapter._id.toString() === currentChapterId
    );
    setIsChapterCompleted(currentChapter?.isCompleted);
  }, [currentChapterId, chapters]);

  const { makeRequest } = useApi(`shiksha/${course}`);
  const { user } = useUser();

  if (!course) return null;

  const handleChapterClick = (chapterMeta: string) => {
    setCourseMeta(chapterMeta);
  };

  const toggleCompletion = async () => {
    setIsLoading(true);
    try {
      const newCompletionStatus = !isChapterCompleted;

      await makeRequest({
        method: 'PATCH',
        url: routes.api.markCourseChapterAsCompleted,
        body: {
          userId: user?.id,
          courseId: course._id,
          chapterId: currentChapterId,
          isCompleted: newCompletionStatus,
        },
      });

      setChapters((prevChapters) =>
        prevChapters.map((chapter) =>
          chapter._id.toString() === currentChapterId
            ? { ...chapter, isCompleted: newCompletionStatus }
            : chapter
        )
      );

      setIsChapterCompleted(newCompletionStatus);
    } catch (error) {
      console.error('Error toggling chapter completion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const alertContainer = isSmallScreen && (
    <Alert
      message='This Course will require you to write Code. Better open it on Laptop'
      type='INFO'
      className='my-2'
    />
  );

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='md:p-2 p-2'>
        {alertContainer}
        <CourseHeroContainer
          id={course._id ?? ''}
          name={course.name ?? ''}
          isEnrolled={course.isEnrolled}
        />
      </Section>
      <Section className='md:p-2 p-2'>
        <FlexContainer className='w-full gap-4' itemCenter={false}>
          <FlexContainer
            className='border md:w-3/12 w-full p-2 gap-1 rounded self-baseline max-h-[80vh] overflow-y-auto md:sticky top-4 bg-white'
            itemCenter={false}
          >
            <Text level='h5' className='heading-5'>
              Chapters
            </Text>
            <FlexContainer justifyCenter={false} className='gap-px'>
              {chapters?.map(({ _id, name, content, isCompleted }) => {
                const chapterId = _id?.toString();

                return (
                  <ChapterLink
                    key={chapterId}
                    href={`${slug}?courseId=${course._id}&chapterId=${chapterId}`}
                    chapterId={chapterId}
                    name={name}
                    content={content}
                    isCompleted={isCompleted}
                    currentChapterId={currentChapterId}
                    handleChapterClick={handleChapterClick}
                  />
                );
              })}
            </FlexContainer>
          </FlexContainer>

          <FlexContainer
            className='border md:w-8/12 w-full p-2 rounded'
            justifyCenter={false}
            itemCenter={false}
            disabled={!course.isEnrolled}
          >
            <MDXRenderer
              mdxSource={courseMeta}
              actions={[
                currentChapterId && (
                  <Button
                    key='enroll'
                    variant={
                      isChapterCompleted
                        ? 'SUCCESS'
                        : isLoading
                        ? 'SECONDARY'
                        : 'PRIMARY'
                    }
                    text={
                      isLoading
                        ? 'Marking...'
                        : isChapterCompleted
                        ? 'Completed'
                        : 'Mark As Completed'
                    }
                    className='w-fit'
                    onClick={toggleCompletion}
                    isLoading={isLoading}
                  />
                ),
              ]}
            />
          </FlexContainer>
        </FlexContainer>
      </Section>
    </React.Fragment>
  );
};

export const getServerSideProps = getCoursePageProps;

export default CoursePage;
