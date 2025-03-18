import { Tab } from '@headlessui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  ArrowRightIcon,
  ArrowTrendingUpIcon,
  MapPinIcon,
  CodeBracketIcon,
} from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import {
  FlexContainer,
  Image,
  LinkButton,
  Section,
  SEO,
  Text,
} from '@/components';
import JobData from '@/data/unskilled.json';
import { Fragment } from 'react';
import { getPreFetchProps } from '@/utils';
import { PageProps } from '@/interfaces';
import { routes } from '@/constant';

const MotionDiv = motion.div;

const features = [
  {
    icon: <ArrowTrendingUpIcon className='h-6 w-6 text-primary' />,
    title: 'Stay Updated on Trending Tech',
    description:
      'Get real-time insights into the most in-demand programming languages, frameworks, and tools that employers are seeking.',
  },
  {
    icon: <MapPinIcon className='h-6 w-6 text-primary' />,
    title: 'Discover High-Demand Locations',
    description:
      'Explore tech hubs and cities where top companies are actively hiring software engineers.',
  },
  {
    icon: <CodeBracketIcon className='h-6 w-6 text-primary' />,
    title: 'Explore Job Roles & Domains',
    description:
      'Find the most sought-after software engineering domains and roles to focus your learning journey.',
  },
];

const tabLabels = ['Skills', 'Locations', 'Domains'];

const UnskilledLandingPage = ({ seoMeta }: PageProps) => {
  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <Section>
        <FlexContainer className='mx-auto gap-12'>
          <FlexContainer className='gap-4' direction='col' itemCenter={false}>
            <FlexContainer className='gap-2' direction='col' itemCenter={false}>
              <Text level='h3' className='heading-3'>
                What's Missing in Your{' '}
                <Text level='span' className='heading-3 text-primary'>
                  Resume?
                </Text>{' '}
                🚀 <br /> Find and Crack Your Next{' '}
                <Text level='span' className='heading-3 text-primary'>
                  Tech Job
                </Text>
              </Text>
              <Text level='p' className='paragraph max-w-md leading-relaxed'>
                Discover in-demand skills & tech roles. Get insights to
                supercharge your career.
              </Text>
            </FlexContainer>
            <LinkButton
              className='w-fit'
              href={`#${routes.internals.landing.explore}`}
              buttonProps={{
                variant: 'PRIMARY',
                text: 'Explore Trending Jobs',
                icon: <ArrowRightIcon className='h-5 w-5' />,
              }}
            />
          </FlexContainer>
          <FlexContainer className='w-full max-w-md'>
            <Image
              src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
              alt='Developer workspace'
              className='rounded-2xl shadow-xl w-full object-cover'
            />
          </FlexContainer>
        </FlexContainer>
      </Section>

      <Section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className='bg-gradient-to-br from-card to-card/50 p-8 rounded-xl shadow-md border border-primary/10 hover:border-primary/30 transition-all'
            >
              <div className='h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold mb-4'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </Section>

      <Section
        className='py-16 px-4 sm:px-6 lg:px-8 bg-muted/30'
        id={`${routes.internals.landing.explore}`}
      >
        <div className='mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Job Market Insights
          </h2>

          <Tab.Group>
            <Tab.List className='flex justify-center space-x-4 mb-8'>
              {tabLabels.map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
                      selected
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700'
                    } hover:bg-primary/70 focus:outline-none focus:ring-2 focus:ring-primary`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>

            <div className='bg-card p-6 rounded-xl shadow-sm max-w-4xl mx-auto'>
              <Tab.Panels>
                {[
                  JobData.trendingSkills,
                  JobData.topLocations,
                  JobData.jobDomains,
                ].map((data, index) => (
                  <Tab.Panel key={index} className='mt-0'>
                    <h3 className='text-xl font-semibold mb-6'>
                      {index === 0
                        ? 'Top Trending Skills'
                        : index === 1
                        ? 'Top Job Locations'
                        : 'Job Distribution by Domain'}
                    </h3>
                    <div className='h-[400px]'>
                      <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={data} layout='vertical'>
                          <CartesianGrid strokeDasharray='3 3' />
                          <XAxis type='number' />
                          <YAxis dataKey='name' type='category' width={100} />
                          <Tooltip />
                          <Bar dataKey='count' fill='hsl(var(--chart-1))' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </Tab.Group>
        </div>
      </Section>
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default UnskilledLandingPage;
