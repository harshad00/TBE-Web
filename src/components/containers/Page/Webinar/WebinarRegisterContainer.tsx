import { FlexContainer, LinkButton, Text } from '@/components';

const WebinarRegisterContainer = () => {
  return (
    <FlexContainer className='gradient-4 m-auto -mt-1 mb-8 w-full rounded-2 lg:w-1/2'>
      <FlexContainer
        className='m-auto w-full gap-3 p-4 lg:w-3/4'
        direction='col'
      >
        <Text level='h5' className='heading-5 text-contentLight'>
          Register Now
        </Text>
        <FlexContainer direction='col' className='w-full gap-2'>
          <LinkButton
            href=''
            buttonProps={{ variant: 'PRIMARY', text: 'Join Webinar' }}
            className='w-full'
          />
          <Text level='p' className='strong-text text-contentLight'>
            25 Slots only, Few seats left.
          </Text>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default WebinarRegisterContainer;
