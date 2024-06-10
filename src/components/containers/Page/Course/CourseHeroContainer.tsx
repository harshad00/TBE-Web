import {
  LinkButton,
  FlexContainer,
  Text,
  PageHeroMetaContainer,
} from '@/components';
import { routes } from '@/constant';
import { CourseHeroContainerProps } from '@/interfaces';

const CourseHeroContainer = ({ name }: CourseHeroContainerProps) => {
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
          <PageHeroMetaContainer subtitle="YOU'RE LEARING" title={name} />
        </FlexContainer>

        <LinkButton
          href={routes.shikshaExplore}
          buttonProps={{
            variant: 'GHOST',
            text: 'Back to Courses',
          }}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default CourseHeroContainer;
