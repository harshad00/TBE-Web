import { ImageContainerProps } from '@/interfaces';
import Image from 'next/image';

const ImageContainer = ({
  src,
  alt,
  className,
  loading = 'lazy',
}: ImageContainerProps) => {
  return (
    <div className={className + ' h-full w-full'}>
      <Image
        src={src}
        alt={alt}
        fill={true}
        loading={loading}
        className={className + ' image'}
      />
    </div>
  );
};

export default ImageContainer;
