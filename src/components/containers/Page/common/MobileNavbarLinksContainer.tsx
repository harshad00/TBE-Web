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
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={() => {
              onLinkClick();
            }}
            className='text-black'
          >
            {link.name}
          </Link>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default MobileNavbarLinksContainer;
