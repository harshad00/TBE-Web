import { FlexContainer, Link, Text } from '@/components';
import { MobileNavbarLinksContainerProps } from '@/interfaces';

const MobileNavbarLinksContainer = ({
  title,
  links,
  onLinkClick,
}: MobileNavbarLinksContainerProps) => {
  return (
    <FlexContainer
      itemCenter={false}
      justifyCenter={false}
      direction='col'
      className='gap-1'
    >
      <Text level='span' className='pre-title text-greyDark'>
        {title}
      </Text>
      <FlexContainer
        itemCenter={false}
        justifyCenter={false}
        direction='col'
        className='gap-1'
      >
        {links.map(({ name, href, target }, index) => {
          return (
            <Link
              key={index}
              href={href}
              className='text-base font-semibold text-black'
              target={target}
              onClick={onLinkClick}
            >
              {name}
            </Link>
          );
        })}
      </FlexContainer>
    </FlexContainer>
  );
};

export default MobileNavbarLinksContainer;
