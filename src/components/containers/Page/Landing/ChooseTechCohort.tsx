import { useState } from 'react';
import {
  Button,
  ChooseTechCohortCard,
  FlexContainer,
  GradientContainer,
  InputFieldContainer,
  InputRadioContainer,
  Section,
  Text,
} from '@/components';
import { PROGRAMS, chooseTechCohortItems, routes } from '@/constant';
import { useBestTechProgramFormData } from '@/hooks';
import { ChooseTechCohortFormFields, ProgramCardProps } from '@/interfaces';

const ChooseTechCohort = () => {
  const [bestSuitedPrograms, setBestSuitedPrograms] =
    useState<ProgramCardProps[]>();
  const { formData, dispatch } = useBestTechProgramFormData();

  // On Changing Input Fields
  const handleFieldChange = (
    field: ChooseTechCohortFormFields,
    value: string
  ) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  // On Selecting Profession
  const handleRadioChange = (id: string) => {
    const suitedPrograms = PROGRAMS.filter(
      (program) =>
        program.bestSuitedFor?.find((cohort) => cohort === id) &&
        program.active &&
        program.isCohort
    );

    dispatch({ type: 'UPDATE_FIELD', field: 'profession', value: id });

    setBestSuitedPrograms(suitedPrograms);
  };

  // On Selecting A Program Card
  const onSelectedProgram = (programId: string) => {
    const selectedProgram = PROGRAMS.find(
      (program) => program.id === programId && program.active
    )?.title;

    if (selectedProgram) handleFieldChange('program', selectedProgram);
  };

  const programRecommendationContainer = formData.profession && (
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
  );

  console.log('HERE', formData);

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
                selectedItemId={formData.profession}
                className='mt-3'
              />
            </FlexContainer>
          </FlexContainer>
          {programRecommendationContainer}
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
                <FlexContainer direction='col' className='gap-3'>
                  <InputFieldContainer
                    label='Your Name'
                    type='text'
                    onChange={(value) => handleFieldChange('name', value)}
                  />
                  <InputFieldContainer
                    label='Your Contact No.'
                    type='text'
                    onChange={(value) => handleFieldChange('contact', value)}
                  />
                  <InputFieldContainer
                    label='Your Email'
                    type='email'
                    onChange={(value) => handleFieldChange('email', value)}
                  />
                </FlexContainer>

                <FlexContainer
                  direction='col'
                  className='gap-2.5'
                  itemCenter={true}
                  justifyCenter={true}
                >
                  <Button
                    variant='PRIMARY'
                    text='Talk to us'
                    onClick={() => console.log}
                  />
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </GradientContainer>
      </FlexContainer>
    </Section>
  );
};

export default ChooseTechCohort;
