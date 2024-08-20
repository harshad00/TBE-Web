import React, { useState } from 'react';
import {
  Accordion,
  AccordionLinkItem,
  CourseHeroContainer,
  FlexContainer,
  Link,
  MDXRenderer,
  Section,
  SEO,
  Text,
} from '@/components';
import { CoursePageProps } from '@/interfaces';
import { getCoursePageProps } from '@/utils';
import { useUser } from '@/hooks';

const CoursePage = ({
  course,
  meta,
  slug,
  seoMeta,
  currentChapterId,
}: CoursePageProps) => {
  const [courseMeta, setCourseMeta] = useState<string>(meta || '');

  const handleChapterClick = (chapterMeta: string) => {
    setCourseMeta(chapterMeta);
  };

  if (!course) return null;

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='md:p-2 p-2'>
        <CourseHeroContainer
          name={course.name ?? ''}
          isEnrolled={course.isEnrolled}
        />
      </Section>
      <Section className='md:p-2 p-2'>
        <FlexContainer className='w-full gap-4' itemCenter={false}>
          <FlexContainer
            className='border md:w-3/12 w-full p-2 gap-1 rounded self-baseline'
            itemCenter={false}
            direction='col'
          >
            <Text level='h5' className='heading-5'>
              Chapters
            </Text>
            <FlexContainer justifyCenter={false} className='gap-px'>
              {course.chapters?.map(({ _id, name, content }) => {
                const chapterId = _id?.toString();
                const additionalClasses =
                  currentChapterId === chapterId
                    ? 'text-primary bg-gray-200'
                    : '';

                return (
                  <Link
                    href={`${slug}?courseId=${course._id}&chapterId=${chapterId}`}
                    key={chapterId?.toString()}
                    className={`w-full p-2 rounded text-left pre-title text-greyDark hover:bg-gray-200 hover:text-primary ${additionalClasses}`}
                  >
                    <div
                      onClick={() => {
                        handleChapterClick(content);
                      }}
                    >
                      {name}
                    </div>
                  </Link>
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
            <MDXRenderer mdxSource={courseMeta} />
          </FlexContainer>
        </FlexContainer>
      </Section>
    </React.Fragment>
  );
};

export const getServerSideProps = getCoursePageProps;

export default CoursePage;
