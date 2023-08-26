import {
  FlexContainer,
  GradientContainer,
  InputRadioContainer,
  Section,
  Text,
} from '@/components';
import { chooseTechCohortItems } from '@/constant';
import { useState } from 'react';

const ChooseTechCohort = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');

  const handleRadioChange = (id: string) => {
    setSelectedOptionId(id);
  };

  console.log('HERE', selectedOptionId);

  return (
    <Section>
      <FlexContainer direction='col' justifyCenter={false}>
        <GradientContainer className='gradient-5 w-3/4' childrenClassName='m-6'>
          <FlexContainer direction='col' justifyCenter={false}>
            <Text level='h3' className='heading-3 text-contentDark'>
              Choose best suited Tech Program
            </Text>
            <FlexContainer
              direction='col'
              justifyCenter={false}
              className='mt-6 w-full'
            >
              <Text level='p' className='strong-text text-contentDark'>
                Choose what describes you
              </Text>
              <InputRadioContainer
                radioItems={chooseTechCohortItems}
                onChange={handleRadioChange}
                selectedItemId={selectedOptionId}
                className='mt-3'
              />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            direction='col'
            justifyCenter={false}
            className='mt-20'
          >
            <div className='flex flex-col items-start justify-start gap-6'>
              <Text level='p' className='strong-text text-contentDark'>
                We recommend
              </Text>
              <div className='flex flex-col items-start justify-start gap-2.5'>
                <div className='flex w-80 flex-col items-center justify-center gap-2.5 rounded border border-gray-100 bg-gray-100 px-7 py-6'>
                  <div className='flex w-64 flex-col items-center justify-between gap-12'>
                    <div className='flex h-16 flex-col items-start justify-start gap-2.5'>
                      <div>
                        <span className='text-xl font-bold text-zinc-900'>
                          Junior in{' '}
                        </span>
                        <span className='text-xl font-bold text-rose-500'>
                          Web Engineering
                        </span>
                      </div>
                      <div className='flex h-8 flex-col items-start justify-start gap-2.5 self-stretch'>
                        <div className='w-64 text-sm font-medium tracking-tight text-zinc-400'>
                          Learn Web Fundamentals with HTML, CSS and JS with live
                          projects.
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-2.5'>
                      <div className=' w-64 items-center justify-center gap-2.5 rounded bg-rose-500 px-8 py-2.5'>
                        <div className='text-sm font-bold tracking-tight text-stone-50'>
                          Talk to Counsellor
                        </div>
                      </div>
                      <div className=' w-64 items-center justify-center gap-2.5 rounded border border-rose-500 bg-stone-50 px-8 py-2.5'>
                        <div className='text-sm font-bold tracking-tight text-rose-500'>
                          Know More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex w-80 flex-col items-center justify-center gap-2.5 rounded border border-gray-100 bg-gray-100 px-7 py-6'>
                  <div className='flex w-64 flex-col items-center justify-between gap-12'>
                    <div className='flex h-16 flex-col items-start justify-start gap-2.5'>
                      <div>
                        <span className='text-xl font-bold text-zinc-900'>
                          Be{' '}
                        </span>
                        <span className='text-xl font-bold text-rose-500'>
                          Front-end{' '}
                        </span>
                        <span className='text-xl font-bold text-zinc-900'>
                          Master
                        </span>
                      </div>
                      <div className='flex h-8 flex-col items-start justify-start gap-2.5 self-stretch'>
                        <div className='w-64 text-sm font-medium tracking-tight text-zinc-400'>
                          Learn Core of Front-end with React.js with Placement
                          Assistance in 8 Weeks.
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col items-start justify-start gap-2.5'>
                      <div className=' w-64 items-center justify-center gap-2.5 rounded bg-rose-500 px-8 py-2.5'>
                        <div className='text-sm font-bold tracking-tight text-stone-50'>
                          Talk to Counsellor
                        </div>
                      </div>
                      <div className=' w-64 items-center justify-center gap-2.5 rounded border border-rose-500 bg-stone-50 px-8 py-2.5'>
                        <div className='text-sm font-bold tracking-tight text-rose-500'>
                          Know More
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-6'>
              <div className='w-80 text-center text-base font-semibold text-neutral-50'>
                Talk to our counsellors{' '}
              </div>
              <div className=' items-start justify-start gap-2.5 rounded-lg border border-gray-100 px-6 py-11'>
                <div className=' flex-col items-center justify-start gap-10'>
                  <div className='flex flex-col items-start justify-start gap-5'>
                    <div className='flex flex-col items-start justify-start gap-2.5'>
                      <div className='text-sm font-medium tracking-tight text-neutral-50'>
                        Your Name
                      </div>
                      <div className='h-12 w-64 rounded bg-stone-50 px-6 py-3' />
                    </div>
                    <div className='flex flex-col items-start justify-start gap-2.5'>
                      <div className='text-sm font-medium tracking-tight text-neutral-50'>
                        Your Contact No.
                      </div>
                      <div className='h-12 w-64 rounded bg-stone-50 px-6 py-3' />
                    </div>
                    <div className='flex flex-col items-start justify-start gap-2.5'>
                      <div className='text-sm font-medium tracking-tight text-neutral-50'>
                        Your profession
                      </div>
                      <div className=' h-12 w-64 items-center justify-between rounded bg-stone-50 px-5 py-3'>
                        <div className='text-sm font-medium tracking-tight text-zinc-500'>
                          School Student
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' h-11 w-36 items-center justify-center gap-2.5 rounded bg-rose-500 px-12 py-4'>
                    <div className='text-sm font-bold tracking-tight text-stone-50'>
                      Talk to us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FlexContainer>
        </GradientContainer>
      </FlexContainer>
    </Section>
  );
};

export default ChooseTechCohort;
