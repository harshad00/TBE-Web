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
        className='w-24 rounded-full border'
        fullWidth={false}
        src={`${image}`}
        alt={imageAltText}
      />
      <Text level='h5' className='heading-5 pt-4'>
        {title}
      </Text>
      <Text level='p' className='paragraph pt-1'>
        {content}
      </Text>
    </CardGradientContainer>
  );
};

export default TestimonialCard;
