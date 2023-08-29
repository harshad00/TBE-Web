import {
  ChooseTechCohortCard,
  FlexContainer,
  GradientContainer,
  Image,
  InputRadioContainer,
  LinkButton,
  Section,
  Text,
} from '@/components';
import {
  PROGRAMS,
  chooseTechCohortItems,
  generateSectionPath,
  routes,
} from '@/constant';
import { CohortNameType, ProgramCardProps } from '@/interfaces';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ChooseTechCohort = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [bestSuitedPrograms, setBestSuitedPrograms] =
    useState<ProgramCardProps[]>();
  const [selectedProgram, setSelectedProgram] = useState<string>();

  const handleRadioChange = (id: string) => {
    setSelectedOptionId(id);

    const suitedPrograms = PROGRAMS.filter(
      (program) =>
        program.bestSuitedFor?.find((cohort) => cohort === id) &&
        program.active &&
        program.isCohort
    );

    setBestSuitedPrograms(suitedPrograms);
  };

  const onSelectedProgram = (programId: string) => {
    const selectedProgram = PROGRAMS.find(
      (program) => program.id === programId && program.active
    )?.title;

    setSelectedProgram(selectedProgram);
  };

  console.log('HERE', selectedProgram);

  return (
    <Section>
      <FlexContainer direction='col'>
        <GradientContainer
          className='gradient-5 w-3/4'
          childrenClassName='flex flex-col m-6 gap-16'
        >
          <FlexContainer direction='col'>
            <Text level='h3' className='heading-3 text-contentDark'>
              Choose best suited Tech Program
            </Text>
            <FlexContainer direction='col' className='mt-6' fullWidth={true}>
              <Text level='h5' className='heading-5 text-contentDark'>
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
          {selectedOptionId && (
            <FlexContainer direction='col'>
              <FlexContainer direction='col' className='gap-3' fullWidth={true}>
                <Text level='h5' className='heading-5 text-contentDark'>
                  We recommend
                </Text>
                <FlexContainer className='gap-2'>
                  {bestSuitedPrograms?.map((bestSuitedProgram, key) => {
                    return (
                      <ChooseTechCohortCard
                        key={key}
                        {...bestSuitedProgram}
                        onSelected={onSelectedProgram}
                      />
                    );
                  })}
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          )}
          <FlexContainer direction='col' className='gap-6'>
            <FlexContainer
              direction='col'
              className='gap-3'
              fullWidth={true}
              id={routes.internals.landing.talkToCounsellors}
            >
              <Text level='h5' className='heading-5 text-contentDark'>
                Talk to our counsellors
              </Text>
              <FlexContainer
                direction='col'
                className='gap-2 rounded-lg border border-white p-5'
              >
                <FlexContainer direction='col' className='gap-5'>
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
                </FlexContainer>

                <div className=' h-11 w-36 items-center justify-center gap-2.5 rounded bg-rose-500 px-12 py-4'>
                  <div className='text-sm font-bold tracking-tight text-stone-50'>
                    Talk to us
                  </div>
                </div>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </GradientContainer>
      </FlexContainer>
    </Section>
  );
};

export default ChooseTechCohort;
