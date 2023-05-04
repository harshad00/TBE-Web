import {
  FlexContainer,
  Section,
  Text,
  Image,
  Pill,
  CountdownTimerContainer,
  WebinarRegisterContainer,
  IconPill,
  WebinarInstructor,
} from '@/components';
import { WebinarHeaderProps } from '@/interfaces';
import { webinar } from '@/data';

const WebinarHeader = ({
  mainHeading,
  pillText,
  image,
  imageAltText,
  content,
  cardContent,
}: WebinarHeaderProps) => {
  return (
    <Section>
      <FlexContainer direction='col'>
        <FlexContainer
          itemCenter={true}
          justifyCenter={true}
          className='m-auto w-full lg:w-3/4'
        >
          <div className='relative w-full overflow-hidden rounded-2'>
            <Image
              className='absolute object-cover'
              src={image}
              alt={imageAltText}
            />
            <FlexContainer direction='col' className='p-4 md:p-8'>
              <Pill
                text={pillText}
                variant='SECONDARY'
                textStyleClasses='text-contentLight'
              />
              <FlexContainer direction='col' className='mt-6 w-full gap-1'>
                <Text level='h3' textCenter={true} className='heading-3'>
                  {mainHeading}
                </Text>

                <Text level='p' className='paragraph' textCenter={true}>
                  {content}
                </Text>
              </FlexContainer>
              <WebinarInstructor
                imagePath={cardContent.image}
                imageAltText={cardContent.imageAltText}
                name={cardContent.name}
                position={cardContent.designation}
              />
              <FlexContainer
                className='mt-4 gap-4 md:mt-6'
                justifyCenter={false}
              >
                <IconPill
                  iconPath={cardContent.dateIcon}
                  iconAltText={cardContent.dateIconAltText}
                  label={cardContent.date}
                  backgroundColor=''
                />
                <IconPill
                  iconPath={cardContent.timeIcon}
                  iconAltText={cardContent.timeIconAltText}
                  label={cardContent.time}
                  backgroundColor=''
                />
              </FlexContainer>
              <CountdownTimerContainer
                countdownTime={['03 d', '02 h', '01 m']}
              />
            </FlexContainer>
          </div>
        </FlexContainer>
      </FlexContainer>
      <WebinarRegisterContainer
        id={webinar.register.id}
        heading={webinar.register.heading}
        ctaText={webinar.register.ctaText}
        infoText={webinar.register.infoText}
      />
    </Section>
  );
};

export default WebinarHeader;
