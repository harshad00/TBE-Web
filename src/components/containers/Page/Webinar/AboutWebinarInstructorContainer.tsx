import {
  FlexContainer,
  Section,
  Text,
  WebinarDescription,
  WebinarInstructor,
} from '@/components';

import { WebinarInstructorCardProps } from '@/interfaces'
const aboutInstructor = [
  '1. Built Ed-tech startups since college.',
  '2. Worked with Newton School, Masai, Pesto & CueMath.',
  '3. Senior Software Engineer @PW.',
];

const AboutWebinarInstructorContainer = ({ id,
  heading,
  image,
  imageAltText,
  name,
  socialIcon,
  designation,
  instructorDetails, }: WebinarInstructorCardProps) => {
  return (
    <Section className='py-6 md:py-8'>
      <FlexContainer key={id} direction='col' className='m-auto w-3/4 gap-5 lg:w-1/3'>
        <Text level='h4' className='heading-4'>
          {heading}
        </Text>
        <FlexContainer direction='col' className='gap-3'>
          <WebinarInstructor
            imagePath={image}
            imageAltText={imageAltText}
            name={name}
            position={designation}
            linkedInURL='#'
            containerClasses='gap-2'
          />
          <WebinarDescription
            flexProps={{
              direction: 'col',
              className: 'mt-2',
              itemCenter: false,
            }}
            paragraphs={instructorDetails}
          />
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default AboutWebinarInstructorContainer;
