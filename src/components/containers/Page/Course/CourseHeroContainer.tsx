import {
  FlexContainer,
  Text,
  PageHeroMetaContainer,
  LoginWithGoogleButton,
  Button,
} from '@/components';
import { routes } from '@/constant';
import { useApi, useUser } from '@/hooks';
import { CourseHeroContainerProps } from '@/interfaces';

const CourseHeroContainer = ({
  id,
  name,
  isEnrolled,
}: CourseHeroContainerProps) => {
  const { user, isAuth } = useUser();

  const { makeRequest } = useApi(`shiksha/${name}`);

  const enrollCourse = () => {
    makeRequest({
      method: 'POST',
      url: routes.api.enrollCourse,
      body: {
        userId: user?.id,
        courseId: id,
      },
    });
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
        <Button
          variant='PRIMARY'
          text='Enroll to Course'
          onClick={enrollCourse}
        />
      </FlexContainer>
    );
  } else if (isAuth && isEnrolled) {
    headerActionButton = (
      <FlexContainer>
        <Button variant='PRIMARY' text='Ask Questions' />
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
