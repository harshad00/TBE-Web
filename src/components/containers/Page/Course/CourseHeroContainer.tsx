import {
  FlexContainer,
  Text,
  PageHeroMetaContainer,
  LoginWithGoogleButton,
  Button,
} from '@/components';
import { useUser } from '@/hooks';
import { CourseHeroContainerProps } from '@/interfaces';

const CourseHeroContainer = ({
  name,
  isEnrolled,
}: CourseHeroContainerProps) => {
  const { user, isAuth } = useUser();

  const enrollCourse = () => {
    console.log('Enroll Course');
  };

  let headerActionButton;

  if (!isAuth) {
    headerActionButton = (
      <FlexContainer>
        <LoginWithGoogleButton text='Login to Get Started' />
      </FlexContainer>
    );
  } else if (isAuth && !isEnrolled) {
    headerActionButton = (
      <FlexContainer>
        <Button variant='PRIMARY' text='Enroll to Course' />
      </FlexContainer>
    );
  } else if (isAuth && isEnrolled) {
    headerActionButton = (
      <FlexContainer>
        <Button variant='PRIMARY' text='Ask Questions' onClick={enrollCourse} />
      </FlexContainer>
    );
  }

  return (
    <FlexContainer>
      <FlexContainer className='border md:w-4/5 gap-4 w-full p-2 justify-between rounded'>
        <FlexContainer
          itemCenter={false}
          direction='col'
          className='items-start gap-1'
        >
          <Text level='h4' className='heading-4'>
            Hello {user?.name ?? 'there'}!
          </Text>
          <Text level='p' className='paragraph text-greyDark'>
            Let's Learn Something Today.
          </Text>
        </FlexContainer>
        <FlexContainer
          justifyCenter={false}
          itemCenter={false}
          className='justify-start items-start gap-3'
        >
          <PageHeroMetaContainer subtitle="YOU'RE LEARING" title={name} />
        </FlexContainer>

        {headerActionButton}
      </FlexContainer>
    </FlexContainer>
  );
};

export default CourseHeroContainer;
