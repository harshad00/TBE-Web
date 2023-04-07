import { ProgramCard, Section, Text } from '@/components';
import { PROGRAMS } from '@/constant';

const OurPrograms = () => {
  return (
    <Section>
      <div className='flex flex-col'>
        <div className='flex justify-center'>
          <Text level='h4' className='heading-4'>
            Our
          </Text>
          <Text level='h4' className='heading-4 text-primary'>
            &nbsp;Everyone
          </Text>
        </div>
        <div className='flex items-center justify-center gap-4 pt-5'>
          {PROGRAMS.map((program) => {
            const { image, imageAltText, title, content, buttonText } = program;
            return (
              <ProgramCard
                key={title}
                image={image}
                imageAltText={imageAltText}
                title={title}
                content={content}
                buttonText={buttonText}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default OurPrograms;
