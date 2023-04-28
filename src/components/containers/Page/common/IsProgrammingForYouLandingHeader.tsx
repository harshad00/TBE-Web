import {
    FlexContainer,
    LinkButton,
    Section,
    SectionHeaderContainer,
    Text,
    Image
} from '@/components';
import { LINKS, } from '@/constant';


const IsProgrammingForYouLandingHeader = () => {


    return (
        <Section>

            <FlexContainer className='p-4 md:px-12 md:py-8' direction='col'>
                <FlexContainer itemCenter={true} justifyCenter={true}>
                    {/* <Image className="w-full h-48 object-cover " src="/images/coding_bg.png" alt="Coding Background" />
                        <SectionHeaderContainer
                            heading='Free Webinar'
                            focusText=''
                            headingLevel={5}
                            className='text-dark bg-yellow-500 p-1 rounded-md'
                        /> */}
                    <div className="w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative ">
                        <Image className="absolute inset-0 h-full w-full object-cover" src="/images/coding_bg.png" alt="" />
                        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 "></div>
                        <FlexContainer className=" h-full relative border">
                            <SectionHeaderContainer
                                heading='Free Webinar'
                                focusText=''
                                headingLevel={3}
                                className='w-full text-dark bg-yellow-500 p-1 rounded-md'
                            />
                        </FlexContainer>

                    </div>

                </FlexContainer>
                <FlexContainer direction='col' itemCenter={true} className='pt-5'>
                    <FlexContainer
                        direction='col'
                        justifyCenter={true}
                        className='w-full'
                    >
                        <Text level='h2' textCenter={true} className="heading-2">Is Programming for you?</Text>

                        <Text
                            level='p'
                            className='strong-text pt-1 text-dark'
                            textCenter={true}
                        >
                            Understand why everybody wants to be in Tech and should you learn Tech or not.
                        </Text>
                        <FlexContainer justifyCenter={false} className='justify-between  w-64 px-1'>
                            <div>
                                <Image src='/images/sachin_shukla.png' alt='Co-founder Sachin Shukla' />
                            </div>
                            <FlexContainer direction='col'>
                                <Text level='h6' className='heading-6 text-white font-bold'>Sachin Kr. Shukla</Text>
                                <Text level='p' className='paragraph'>Co-founder</Text>
                                <Text level='p' className='paragraph'>The Boring Education</Text>
                            </FlexContainer>

                        </FlexContainer>
                        <FlexContainer justifyCenter={false} className=' w-68 justify-between py-2 '>
                            <FlexContainer className='w-full  px-1 '>
                                <Image src='/svg/calendar.svg' className='w-4 ' alt='calendar' />
                                <Text level='p' className='paragraph px-2'>29Apr,Saturday</Text>
                            </FlexContainer>
                            <FlexContainer className='w-full px-1 '>
                                <Image src='/svg/clock.svg' className='w-4' alt='clock' />
                                <Text level='p' className='paragraph px-2'>11 AM</Text>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>

                </FlexContainer>
            </FlexContainer>


            <FlexContainer>
                <FlexContainer className='w-96 p-4 gradient-4 rounded-xl space-y-2' direction='col' itemCenter={true} justifyCenter={true} >
                    <Text level='p' className='paragraph font-bold text-contentLight'>Register Now</Text>
                    <LinkButton
                        href={LINKS.juniorInWebEngineeringRegistrationLink}
                        target='BLANK'
                        buttonProps={{ variant: 'PRIMARY', text: 'Join Webinar' }}
                        className='w-full md:w-auto'
                    />
                    <Text level='p' className='paragraph font-bold text-contentLight'>25 Slots only, Few seats left.</Text>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer className='mt-5' direction='col' >
                <FlexContainer direction='col'>
                    <Text level='h4' className='heading-4'>About Webinar</Text>
                    <FlexContainer justifyCenter={false} className=' w-68 justify-between py-2 '>
                        <FlexContainer className='w-full  px-1 '>
                            <Image src='/svg/calendar_grey.svg' className='w-4  ' alt='calendar' />
                            <Text level='p' className='paragraph px-2 text-greyDark'>29Apr,Saturday</Text>
                        </FlexContainer>
                        <FlexContainer className='w-full px-1 '>
                            <Image src='/svg/clock_grey.svg' className='w-4' alt='clock' />
                            <Text level='p' className='paragraph px-2 text-greyDark'>11 AM</Text>
                        </FlexContainer>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer className='w-96  pt-4 space-y-3' direction='col' itemCenter={false}>
                    <Text level='p' className='paragraph'>
                        Programming is becoming everyone’s need these days. You want to build a software, You need programming. You want to get a job, you need programming.
                    </Text>
                    <Text level='p' className='paragraph'>
                        First thing as a learner you do, is look for an online programs. There are so many programs available in the market.
                    </Text>
                    <Text level='p' className='paragraph'>
                        With lot of options in market, You will be confused to choose an option.. and with that you’ll choose an expensive program that’ll cost you lakhs.
                    </Text>
                    <Text level='p' className='paragraph'>
                        Everybody has a spending capacity and with a “Job in 6 Months” scheme, you’ll be prompted to buy a program.
                    </Text>
                    <Text level='p' className='paragraph'>
                        Should you buy or should you not? We’ll discuss it in our programs.
                    </Text>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer className='mt-5' direction='col'>
                <FlexContainer direction='col'>
                    <Text level='h4' className='heading-4'>What will you learn</Text>

                </FlexContainer>
                <FlexContainer direction='col' className='w-96  pt-4 space-y-3' itemCenter={false}>
                    <Text level='p' className='paragraph'>
                        1. You’ll learn with your background, will programming be helpful for you?
                    </Text>
                    <Text level='p' className='paragraph'>
                        2. Decide if you should be okay buying expensive bootcamps
                    </Text>
                    <Text level='p' className='paragraph'>
                        3. Understand what it takes to break into Tech
                    </Text>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer className='mt-5' direction='col' >
                <FlexContainer direction='col' className='py-2'>
                    <Text level='h4' className='heading-4'>Meet your instructor</Text>
                </FlexContainer>
                <FlexContainer justifyCenter={false} className='justify-between  w-64 px-1'>
                    <div>
                        <Image src='/images/sachin_shukla.png' alt='Co-founder Sachin Shukla' />
                    </div>
                    <FlexContainer direction='col'>
                        <FlexContainer justifyCenter={false} className='Justify-between'>
                            <Text level='h6' className='heading-6 text-white font-bold'>Sachin Kr. Shukla </Text>
                            <Image src='/svg/linkedin.svg' className='w-3' alt='Co-founder Sachin Shukla' />
                        </FlexContainer>

                        <Text level='p' className='paragraph'>Co-founder</Text>
                        <Text level='p' className='paragraph'>The Boring Education</Text>
                    </FlexContainer>

                </FlexContainer>
                <FlexContainer direction='col' itemCenter={true} className='w-full   pt-4 pl-24  space-y-1 items-start' >
                    <Text level='p' className='paragraph   w-96 '>
                        1. Built Ed-tech startups since college.
                    </Text>
                    <Text level='p' className='paragraph  w-96 '>
                        2. Worked with Newton School, Masai, Pesto & CueMath.
                    </Text>
                    <Text level='p' className='paragraph   w-96  '>
                        3. Senior Software Engineer @PW.
                    </Text>
                </FlexContainer>
                <FlexContainer className='py-5'>
                    <FlexContainer className='w-96 p-4 gradient-6 rounded-xl space-y-2' direction='col' itemCenter={false} justifyCenter={true} >
                        <Text level='p' className='paragraph font-bold px-2 text-contentLight'>About The Boring Education</Text>
                        <Image src='/svg/tbe_logo.svg' className=' w-5' alt='Co-founder Sachin Shukla' />
                        <Text level='p' className='paragraph text-contentLight font-bold text-justify'>
                            We at TBE, building the most affordable Tech courses that doesn’t cost you lakhs in an environment like we taught ourselves.
                        </Text>
                        <LinkButton
                            href={LINKS.juniorInWebEngineeringRegistrationLink}
                            target='BLANK'
                            buttonProps={{ variant: 'PRIMARY', text: 'Explore cohorts' }}
                            className='w-full md:w-auto '
                        />

                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </Section>
    );
};

export default IsProgrammingForYouLandingHeader;
