import { Section, SectionHeaderContainer } from '@/components';
import { CohortJourneySectionProps } from '@/interfaces';
import { motion } from 'framer-motion';

const CohortJourneyContainer = ({ weeks }: CohortJourneySectionProps) => (
  <Section className='py-4 bg-white'>
    <div className='mx-auto md:px-4 px-2'>
      <motion.h2
        className='text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <SectionHeaderContainer
          heading='Your Weekly Journey'
          focusText='in Cohort'
          headingLevel={5}
        />
      </motion.h2>
      <ol className='relative border-l border-gray-300 ml-2 space-y-8'>
        {weeks.map((item, index) => (
          <motion.li
            key={index}
            className='mb-8 ml-4'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className='absolute w-3 h-3 bg-primary rounded-full -left-1.5 border border-white' />
            <time className='mb-1 text-sm font-medium text-primary'>
              {item.week}
            </time>
            <h3 className='text-lg font-semibold text-gray-900'>
              {item.title}
            </h3>
            <p className='text-gray-600'>{item.description}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  </Section>
);

export default CohortJourneyContainer;
