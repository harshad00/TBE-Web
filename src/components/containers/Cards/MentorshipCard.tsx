import { FlexContainer, LinkButton, Text } from '@/components';
import { MentorshipCardProps } from '@/interfaces';

const MentorshipCard = ({
  heading,
  description,
  link,
}: MentorshipCardProps) => {
  return (
    <FlexContainer
      justifyCenter={false}
      className='max-w-sm min-h-60 p-4 border rounded shadow gap-4'
    >
      <FlexContainer direction='col' className='gap-1' itemCenter={false}>
        <Text level='h5' className='heading-5'>
          {heading}
        </Text>
        <Text level='p' className='pre-title'>
          {description}
        </Text>
      </FlexContainer>

      <FlexContainer>
        <LinkButton
          href={link}
          target='_blank'
          className='block'
          buttonProps={{
            variant: 'PRIMARY',
            text: 'Book Session',
          }}
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default MentorshipCard;
