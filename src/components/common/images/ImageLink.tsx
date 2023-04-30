import { Image, Link } from '@/components';
import { ImageContainerProps, LinkProps } from '@/interfaces';

interface ImageLinkProps {
  linkProps: LinkProps;
  imageProps: ImageContainerProps;
}

const ImageLink = ({ linkProps, imageProps }: ImageLinkProps) => {
  return (
    <Link {...linkProps}>
      <Image {...imageProps} alt={imageProps.alt} />
    </Link>
  );
};

export default ImageLink;
