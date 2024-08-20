import {
  LinkButton,
  FlexContainer,
  Text,
  PageHeroMetaContainer,
  LoginWithGoogleButton,
  Button,
} from '@/components';
import { routes } from '@/constant';
import { useUser } from '@/hooks';
import { CourseHeroContainerProps } from '@/interfaces';

const CourseHeroContainer = ({
  name,
  isEnrolled,
}: CourseHeroContainerProps) => {
  const { user, isAuth } = useUser();

  let headerActionButton;

  if (!isAuth) {
    headerActionButton = (
      <FlexContainer>
        <LoginWithGoogleButton text='Login to Get Started' />
      </FlexContainer>
    );
  }

  console.log('HERE', user, isEnrolled);

  if (isAuth && !isEnrolled) {
    headerActionButton = (
      <FlexContainer>
        <Button variant='PRIMARY' text='Enroll to Course' />
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

        {headerActionButton}
      </FlexContainer>
    </FlexContainer>
  );
};

export default CourseHeroContainer;
