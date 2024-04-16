import { FlexContainer, Text } from '@/components';
import { LINKS } from '@/constant';
import { FaInstagram } from 'react-icons/fa';
import LinkText from '../common/Typography/Link';

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <FlexContainer
        className='mx-4 justify-between py-1'
        justifyCenter={false}
      >
        <Text level='p' className='pre-title text-contentDark'>
          Built with ❤️ in 🇮🇳
        </Text>
        <FaInstagram />
        <FlexContainer>
          <LinkText href={LINKS.instagram}>
            <FaInstagram color='white' size='2em' />
          </LinkText>
        </FlexContainer>
      </FlexContainer>
    </footer>
  );
};

export default Footer;
