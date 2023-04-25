import { FlexContainer, Image, Text } from '@/components';
import { WhatWeDoForYouCardProps } from '@/interfaces';

const WhatWeDoForYouCard = ({
  image,
  imageAltText,
  title,
  content,
}: WhatWeDoForYouCardProps) => {
  return (
    <FlexContainer className='gradient-1 max-w-sm rounded-2'>
      <FlexContainer className='p-4' justifyCenter={false}>
        <Image
          className='h-24 w-24'
          fullHeight={false}
          fullWidth={false}
          src={`${image}`}
          alt={imageAltText}
        />
        <FlexContainer className='pt-4' justifyCenter={false}>
          <Text level='h4' className='heading-4 text-contentLight'>
            {title}
          </Text>
          <Text level='p' className='strong-text pt-1 text-contentLight'>
            {content}
          </Text>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default WhatWeDoForYouCard;
