import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import { getPreFetchProps } from '@/utils';
import {
  CohortUserCategoryProps,
  PageProps,
  TestimonialCardProps,
} from '@/interfaces';
import {
  SEO,
  Image,
  Carousel,
  Section,
  Text,
  FlexContainer,
  SectionHeaderContainer,
  LinkButton,
  IconCard,
  HeaderLabel,
  Banner,
  CohortJourneyContainer,
  Button,
} from '@/components';
import {
  BYI_USER_CATEGORIES,
  LINKS,
  STATIC_FILE_PATH,
  TESTIMONIALS,
} from '@/constant';

const BrinYourIdeaLandingPage = ({ seoMeta }: PageProps) => {
  const projectIdeas = [
    {
      title: 'AI-Powered Resume Analyzer',
      description:
        'Build an AI tool that analyzes resumes and provides personalized feedback',
      icon: <SparklesIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'NFT Marketplace for Digital Art',
      description:
        'Create a decentralized marketplace for artists to sell their digital creations',
      icon: <RocketLaunchIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Full Stack Social Learning Platform',
      description:
        'Build a platform where developers can share knowledge and collaborate on projects',
      icon: <UserGroupIcon className='w-8 h-8 text-primary' />,
    },
  ];

  const whyUs = [
    {
      title: 'Live Mentorship Every Week',
      description: 'Get Mentorship from Industry Mentors Every Week',
      icon: <AcademicCapIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Join with Your Friends',
      description: 'Bring up to 4 friends and Build together as a Team',
      icon: <RocketLaunchIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Learn & Build with Hands-on Learning',
      description: 'Follow Our Personalised Roadmap and Build Your Idea',
      icon: <LightBulbIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Idea to Product + Launch',
      description:
        'From idea to product launch, we will guide you every step of the way',
      icon: <RocketLaunchIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Access to Builder Community',
      description: 'Join a community of builders to learn and grow together',
      icon: <UserGroupIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Free Resources',
      description: 'Get free resources to help you build your projects',
      icon: <LightBulbIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: '24x7 QnA with Mentors',
      description: 'Get help with your idea anytime you need',
      icon: <AcademicCapIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: '7 Days Money Back Guarantee',
      description: '7-day money back guarantee - no questions asked.',
      icon: <CheckCircleIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: '50% Cashback on Completion',
      description:
        'Complete the program and get 50% cashback on your investment',
      icon: <CheckCircleIcon className='w-8 h-8 text-primary' />,
    },
  ];

  const [selectedUserCategory, setSelectedUserCategory] =
    useState<CohortUserCategoryProps>(BYI_USER_CATEGORIES[0]);
  const [teamSize, setTeamSize] = useState(1);

  const handleTeamSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setTeamSize(value);
  };

  const handleSelectUserCategory = (key: string) => {
    const selectedCategory = BYI_USER_CATEGORIES.find(
      (category) => category.key === key
    );

    if (selectedCategory) {
      setSelectedUserCategory(selectedCategory);
    }
  };

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <HeaderLabel label='🚀 Next cohort starting soon - Limited spots available!' />

      <Section className='relative py-12 md:py-20 text-white'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&q=80')] bg-cover bg-center opacity-20" />
          <div className='absolute inset-0 gradient-5' />
        </div>
        <div className='container mx-auto md:px-8 px-2'>
          <FlexContainer className='relative md:flex-row flex-col-reverse gap-4 lg:gap-8 items-center'>
            <motion.div
              className='flex flex-col flex-1 gap-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FlexContainer direction='col' className='gap-2'>
                <Text
                  level='h1'
                  className='heading-1 text-contentDark leading-tight md:text-left text-center'
                >
                  Build Your First Tech Startup in 2 Months
                </Text>
                <Text
                  level='p'
                  className='text-contentDark md:text-left text-center'
                >
                  Join our cohort program and get the mentorship, resources, and
                  community you need to build your first tech startup in 2
                  months.
                </Text>
              </FlexContainer>
              <FlexContainer
                direction='col'
                className='sm:flex-row gap-2 justify-center lg:justify-start'
              >
                <LinkButton
                  href={LINKS.applyBYICohort}
                  buttonProps={{
                    text: 'Apply Now',
                    variant: 'PRIMARY',
                    className: 'w-full sm:w-auto',
                  }}
                  target='_blank'
                  className='w-full sm:w-auto'
                />
                <LinkButton
                  href={LINKS.demoBYICohort}
                  buttonProps={{
                    text: 'Book A Call',
                    variant: 'GHOST',
                    className: 'w-full sm:w-auto',
                  }}
                  target='_blank'
                  className='w-full sm:w-auto'
                />
              </FlexContainer>
            </motion.div>
            <motion.div
              className='relative flex-1 w-full'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src='https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&q=80'
                alt='Team collaboration'
                className='rounded-2xl shadow-2xl w-full object-cover'
              />
              <div className='absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl hidden md:block'>
                <div className='flex items-center gap-2'>
                  <SparklesIcon className='w-6 h-6 text-primary' />
                  <span className='text-primary font-semibold'>
                    20+ Projects Launched
                  </span>
                </div>
              </div>
            </motion.div>
          </FlexContainer>
        </div>
      </Section>

      <Section className='py-12 md:py-20 bg-gray-50'>
        <div className='mx-auto md:px-4 px-2'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeaderContainer
              heading='What You Can'
              focusText='Build'
              headingLevel={3}
            />
          </motion.h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
            {projectIdeas.map((idea, index) => (
              <IconCard
                key={index}
                icon={idea.icon}
                title={idea.title}
                description={idea.description}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className='bg-white py-8'>
        <FlexContainer
          className='justify-center gap-8 flex-wrap'
          direction='col'
        >
          <Text level='h4' className='heading-4' textCenter={true}>
            Where Are You in Your Tech Journey?
          </Text>
          <FlexContainer className='justify-center gap-2 flex-wrap'>
            {BYI_USER_CATEGORIES.map(({ label, key }) => {
              return (
                <Button
                  key={key}
                  onClick={() => handleSelectUserCategory(key)}
                  className={`md:px-4 md:py-2 px-2 py-1 w-full md:w-fit rounded-full transition-all ${
                    selectedUserCategory.key === key
                      ? 'bg-primary text-white'
                      : 'bg-white text-primary'
                  }`}
                  text={label}
                  variant='GHOST'
                />
              );
            })}
          </FlexContainer>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeaderContainer
              heading='Your Roadmap'
              focusText={`in Cohort | ${selectedUserCategory.duration}`}
              headingLevel={5}
            />
          </motion.h2>
          <CohortJourneyContainer weeks={selectedUserCategory.data} />
        </FlexContainer>
      </Section>

      <Section className='py-12 md:py-20'>
        <div className='mx-auto md:px-4 px-2'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-6 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeaderContainer
              heading='Why Choose'
              focusText='Us'
              headingLevel={3}
            />
          </motion.h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
            {whyUs.map((item, index) => {
              return <IconCard key={index} {...item} />;
            })}
          </div>
        </div>
      </Section>

      <Banner
        title='Take Back 50% Cashback on Completion'
        description='Complete the program and get 50% cashback on your investment.'
        buttonText='Register Now'
        buttonLink={LINKS.applyBYICohort}
        imageSrc={`${STATIC_FILE_PATH.svg}/community.svg`}
        variant='VARIANT_A'
      />

      <Section className='py-12 md:py-20'>
        <div className='md:px-4 px-2'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeaderContainer
              heading='Investment in'
              focusText='Your Career'
            />
          </motion.h2>
          <motion.div
            className='md:px-10 md:py-8 py-4 px-2 w-fit bg-white mx-auto rounded-lg'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FlexContainer direction='col' className='gap-3'>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <FlexContainer
                  className='justify-center gap-2 flex-wrap'
                  direction='col'
                >
                  {BYI_USER_CATEGORIES.map(({ label, key }) => {
                    return (
                      <Button
                        key={key}
                        onClick={() => handleSelectUserCategory(key)}
                        className={`w-full md:w-fit rounded-full transition-all ${
                          selectedUserCategory.key === key
                            ? 'bg-primary text-white'
                            : 'bg-white text-primary'
                        }`}
                        text={label}
                        variant='GHOST'
                      />
                    );
                  })}
                  <FlexContainer direction='col' className='gap-2'>
                    <Text level='p' className='paragraph'>
                      Select Number of Team Members
                    </Text>
                    <input
                      type='range'
                      min={1}
                      max={4}
                      value={teamSize}
                      onChange={handleTeamSizeChange}
                      className='w-full accent-primary'
                    />
                  </FlexContainer>
                </FlexContainer>
              </motion.div>
              <FlexContainer direction='col' className='gap-1'>
                <Text
                  level='h5'
                  className='heading-5 line-through text-gray-400'
                >
                  ₹ 9999
                </Text>
                <FlexContainer direction='col' className='gap-1'>
                  <Text level='h3' className='heading-3 text-primary'>
                    ₹ 4999
                  </Text>
                  <span className='bg-primary/10 text-primary px-2 py-1 rounded text-sm font-medium'>
                    50% OFF
                  </span>
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
            <ul className='space-y-2 md:space-y-4 my-4'>
              {[
                '2 Months Intensive Program',
                'Weekly 1:1 Live Mentorship',
                'Join with Your Friends(Max 4 people)',
                'Access to Builder Community',
                'Access to Free Resources',
                'Lifetime Alumni Network',
                '24x7 QnA with Mentors',
                '7 Days Money Back Guarantee',
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  className='flex items-center'
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircleIcon className='w-5 h-5 text-primary mr-2 flex-shrink-0' />
                  <Text level='span' className='span'>
                    {feature}
                  </Text>
                </motion.li>
              ))}
            </ul>
            <LinkButton
              href={LINKS.applyBYICohort}
              buttonProps={{
                text: 'Register Now',
                variant: 'PRIMARY',
                animationClasses: 'w-full sm:w-auto',
                className: 'm-auto',
              }}
              target='_blank'
            />
          </motion.div>
        </div>
      </Section>

      <ModernPricing />

      <Banner
        title='We Offer 7 Days Money Back Guarantee'
        description='If you are not satisfied with the program, we will refund your money within 7 days. No questions asked.'
        buttonText='Register Now'
        buttonLink={LINKS.applyBYICohort}
        imageSrc={`${STATIC_FILE_PATH.svg}/community.svg`}
        variant='VARIANT_B'
      />

      <Section className='py-12 md:py-20 bg-gray-50'>
        <div className='mx-auto md:px-4 px-2'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeaderContainer
              heading='What Our'
              focusText='Alumni Say'
              headingLevel={3}
            />
          </motion.h2>
          <Carousel
            items={TESTIMONIALS}
            renderItem={(item: TestimonialCardProps) => {
              const { title, content, image, work } = item;

              return (
                <div className='md:px-10 md:py-8 py-4 px-2 w-fit bg-white mx-auto rounded-lg'>
                  <div className='flex flex-col md:flex-row items-center gap-6'>
                    <Image
                      src={image}
                      alt={title}
                      className='w-24 h-24 rounded-full object-cover'
                      fullWidth={false}
                      fullHeight={false}
                    />
                    <div className='flex-1 text-center md:text-left'>
                      <p className='text-lg md:text-xl italic mb-4'>
                        &ldquo;{content}&rdquo;
                      </p>
                      <div>
                        <h4 className='font-semibold text-lg'>{title}</h4>
                        <p className='text-gray-600'>{work}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          />
        </div>
      </Section>
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default BrinYourIdeaLandingPage;

import { CheckIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: 'Beginner',
    price: 6000,
    monthly: true,
    description: 'The essentials to provide your best work for clients.',
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    name: 'Startup',
    price: 29,
    monthly: true,
    isPopular: true,
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
  },
  {
    name: 'Enterprise',
    price: 59,
    monthly: true,
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
  },
];

const ModernPricing = () => {
  const [billing, setBilling] = useState<'monthly' | 'annually'>('monthly');

  return (
    <section className='bg-[#0f172a] text-white py-16'>
      <div className='max-w-5xl mx-auto text-center px-4'>
        <p className='text-indigo-400 font-semibold mb-2'>Pricing</p>
        <h2 className='text-4xl font-bold mb-4'>Investment in Your Career</h2>
        <p className='text-gray-400 max-w-xl mx-auto mb-8'>
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className='flex justify-center gap-4 mb-12'>
          <button
            onClick={() => setBilling('monthly')}
            className={`px-4 py-1 rounded-full border ${
              billing === 'monthly'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 border-gray-500'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annually')}
            className={`px-4 py-1 rounded-full border ${
              billing === 'annually'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-300 border-gray-500'
            }`}
          >
            Annually
          </button>
        </div>
        <div className='grid md:grid-cols-3 gap-6'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border ${
                plan.isPopular
                  ? 'border-indigo-500 bg-[#1e293b]'
                  : 'border-gray-700 bg-[#0f172a]'
              } p-6 text-left flex flex-col justify-between`}
            >
              <div>
                <h3 className='text-lg font-semibold mb-1 text-white'>
                  {plan.name}
                </h3>
                <p className='text-sm text-gray-400 mb-4'>{plan.description}</p>

                <div className='flex items-center text-white text-4xl font-bold'>
                  ${plan.price}
                  <span className='text-base text-gray-400 font-normal ml-1'>
                    / Per Member
                  </span>
                </div>

                <button
                  className={`mt-4 w-full rounded-md px-4 py-2 text-sm font-medium ${
                    plan.isPopular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition`}
                >
                  Buy plan
                </button>

                {plan.isPopular && (
                  <div className='mt-2 text-xs bg-indigo-500 text-white px-2 py-1 rounded-full w-fit'>
                    Most popular
                  </div>
                )}
              </div>

              <ul className='mt-6 space-y-2 text-sm text-gray-200'>
                {plan.features.map((feature, idx) => (
                  <li key={idx} className='flex items-start gap-2'>
                    <CheckIcon className='w-4 h-4 text-indigo-400 mt-1' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
