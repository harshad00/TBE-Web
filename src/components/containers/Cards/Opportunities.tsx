import {
  CardSectionContainer,
  FlexContainer,
  OpportunityCard,
  Section,
  Text,
} from '@/components';
import { TALK_ABOUT_OPPORTUNITIES } from '@/constant';

const Opportunities = () => {
  return (
    <Section>
      <FlexContainer direction='col' itemCenter={true} justifyCenter={true}>
        <FlexContainer direction='col' itemCenter={true} justifyCenter={true}>
          <Text level='p' className='strong-text text-greyDark'>
            TALK ABOUT OPPORTUNITIES IN
          </Text>
          <Text level='h4' className='heading-4 pt-2 text-primary'>
            Front-end Engineering
          </Text>
        </FlexContainer>
        <CardSectionContainer isWidthFull={false} className='w-full md:w-1/2'>
          {TALK_ABOUT_OPPORTUNITIES.map((item) => {
            const { id } = item;
            return <OpportunityCard key={id} {...item} />;
          })}
        </CardSectionContainer>
      </FlexContainer>
    </Section>
  );
};

export default Opportunities;
