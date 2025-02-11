import { motion, AnimatePresence } from 'framer-motion';
import {
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { getPreFetchProps } from '@/utils';
import { PageProps } from '@/interfaces';
import { Fragment } from 'react';
import { SEO } from '@/components';

// Button Component
const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'lg';
  className?: string;
  [key: string]: any;
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200';
  const variants = {
    primary: 'bg-white text-primary hover:bg-primary/10',
    secondary: 'bg-primary text-white hover:bg-primary/90',
  };
  const sizes = {
    default: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Card Component
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

// Banner Component
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
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`container mx-auto px-4 py-16 flex flex-col ${
      reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
    } items-center gap-8 lg:gap-12`}
  >
    <div className='flex-1 space-y-4 lg:space-y-6 text-center lg:text-left'>
      <h2 className='text-3xl lg:text-4xl font-bold'>{title}</h2>
      <p className='text-lg lg:text-xl text-gray-600'>{subtitle}</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button variant='secondary' size='lg' className='group'>
          {cta}
          <ArrowRightIcon className='w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform' />
        </Button>
      </motion.div>
    </div>
    <motion.div
      className='flex-1'
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image}
        alt={title}
        className='rounded-2xl shadow-2xl w-full object-cover aspect-video'
      />
    </motion.div>
  </motion.div>
);

// Testimonial Carousel Component
const TestimonialCarousel = ({ testimonials }: { testimonials: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className='relative w-full max-w-4xl mx-auto px-4'>
      <div className='relative h-[300px] overflow-hidden'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className='absolute w-full'
          >
            <Card className='p-6 md:p-8'>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className='w-24 h-24 rounded-full object-cover'
                />
                <div className='flex-1 text-center md:text-left'>
                  <p className='text-lg md:text-xl italic mb-4'>
                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                  </p>
                  <div>
                    <h4 className='font-semibold text-lg'>
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className='text-gray-600'>
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className='flex justify-center gap-4 mt-6'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className='p-2 rounded-full bg-primary/10 hover:bg-primary/20'
        >
          <ChevronLeftIcon className='w-6 h-6 text-primary' />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className='p-2 rounded-full bg-primary/10 hover:bg-primary/20'
        >
          <ChevronRightIcon className='w-6 h-6 text-primary' />
        </motion.button>
      </div>
    </div>
  );
};

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

  const bannerVariants = {
    initial: { x: -1000 },
    animate: { x: 0 },
    exit: { x: 1000 },
  };

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      {/* Animated Banner */}
      <motion.div
        className='bg-gradient-to-r from-primary/20 to-primary/10 p-2 text-center text-primary'
        initial='initial'
        animate='animate'
        exit='exit'
        variants={bannerVariants}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        🚀 Next cohort starting soon - Limited spots available!
      </motion.div>

      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-primary/90 to-primary py-12 md:py-20 text-white overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&q=80')] bg-cover bg-center opacity-20" />
          <div className='absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/90' />
        </div>
        <div className='container mx-auto px-4'>
          <div className='relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            <motion.div
              className='space-y-6 md:space-y-8 text-center lg:text-left'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
                Turn Your Tech Idea Into Reality
              </h1>
              <p className='text-lg md:text-xl text-white/90'>
                Join our cohort program and get the mentorship, resources, and
                community you need to build your next big thing.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant='primary'
                    size='lg'
                    className='w-full sm:w-auto'
                  >
                    Apply Now
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant='secondary'
                    size='lg'
                    className='w-full sm:w-auto'
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
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
          </div>
        </div>
      </section>

      {/* Featured Banners */}
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
        cta='View Projects'
        reverse
      />

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
          <TestimonialCarousel testimonials={testimonials} />
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant='secondary' className='w-full' size='lg'>
                  Register Now
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default BrinYourIdeaLandingPage;
