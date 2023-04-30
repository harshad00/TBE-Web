import { FlexContainer, LinkButton, Section, Text } from '@/components';

const WebinarRegisterContainer = () => {
  return (
    <Section>
      <FlexContainer className='gradient-4 m-auto w-1/2 rounded-2'>
        <FlexContainer className='m-auto w-1/2 gap-3 p-4' direction='col'>
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
    </Section>
  );
};

export default WebinarRegisterContainer;
