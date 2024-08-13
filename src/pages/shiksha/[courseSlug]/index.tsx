import {
  Accordion,
  AccordionLinkItem,
  FlexContainer,
  MDXRenderer,
  Section,
  Text,
} from '@/components';
import CourseHeroContainer from '@/components/containers/Page/Course/CourseHeroContainer';
import { envConfig } from '@/constant';
import { CourseChapterModel } from '@/interfaces';
import { useState } from 'react';

const CoursePage = ({ course, courseSlug }: any) => {
  const [courseMeta, setCourseMeta] = useState<string>(course.meta || '');
  const handleChapterClick = (chapterMeta: string) => {
    setCourseMeta(chapterMeta);
  };

  return (
    <div className='p-2'>
      <Section className='md:p-2 p-2'>
        <CourseHeroContainer name={course.title} />
      </Section>
      <Section className='md:p-2 p-2'>
        <FlexContainer className='w-full gap-4' itemCenter={false}>
          <FlexContainer
            className='border md:w-3/12 w-full p-2 gap-1 rounded self-baseline'
            itemCenter={false}
            direction='col'
          >
            <Text level='h5' className='heading-5'>
              Sections
            </Text>
            <FlexContainer justifyCenter={false} className='gap-px'>
              {course.sections.map(
                (section: {
                  _id: string;
                  title: string;
                  chapters: Partial<CourseChapterModel>[];
                }) => {
                  return (
                    <Accordion title={section.title} key={section._id}>
                      {section.chapters.map((chapter) => {
                        return (
                          <AccordionLinkItem
                            key={chapter._id?.toString()}
                            label={chapter.name || ''}
                            href={`${courseSlug}?courseId=${course._id}&sectionId=${section._id}&chapterId=${chapter._id}`}
                            onClick={() => {
                              handleChapterClick(chapter.content || '');
                            }}
                          />
                        );
                      })}
                    </Accordion>
                  );
                }
              )}
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
    </div>
  );
};

export const getServerSideProps = async ({
  query,
}: {
  query: { courseId: string; courseSlug: string };
}) => {
  try {
    if (!query.courseId) return { notFound: true };
    const response = await fetch(
      `${envConfig.BASE_API_URL}/shiksha/${query.courseId}`
    ).then((res) => res.json());
    const { status, data } = response;

    if (!status) return { notFound: true };

    return { props: { course: data, courseSlug: query.courseSlug } };
  } catch (error) {
    return { notFound: true };
  }
};

export default CoursePage;
