import {
  FlexContainer,
  GridContainer,
  LinkButton,
  PricingFeatureCard,
  Section,
  Text,
} from '@/components';
import { JUNIOR_CAMP_CURRICULUM_PRICING, LINKS } from '@/constant';

const MicrocampPricing = () => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer direction='col'>
          <Text level='p' className='strong-text' textCenter={true}>
            TECH EDUCATION FOR EVERYONE
          </Text>
          <FlexContainer direction='col' className='pt-2'>
            <Text level='h3' className='heading-3' textCenter={true}>
              Simple <span className='text-primary'>Pricing.</span>
            </Text>
            <Text level='h3' className='heading-3' textCenter={true}>
              Transparent <span className='text-primary'>Pricing.</span>
            </Text>
          </FlexContainer>
          <Text
            level='p'
            className='subtitle pt-1 text-center text-grey md:w-2/3'
            textCenter={true}
          >
            We don't believe in variable pricing for our products. We don't sell
            you anything blindly.
          </Text>
        </FlexContainer>

        <div className='gradient-2 mt-4 w-full rounded-2 px-4 py-4 md:w-10/12 lg:w-2/3'>
          <div className='flex flex-col items-center justify-between'>
            <Text level='p' className='strong-text'>
              PRICE YOU PAY
            </Text>
            <Text level='h2' className='heading-2 pt-2'>
              ₹1999
            </Text>
          </div>
          <div className='flex flex-col items-center justify-between pt-4'>
            <Text level='p' className='strong-text'>
              VALUE YOU GET
            </Text>
            <GridContainer className='w-full grid-cols-2 grid-cols-[repeat(auto-fit,minmax(100%,1fr))] gap-2 gap-1 rounded-2 pt-2 md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]'>
              {JUNIOR_CAMP_CURRICULUM_PRICING.map((item) => {
                const { id } = item;
                return <PricingFeatureCard key={id} {...item} />;
              })}
            </GridContainer>
          </div>
          <div className='flex flex-col items-center pt-8'>
            <Text
              level='p'
              className='paragraph text-contentDark'
              textCenter={true}
            >
              CAN'T DECIDE?
            </Text>
            <Text level='h4' className='heading-4 pt-1' textCenter={true}>
              Talk to our counsellors
            </Text>
            <FlexContainer justifyCenter={true} className='w-full pt-2'>
              <LinkButton
                href={LINKS.juniorInWebEngineeringRegistrationLink}
                buttonProps={{
                  variant: 'PRIMARY',
                  text: 'Book FREE Tech Consultation',
                }}
                target='BLANK'
              />
            </FlexContainer>
          </div>
          {/* <MicrocampRegisterForm /> */}
        </div>
      </FlexContainer>
    </Section>
  );
};

export default MicrocampPricing;
