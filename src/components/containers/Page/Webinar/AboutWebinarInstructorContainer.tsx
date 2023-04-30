import {
  FlexContainer,
  Section,
  Text,
  WebinarDescription,
  WebinarInstructor,
} from '@/components';

const aboutInstructor = [
  '1. Built Ed-tech startups since college.',
  '2. Worked with Newton School, Masai, Pesto & CueMath.',
  '3. Senior Software Engineer @PW.',
];

const AboutWebinarInstructorContainer = () => {
  return (
    <Section className='py-6 md:py-8'>
      <FlexContainer direction='col' className='m-auto w-3/4 gap-5 lg:w-1/3'>
        <Text level='h4' className='heading-4'>
          Meet your instructor
        </Text>
        <FlexContainer direction='col' className='gap-3'>
          <WebinarInstructor
            imagePath='/images/sachin_shukla.png'
            imageAltText='Co-founder Sachin Shukla'
            name='Sachin Kr. Shukla'
            position='Co-founder The Boring Education'
            linkedInURL='#'
            containerClasses='gap-2'
          />
          <WebinarDescription
            flexProps={{
              direction: 'col',
              className: 'mt-2',
              itemCenter: false,
            }}
            paragraphs={aboutInstructor}
          />
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default AboutWebinarInstructorContainer;
