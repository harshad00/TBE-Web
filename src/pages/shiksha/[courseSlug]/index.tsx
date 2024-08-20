import React, { useState } from 'react';
import {
  Accordion,
  AccordionLinkItem,
  CourseHeroContainer,
  FlexContainer,
  MDXRenderer,
  Section,
  SEO,
  Text,
} from '@/components';
import { CoursePageProps } from '@/interfaces';
import { getCoursePageProps } from '@/utils';

const CoursePage = ({ course, meta, courseSlug, seoMeta }: CoursePageProps) => {
  const [courseMeta, setCourseMeta] = useState<string>(meta || '');
  const handleChapterClick = (chapterMeta: string) => {
    setCourseMeta(chapterMeta);
  };

  if (!course) return null;

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='md:p-2 p-2'>
        <CourseHeroContainer name={course.name ?? ''} />
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
              <Accordion title='Chapters'>
                {course.chapters?.map(({ _id, name, content }) => {
                  return (
                    <AccordionLinkItem
                      key={_id?.toString()}
                      label={name || ''}
                      href={`${courseSlug}?courseId=${course._id}&chapterId=${_id}`}
                      onClick={() => {
                        handleChapterClick(content || '');
                      }}
                    />
                  );
                })}
              </Accordion>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            className='border md:w-8/12 w-full p-2 rounded'
            justifyCenter={false}
            itemCenter={false}
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
