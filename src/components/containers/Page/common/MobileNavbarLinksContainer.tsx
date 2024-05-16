import { FlexContainer, Link, Text } from '@/components';
import { MobileNavbarLinksContainerProps } from '@/interfaces';

const MobileNavbarLinksContainer = ({
  title,
  links,
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
        {links.map(({ name, href, target }) => (
          <Link
            key={name}
            href={href}
            target={target}
            className='strong-text -mx-3 block px-3 hover:text-primary'
          >
            {name}
          </Link>
        ))}
      </FlexContainer>
    </FlexContainer>
  );
};

export default MobileNavbarLinksContainer;
