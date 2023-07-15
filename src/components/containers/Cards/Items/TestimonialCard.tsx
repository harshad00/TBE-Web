import { CardGradientContainer, Image, Text } from '@/components';
import { TestimonialCardProps } from '@/interfaces';

const TestimonialCard = ({
  image,
  imageAltText,
  title,
  content,
}: TestimonialCardProps) => {
  return (
    <CardGradientContainer className='max-w-sm border-borderColor3'>
      <Image
        className='w-12 rounded-full border'
        fullWidth={false}
        src={`${image}`}
        alt={imageAltText}
      />
      <Text level='p' className='paragraph mt-2 font-medium'>
        {title}
      </Text>
      <Text level='p' className='paragraph mt-1'>
        {content}
      </Text>
    </CardGradientContainer>
  );
};

export default TestimonialCard;
