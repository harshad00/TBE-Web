import React, { useRef, useEffect, useState } from 'react';
import { toPng } from 'html-to-image';
import {
  FlexContainer,
  Section,
  Text,
  Image,
  CertificateContent,
  WebinarHeroContainer,
  LinkButton,
  SEO,
} from '@/components';
import { WebinarPageProps } from '@/interfaces';
import { getWebinarPageProps } from '@/utils';
import { useApi, useUser } from '@/hooks';
import { routes, imageMeta } from '@/constant';
import { isProgramActive } from '@/utils';

const WebinarPage = ({
  seoMeta,
  name,
  isFree,
  description,
  slug,
  host,
  dateAndTime,
  bannerImageUrl,
}: WebinarPageProps) => {
  const { user, isAuth } = useUser();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [showCertificate, setShowCertificate] = useState(false);
  const [registrationErrorMessage, setRegistrationErrorMessage] = useState<
    null | string
  >();

  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      setUserName(user.name || '');
      setUserEmail(user.email || '');
    }
  }, [user]);

  const handleDownload = async () => {
    if (certificateRef.current) {
      try {
        const dataUrl = await toPng(certificateRef.current, { quality: 1 });
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = `${userName}-webinar-certificate.png`;
        link.click();
      } catch (error) {
        console.error('Error generatingcertificate image:', error);
      }
    }
  };

  const { makeRequest } = useApi('webinar', {
    url: `${routes.api.webinar}/${slug}`,
  });

  const onGenerateCertificate = async () => {
    try {
      const {
        status,
        error,
        data: { isRegistered },
        message,
      } = await makeRequest({
        url: `${routes.api.webinar}/${slug}?email=${user?.email}`,
      });

      if (!status || error) {
        setRegistrationErrorMessage('Certificate generation failed');
      }

      if (isRegistered) {
        setShowCertificate(true);
      } else {
        setShowCertificate(false);
        setRegistrationErrorMessage(message);
      }
    } catch (error) {
      console.error('Detailed error while generating certificate: ', error);
    }
  };

  const webinarStarted = isProgramActive(new Date(dateAndTime));

  let certificateSection;
  let generateCertificateCard;

  if (showCertificate) {
    generateCertificateCard = (
      <>
        <FlexContainer
          fullWidth={true}
          className={`max-w-lg bg-white rounded-1 border-2 border-gray-500 ${
            webinarStarted ? '' : 'opacity-80'
          }`}
        >
          <div ref={certificateRef} className='w-full'>
            <CertificateContent
              type='webinar'
              username={userName}
              courseName={name}
              date={dateAndTime.slice(0, 10)}
            />
          </div>
        </FlexContainer>
        <button
          onClick={handleDownload}
          disabled={!webinarStarted}
          className={`rounded py-1 px-2 text-white ${
            webinarStarted
              ? 'bg-blue-500 hover:bg-blue-600'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Download Certificate
        </button>
      </>
    );
  }

  if (!isAuth) {
    certificateSection = <WebinarHeroContainer />;
  } else {
    certificateSection = (
      <FlexContainer
        direction='col'
        className='w-full max-w-screen-lg bg-gradient-to-b from-white to-pink-500 p-2 py-4 m-auto mt-2 rounded-1 gap-2'
      >
        <Text level='h1' textCenter className='text-2xl font-semibold mb-4'>
          Generate Your Certificate
        </Text>

        <FlexContainer fullWidth={true} direction='row' className='gap-2 '>
          <FlexContainer
            direction='col'
            className='w-full md:w-[45%] max-w-[400px] '
            itemCenter={false}
          >
            <Text level='label' className='pre-name  text-white font-semibold'>
              Your Name
            </Text>
            <Text level='p' className='w-full font-semibold'>
              {userName}
            </Text>
          </FlexContainer>
          <FlexContainer
            direction='col'
            className='w-full md:w-[45%] max-w-[400px] '
            itemCenter={false}
          >
            <Text level='label' className='pre-name  text-white font-semibold'>
              Your Email
            </Text>
            <Text level='p' className='w-full font-semibold'>
              {userEmail}
            </Text>
          </FlexContainer>
        </FlexContainer>

        <button
          onClick={onGenerateCertificate}
          className='rounded bg-pink-500 py-1 px-2 mt-2 text-white hover:bg-pink-600 focus:outline-none'
        >
          Generate Certificate
        </button>
        {registrationErrorMessage && (
          <Text level='p'>{registrationErrorMessage}</Text>
        )}
        {generateCertificateCard}
      </FlexContainer>
    );
  }

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='flex flex-col gap-2 px-4 pb-4'>
        <FlexContainer className='relative'>
          <div
            className='absolute inset-0 bg-cover bg-center opacity-20 rounded-2'
            style={{
              backgroundImage: `url(${bannerImageUrl})`,
            }}
          ></div>

          <FlexContainer
            className='bg-transparent p-3 py-10 md:py-8 lg:py-6 gap-3 md:gap-2'
            direction='col'
          >
            <Text
              level='span'
              className='bg-yellow-500 text-sm md:text-md lg:text-lg font-semibold p-1 px-3 mb-2 rounded-1'
            >
              {isFree ? 'Free' : 'Paid'} Webinar
            </Text>

            <Text
              level='h1'
              textCenter
              className='text-3xl md:text-3xl lg:text-5xl font-bold'
            >
              {name}
            </Text>

            <Text
              level='p'
              textCenter
              className='text-lg md:text-xl lg:text-2xl px-[2.5%] lg:pt-1'
            >
              {description}
            </Text>

            <FlexContainer
              direction='row'
              className='gap-2 max-w-[80%] mt-3'
              wrap={false}
            >
              <Image
                alt='host-img'
                src={host.imageUrl}
                className='rounded-full w-[70px] md:w-20 lg:w-24 border-2 border-gray-950'
              />
              <FlexContainer
                direction='col'
                itemCenter={false}
                className='md:gap-1'
              >
                <Text
                  level='h2'
                  className='text-md md:text-2xl lg:text-3xl font-semibold'
                >
                  {host.name}
                </Text>
                <Text level='p' className='text-sm md:text-lg lg:text-xl'>
                  {host.role}
                </Text>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>

        {certificateSection}

        <FlexContainer
          direction='col'
          className='w-full max-w-screen-lg bg-gradient-to-b from-white to-pink-300 p-2 py-4 m-auto mt-2 rounded-1 gap-3'
        >
          <Text level='h1' textCenter className='text-2xl font-semibold mb-4'>
            About the Boring Education
          </Text>

          <FlexContainer
            direction='row'
            className='w-full'
            itemCenter={false}
            justifyCenter={false}
          >
            <Image
              src={imageMeta.logo.light}
              className='w-auto max-w-[200px] mb-1'
              fullWidth={false}
              alt={imageMeta.logo.alt}
            />
          </FlexContainer>

          <Text
            level='p'
            className='text-sm md:text-lg lg:text-xl font-semibold'
          >
            We at TBE, building An Open Source Tech Education platform to make
            learning faster with Hands-on Experience.
          </Text>

          <LinkButton
            href={routes.projects}
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'PRIMARY',
              text: 'Explore Free Projects',
              className: 'w-full',
            }}
          />
        </FlexContainer>
      </Section>
    </React.Fragment>
  );
};

export const getServerSideProps = getWebinarPageProps;

export default WebinarPage;
