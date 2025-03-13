import { useState } from 'react';
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
import { Image } from '@/components';

interface JobData {
  trendingSkills: { name: string; count: number }[];
  topLocations: { name: string; count: number }[];
  domainDistribution: { name: string; count: number }[];
}

const mockData: JobData = {
  trendingSkills: [
    { name: 'React.js', count: 1200 },
    { name: 'Node.js', count: 1000 },
    { name: 'Python', count: 800 },
    { name: 'TypeScript', count: 750 },
    { name: 'AWS', count: 600 },
  ],
  topLocations: [
    { name: 'San Francisco', count: 2000 },
    { name: 'Bangalore', count: 1800 },
    { name: 'London', count: 1500 },
    { name: 'New York', count: 1400 },
    { name: 'Singapore', count: 1200 },
  ],
  domainDistribution: [
    { name: 'Full-stack', count: 3000 },
    { name: 'Frontend', count: 2500 },
    { name: 'Backend', count: 2000 },
    { name: 'DevOps', count: 1500 },
    { name: 'Mobile', count: 1000 },
  ],
};

const MotionDiv = motion.div;

export default function Home() {
  const [jobData, setJobData] = useState<JobData>(mockData);

  return (
    <main className='min-h-screen bg-background'>
      <section className='relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background overflow-hidden'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
          <div className='text-left'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6'>
              Navigate Your Tech Career with Confidence
            </h1>
            <p className='text-xl text-muted-foreground mb-8'>
              Discover in-demand skills, trending technologies, and job market
              insights to accelerate your software engineering career.
            </p>
            <button className='inline-flex items-center px-6 py-3 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors'>
              Explore Trending Jobs
              <ArrowRightIcon className='ml-2 h-5 w-5' />
            </button>
          </div>
          <div className='relative h-[400px]'>
            <Image
              src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
              alt='Developer workspace'
              className='absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl'
            />
            <div className='absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl' />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className='py-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {[
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
          ].map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className='bg-gradient-to-br from-card to-card/50 p-8 rounded-xl shadow-lg border border-primary/10 hover:border-primary/30 transition-all'
            >
              <div className='h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6'>
                {feature.icon}
              </div>
              <h3 className='text-xl font-semibold mb-4'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Graph Section */}
      <section className='py-16 px-4 sm:px-6 lg:px-8 bg-muted/30'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Job Market Insights
          </h2>

          {/* Headless UI Tabs */}
          <Tab.Group>
            <Tab.List className='flex justify-center space-x-4 mb-8'>
              {['Skills', 'Locations', 'Domains'].map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `px-4 py-2 text-lg font-medium rounded-lg transition-colors ${
                      selected
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`
                  }
                >
                  {tab}
                </Tab>
              ))}
            </Tab.List>

            <div className='bg-card p-6 rounded-xl shadow-sm max-w-4xl mx-auto'>
              <Tab.Panels>
                {[
                  jobData.trendingSkills,
                  jobData.topLocations,
                  jobData.domainDistribution,
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
      </section>
    </main>
  );
}
