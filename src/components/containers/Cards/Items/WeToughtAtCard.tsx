import { Image } from '@/components';
import { WeToughtAtCardProps } from '@/interfaces';

const WeToughtAtCard = ({ image, imageAltText }: WeToughtAtCardProps) => {
  return (
    <div className='flex'>
      <Image
        src={image}
        className='w-24 md:w-48'
        fullWidth={false}
        alt={imageAltText}
      />
    </div>
  );
};

export default WeToughtAtCard;
