import { FlexContainer, Link, Text } from '@/components';
import { LINKS } from '@/constant';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

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
        <FlexContainer className='gap-1'>
          <Link href={LINKS.instagram} target='BLANK'>
            <FaInstagram color='white' size='2em' />
          </Link>
          <Link href={LINKS.youtube} target='BLANK'>
            <FaYoutube color='white' size='2em' />
          </Link>
        </FlexContainer>
      </FlexContainer>
    </footer>
  );
};

export default Footer;
