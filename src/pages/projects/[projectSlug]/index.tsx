import React, { useState } from 'react';
import {
  Accordion,
  AccordionLinkItem,
  FlexContainer,
  MDXRenderer,
  ProjectHeroContainer,
  SEO,
  Section,
  Text,
} from '@/components';
import { ProjectPageProps } from '@/interfaces';
import { getProjectPageProps, getSelectedProjectChapterMeta } from '@/utils';

const Home = ({ project, meta, seoMeta, slug }: ProjectPageProps) => {
  const [projectMeta, setProjectMeta] = useState<string>(meta);

  const handleChapterClick = ({ sectionId, chapterId }: any) => {
    const selectedChapter = getSelectedProjectChapterMeta(
      project,
      sectionId,
      chapterId
    );

    setProjectMeta(selectedChapter);
  };

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='md:p-2 p-2'>
        <ProjectHeroContainer
          name={project.name}
          roadmap={project.roadmap}
          difficultyLevel={project.difficultyLevel}
        />
      </Section>
      <Section className='md:p-2 p-2'>
        <FlexContainer>
          <FlexContainer className='w-full gap-4' itemCenter={false}>
            <FlexContainer
              className='border w-3/12 p-2 gap-1 rounded self-baseline'
              itemCenter={false}
              direction='col'
            >
              <Text level='h5' className='heading-5'>
                Sections
              </Text>
              <FlexContainer justifyCenter={false} className='gap-px'>
                {project.sections.map(
                  ({ sectionId, sectionName, chapters }) => {
                    return (
                      <Accordion title={sectionName} key={sectionId}>
                        {chapters.map(({ chapterId, chapterName }) => {
                          return (
                            <AccordionLinkItem
                              key={chapterId}
                              label={chapterName}
                              href={`${slug}?projectId=${project._id}&sectionId=${sectionId}&chapterId=${chapterId}`}
                              onClick={() =>
                                handleChapterClick({ sectionId, chapterId })
                              }
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
              className='border w-8/12 p-2 rounded'
              justifyCenter={false}
              itemCenter={false}
            >
              <MDXRenderer mdxSource={projectMeta} />
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Section>
    </React.Fragment>
  );
};

export const getServerSideProps = getProjectPageProps;

export default Home;
