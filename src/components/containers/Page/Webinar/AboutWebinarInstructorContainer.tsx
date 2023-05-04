import {
  FlexContainer,
  Section,
  Text,
  WebinarDescription,
  WebinarInstructor,
} from '@/components';
import { WebinarInstructorCardProps } from '@/interfaces';

const AboutWebinarInstructorContainer = ({
  heading,
  image,
  imageAltText,
  name,
  designation,
  about,
}: WebinarInstructorCardProps) => {
  return (
    <Section className='py-6 md:py-8'>
      <FlexContainer direction='col' className='m-auto w-3/4 gap-5 lg:w-1/3'>
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
            paragraphs={about}
          />
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
};

export default AboutWebinarInstructorContainer;
