import { FlexContainer, Logo, Text } from '@/components';

const Footer = () => {
  return (
    <footer className='bg-dark'>
      <FlexContainer
        className='items-start gap-4 px-4 py-6 md:px-8 md:py-12'
        itemCenter={false}
      >
        <FlexContainer
          direction='col'
          itemCenter={false}
          className='flex-1 items-baseline'
        >
          <Logo isDark={true} />
          <Text level='p' className='subtitle pt-2 text-contentDark'>
            The Boring{' '}
            <Text level='span' className='subtitle text-primary'>
              Education
            </Text>
          </Text>
          <Text level='p' className='paragraph pt-1 text-contentDark'>
            Learn Tech Skills & Prepare yourself for a Tech Job.
          </Text>
        </FlexContainer>
        <FlexContainer
          className='items-baseline justify-between gap-4'
          itemCenter={false}
        ></FlexContainer>
      </FlexContainer>
      <FlexContainer className='border-t border-grey py-2' itemCenter={true}>
        <Text level='p' className='pre-title text-contentDark'>
          © {new Date().getFullYear()}, The Boring Education
        </Text>
      </FlexContainer>
    </footer>
  );
};

export default Footer;
