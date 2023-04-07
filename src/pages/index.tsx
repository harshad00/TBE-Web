import { useId } from 'react';
import { Header, Image, LandingPageHero, OurPrograms } from '@/components';
import { FOOTER_NAVIGATION, SKILLS, TESTIMONIALS, USP } from '@/constant';

export default function Home() {
  const uid = useId();

  return (
    <main className='gradient-bg'>
      <Header />
      <LandingPageHero />
      <OurPrograms />

      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <h1 className='text-4xl'>
          <span className='text-red'>Skill</span>
          <span className=''>We Teach</span>
        </h1>

        <div className='flex w-full items-center justify-center'>
          {SKILLS.map((skill) => (
            <div
              key={uid}
              className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'
            >
              <div className='block max-w-xs rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
                <div className='flex w-full items-center justify-around py-4'>
                  {skill.details.map((detail) => (
                    <div key={uid} className='flex flex-col items-center'>
                      <Image
                        className='rounded-t-lg'
                        src={`../svg/${detail.image}`}
                        alt={detail.imageAltText}
                      />

                      <span>{detail.name}</span>
                    </div>
                  ))}
                </div>
                <div className='p-6'>
                  <h5 className='mb-2 text-center text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
                    <span>{skill.title}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-center p-10  '>
        <h1 className='text-4xl '>
          What's <span className='text-red'>Different</span> here
        </h1>
        <div className='flex w-full items-center justify-center  '>
          {USP.map((item) => (
            <div
              key={uid}
              className='lg:px- my-1 w-full px-1 md:w-full lg:my-4 lg:w-1/3'
            >
              <div className='block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700'>
                <a href='#!'>
                  <Image
                    className='d-flex w-full items-center justify-center rounded-t-lg'
                    src={`../svg/${item.image}`}
                    alt={item.imageAltText}
                  />
                </a>
                <div className='p-6'>
                  <h5 className='mb-2 text-xl font-medium leading-tight text-black'>
                    {item.title}
                  </h5>
                  <p className='text-gray mb-4 text-base'>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-52'>
          <Image src='../svg/programmer.svg' alt='' />
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight   sm:text-6xl '>
              {/* <p className=' leading-loose '>Tech Learning for</p>
              <p className='text-red'>Everyone</p> */}
              Can You be a Programmer?
            </h1>
            <p className='mt-6 text-lg leading-8 '>
              Book your session and discuss if programming is for you.
            </p>
            <div className='mt-10 flex w-full items-center justify-center gap-x-6'>
              <a
                href='#'
                className='bg-red w-72 rounded-md px-3.5 py-2.5 text-sm
                 font-semibold  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Book FREE Counselling Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className='body-font text-gray-600'>
        <div className='container mx-auto px-5 py-24'>
          <h1 className='title-font mb-12 text-center text-3xl font-medium '>
            What our <span className='text-red pr-2'>students</span>saying
          </h1>
          <div className='-m-4 flex flex-wrap'>
            {TESTIMONIALS.map((item) => (
              <div key={uid} className='w-full  p-4 md:w-1/3'>
                <div className='h-full rounded bg-white p-8'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='mb-4 block h-5 w-5 text-gray-400'
                    viewBox='0 0 975.036 975.036'
                  >
                    <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
                  </svg>
                  <p className='mb-6 leading-relaxed'>{item.content}</p>
                  <a className='inline-flex items-center'>
                    <Image
                      alt={item.imageAltText}
                      src={`../svg/${item.image}`}
                      className='h-12 w-12 flex-shrink-0 rounded-full object-cover object-center'
                    />
                    <span className='flex flex-grow flex-col pl-4'>
                      <span className='title-font font-medium text-gray-900'>
                        {item.title}
                      </span>
                      <span className='text-sm text-gray-500'>
                        UI DEVELOPER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className='mx-auto mb-[75px] flex h-auto max-w-[1500px] flex-col border-t-2 border-white'>
        <div className='flex h-auto w-full flex-col gap-y-[45px] bg-black px-[15px] py-[30px]  sm:px-[30px] md:px-[40px] lg:h-[380px] lg:flex-row lg:items-center lg:justify-between lg:px-[50px] lg:py-0 xl:px-[75px]'>
          <div className='lg:w-4/12'>
            <div className='mb-[30px] flex items-center justify-center gap-x-[8px] text-gray-900'>
              <Image src='../svg/logo.svg' alt='logo-footer' />
              <span className=''>The Boring</span>
              <span className='text-red'>Education</span>
            </div>

            <div className='text-center text-gray-600'>
              Learn Tech Skills & Prepare yourself for a Tech Job.
            </div>
          </div>

          <div className='flex flex-wrap justify-center gap-x-[90px] gap-y-[60px] sm:justify-between sm:gap-x-0 lg:w-7/12 lg:flex-nowrap'>
            {FOOTER_NAVIGATION.map((item) => (
              <div key={uid} className='text-center sm:text-left'>
                <div className='mb-[18px] select-none text-sm font-bold text-gray-400'>
                  {item.title}
                </div>
                {item.url_content.map((nav) => (
                  <ul
                    key={uid}
                    className='flex flex-col gap-[10px] text-gray-600'
                  >
                    <a className='hover:underline' href={nav.href}>
                      <li>{nav.link_text}</li>
                    </a>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className='flex h-[100px] w-full flex-col items-center justify-evenly border-t-2 border-white bg-grey  sm:flex-row sm:justify-between sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px]'>
          <div className='w-full text-center text-gray-600'>
            © 2023, The Boring Education
          </div>
        </div>
      </footer>
    </main>
  );
}
