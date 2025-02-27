import { GradientContainer, Image, Text } from '@/components';
import { PrimaryCardProps } from '@/interfaces';

const PrimaryCard = ({
  image,
  imageAltText,
  title,
  content,
  borderColour = 4,
}: PrimaryCardProps) => {
  const border = `border-borderColor${borderColour}`;

  return (
    <GradientContainer className={`max-w-sm ${border}`}>
      <Image
        className='h-40 w-48'
        src={`${image}`}
        fullHeight={false}
        fullWidth={false}
        alt={imageAltText}
      />
      <Text level='h5' className='heading-5 mt-4'>
        {title}
      </Text>

      <Text level='p' className='paragraph mt-1 text-greyDark'>
        {content}
      </Text>
    </GradientContainer>
  );
};

export default PrimaryCard;
