import { Section, Text, Image, FlexContainer } from '@/components';
import { MY_PREV_EXPERIENCE } from '@/constant';

const WeAlreadyTaughtAt = () => {
  return (
    <Section>
      <FlexContainer direction='col' className='gap-4'>
        <Text level='h4' className='heading-4'>
          We already <span className=' text-primary'>taught</span> at
        </Text>
        <FlexContainer>
          {MY_PREV_EXPERIENCE.map((item) => (
            <FlexContainer
              key={item.id}
              className='w-88 justify-between [&:not(:first-child)]:ml-2'
              justifyCenter={false}
            >
              <Image
                src={item.image}
                fullWidth={true}
                alt={item.imageAltText}
              />
            </FlexContainer>
          ))}
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default WeAlreadyTaughtAt;
