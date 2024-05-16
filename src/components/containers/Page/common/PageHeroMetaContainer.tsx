import { FlexContainer, Text } from '@/components';
import { ProjectHeroMetaContainerProps } from '@/interfaces';

const PageHeroMetaContainer = ({
  subtitle,
  title,
  titleClassName = 'gradient-3',
}: ProjectHeroMetaContainerProps) => {
  return (
    <FlexContainer direction='col' itemCenter={false} className='gap-1'>
      <Text level='span' className='pre-title text-greyDark'>
        {subtitle}
      </Text>
      <FlexContainer className={`${titleClassName} px-2 py-1 rounded`}>
        <Text level='p' className='strong-text'>
          {title}
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
};

export default PageHeroMetaContainer;
