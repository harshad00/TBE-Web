import {
  LinkButton,
  FlexContainer,
  PageHeroMetaContainer,
  Text,
} from '@/components';
import { routes } from '@/constant';
import { ProjectHeroContainerProps } from '@/interfaces';

const ProjectHeroContainer = ({
  name,
  roadmap,
  difficultyLevel,
}: ProjectHeroContainerProps) => {
  return (
    <FlexContainer>
      <FlexContainer className='border md:w-4/5 gap-4 w-full p-2 justify-between rounded'>
        <FlexContainer
          itemCenter={false}
          direction='col'
          className='items-start gap-1'
        >
          <Text level='h4' className='heading-4'>
            Hello there!
          </Text>
          <Text level='p' className='paragraph text-greyDark'>
            Let's learn something today.
          </Text>
        </FlexContainer>
        <FlexContainer
          justifyCenter={false}
          itemCenter={false}
          className='justify-start items-start gap-3'
        >
          <PageHeroMetaContainer subtitle="YOU'RE BUILDING" title={name} />
          <PageHeroMetaContainer subtitle='ROADMAP' title={roadmap} />
          <PageHeroMetaContainer
            subtitle='DIFFICULTY LEVEL'
            title={difficultyLevel}
          />
        </FlexContainer>
        <LinkButton
          href={routes.whatsappCommunity}
          target='BLANK'
          buttonProps={{
            variant: 'OUTLINE',
            text: 'Ask Question',
            className:
              'button bg-secondary border-0  px-2 py-1 !text-black hover:scale-100 hover:transition-none',
          }}
        />

        <LinkButton
          href={routes.projectsExplore}
          buttonProps={{
            variant: 'GHOST',
            text: 'Back to Projects',
          }}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default ProjectHeroContainer;
