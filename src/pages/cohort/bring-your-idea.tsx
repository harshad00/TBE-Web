import { motion } from 'framer-motion';
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
import { PageProps } from '@/interfaces';
import {
  Button,
  SEO,
  Image,
  Carousel,
  Section,
  Text,
  FlexContainer,
} from '@/components';

const Card = ({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden ${className}`}
    {...props}
  >
    {children}
  </div>
);

const Banner = ({
  title,
  subtitle,
  image,
  cta,
  reverse = false,
}: {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
  reverse?: boolean;
}) => (
  <FlexContainer direction='col' className='gap-4' itemCenter={false}>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`container mx-auto px-4 py-8 flex flex-col flex-col-reverse ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center gap-8 lg:gap-12`}
    >
      <FlexContainer direction='col' className='gap-4' itemCenter={false}>
        <FlexContainer direction='col' className='gap-2' itemCenter={false}>
          <Text level='h2' className='heading-3'>
            {title}
          </Text>
          <Text level='p' className='paragraph'>
            {subtitle}
          </Text>
        </FlexContainer>
        <Button
          variant='PRIMARY'
          className='w-full sm:w-auto'
          text={cta}
        ></Button>
      </FlexContainer>
      <motion.div
        className='flex-1'
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={title}
          className='rounded-2xl shadow-2xl w-full object-cover aspect-video'
        />
      </motion.div>
    </motion.div>
  </FlexContainer>
);

const BrinYourIdeaLandingPage = ({ seoMeta }: PageProps) => {
  const projectIdeas = [
    {
      title: 'AI-Powered Learning Platform',
      description: 'Personalized education using artificial intelligence',
      icon: <LightBulbIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Social Impact Tech',
      description: 'Technology solutions for community challenges',
      icon: <UserGroupIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Future of Work',
      description: 'Innovative tools for remote collaboration',
      icon: <RocketLaunchIcon className='w-8 h-8 text-primary' />,
    },
  ];

  const whyUs = [
    {
      title: 'Expert Mentorship',
      description: 'Learn from industry veterans and successful entrepreneurs',
      icon: <AcademicCapIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Hands-on Experience',
      description: 'Build real projects with modern tech stack',
      icon: <SparklesIcon className='w-8 h-8 text-primary' />,
    },
    {
      title: 'Network Growth',
      description: 'Connect with like-minded innovators',
      icon: <UserGroupIcon className='w-8 h-8 text-primary' />,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200',
      quote:
        'The cohort program gave me the structure and support I needed to turn my idea into reality.',
    },
    {
      name: 'Michael Chen',
      role: 'Tech Entrepreneur',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200',
      quote:
        "The mentorship and community aspect of this program is unmatched. It's been transformative.",
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Developer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200',
      quote:
        'From ideation to execution, this program equipped me with all the necessary tools.',
    },
  ];

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <motion.div
        className='bg-gradient-to-r from-primary/20 to-primary/10 p-2 text-center text-primary'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={{
          initial: { x: -1000 },
          animate: { x: 0 },
          exit: { x: 1000 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        🚀 Next cohort starting soon - Limited spots available!
      </motion.div>

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
                  Turn Your Tech Idea Into Reality
                </Text>
                <Text
                  level='p'
                  className='text-contentDark md:text-left text-center'
                >
                  Join our cohort program and get the mentorship, resources, and
                  community you need to build your next big thing.
                </Text>
              </FlexContainer>
              <FlexContainer
                direction='col'
                className='sm:flex-row gap-2 justify-center lg:justify-start'
              >
                <Button
                  className='w-full'
                  variant='PRIMARY'
                  text='Apply Now'
                  animationClasses='w-full sm:w-auto'
                />
                <Button
                  className='w-full'
                  variant='GHOST'
                  text='Learn More'
                  animationClasses='w-full sm:w-auto'
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
                    500+ Success Stories
                  </span>
                </div>
              </div>
            </motion.div>
          </FlexContainer>
        </div>
      </Section>

      <Section>
        <Banner
          title='Learn from Industry Experts'
          subtitle="Get mentored by successful entrepreneurs and tech leaders who've been there, done that."
          image='https://images.unsplash.com/photo-1475506631979-72412c606f4d?w=1200&h=800&q=80'
          cta='Meet Our Mentors'
        />

        <Banner
          title='Build Real-World Projects'
          subtitle='Work on meaningful projects that solve actual problems and build your portfolio.'
          image='https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&q=80'
          cta='View Previous Projects'
          reverse
        />
      </Section>

      {/* Project Ideas Section */}
      <section className='py-12 md:py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What You Can Build
          </motion.h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {projectIdeas.map((idea, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className='p-6 hover:shadow-xl transition-shadow duration-300 h-full'>
                  <div className='mb-4'>{idea.icon}</div>
                  <h3 className='text-xl font-semibold mb-2'>{idea.title}</h3>
                  <p className='text-gray-600'>{idea.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose Us
          </motion.h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className='p-6 hover:shadow-xl transition-shadow duration-300 h-full'>
                  <div className='mb-4'>{item.icon}</div>
                  <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                  <p className='text-gray-600'>{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-12 md:py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Our Alumni Say
          </motion.h2>
          <Carousel
            items={testimonials}
            renderItem={(item) => (
              <Card className='p-6 md:p-8'>
                <div className='flex flex-col md:flex-row items-center gap-6'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    className='w-24 h-24 rounded-full object-cover'
                    fullWidth={false}
                    fullHeight={false}
                  />
                  <div className='flex-1 text-center md:text-left'>
                    <p className='text-lg md:text-xl italic mb-4'>
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div>
                      <h4 className='font-semibold text-lg'>{item.name}</h4>
                      <p className='text-gray-600'>{item.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-12 md:py-20'>
        <div className='container mx-auto px-4'>
          <motion.h2
            className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Investment in Your Future
          </motion.h2>
          <motion.div
            className='max-w-md mx-auto'
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className='p-6 md:p-8 hover:shadow-xl transition-shadow duration-300'>
              <div className='text-center mb-6 md:mb-8'>
                <h3 className='text-xl md:text-2xl font-bold mb-2'>
                  Cohort Program
                </h3>
                <div>
                  <span className='text-3xl md:text-4xl font-bold'>$999</span>
                  <span className='text-gray-600'> / cohort</span>
                </div>
              </div>
              <ul className='space-y-4 mb-6 md:mb-8'>
                {[
                  '12-week intensive program',
                  '1-on-1 mentorship sessions',
                  'Weekly group workshops',
                  'Access to resource library',
                  'Lifetime alumni network',
                  'Demo day opportunity',
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
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <Button
                className='m-auto group'
                variant='PRIMARY'
                text='Register Now'
                animationClasses='w-full sm:w-auto'
              />
            </Card>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default BrinYourIdeaLandingPage;
