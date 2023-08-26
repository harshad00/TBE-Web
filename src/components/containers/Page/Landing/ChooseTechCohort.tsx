import { Text } from '@/components';

const ChooseTechCohort = () => {
  return (
    <div className='inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-t from-indigo-600 to-purple-600 px-4 py-10'>
      <div className='inline-flex flex-col items-start justify-start gap-10'>
        <Text
          level='h3'
          className='heading-3 text-contentDark'
          textCenter={true}
        >
          Choose best suited Tech Program
        </Text>
        <div className='w-80 text-center text-3xl font-bold text-neutral-50'>
          Choose best suited Tech Program
        </div>
        <div className='flex flex-col items-start justify-start gap-16'>
          <div className='flex flex-col items-start justify-start gap-6'>
            <div className='w-80 text-center text-base font-semibold text-neutral-50'>
              Choose what describes you
            </div>
            <div className='flex flex-col items-start justify-start gap-2.5'>
              <div className='inline-flex w-80 items-center justify-start gap-2.5 rounded-3xl border border-gray-100 px-8 py-5'>
                <div className='text-base font-semibold text-neutral-50'>
                  Experience Professional
                </div>
              </div>
              <div className='inline-flex w-80 items-center justify-start gap-2.5 rounded-3xl border border-gray-100 px-8 py-5'>
                <div className='text-base font-semibold text-neutral-50'>
                  Graduated, Looking for Job
                </div>
              </div>
              <div className='inline-flex w-80 items-center justify-between gap-2.5 rounded-3xl border border-rose-500 bg-rose-500 px-8 py-5'>
                <div className='text-base font-semibold text-neutral-50'>
                  School Student
                </div>
                <div className='relative h-6 w-6'>
                  <div className='absolute left-0 top-0 h-6 w-6 rounded-full border border-rose-500 bg-gray-100' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start justify-start gap-6'>
            <div className='w-80 text-center text-base font-semibold text-neutral-50'>
              We recommend
            </div>
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
                    <div className='inline-flex w-64 items-center justify-center gap-2.5 rounded bg-rose-500 px-8 py-2.5'>
                      <div className='text-sm font-bold tracking-tight text-stone-50'>
                        Talk to Counsellor
                      </div>
                    </div>
                    <div className='inline-flex w-64 items-center justify-center gap-2.5 rounded border border-rose-500 bg-stone-50 px-8 py-2.5'>
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
                    <div className='inline-flex w-64 items-center justify-center gap-2.5 rounded bg-rose-500 px-8 py-2.5'>
                      <div className='text-sm font-bold tracking-tight text-stone-50'>
                        Talk to Counsellor
                      </div>
                    </div>
                    <div className='inline-flex w-64 items-center justify-center gap-2.5 rounded border border-rose-500 bg-stone-50 px-8 py-2.5'>
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
            <div className='inline-flex items-start justify-start gap-2.5 rounded-lg border border-gray-100 px-6 py-11'>
              <div className='inline-flex flex-col items-center justify-start gap-10'>
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
                    <div className='inline-flex h-12 w-64 items-center justify-between rounded bg-stone-50 px-5 py-3'>
                      <div className='text-sm font-medium tracking-tight text-zinc-500'>
                        School Student
                      </div>
                    </div>
                  </div>
                </div>
                <div className='inline-flex h-11 w-36 items-center justify-center gap-2.5 rounded bg-rose-500 px-12 py-4'>
                  <div className='text-sm font-bold tracking-tight text-stone-50'>
                    Talk to us
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTechCohort;
