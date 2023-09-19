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
import { PROGRAMS, apiUrls, chooseTechCohortItems, routes } from '@/constant';
import { useApi, useBestTechProgramFormData } from '@/hooks';
import { ChooseTechCohortFormFields, CohortCardProps } from '@/interfaces';

const ChooseTechCohort = () => {
  const [bestSuitedPrograms, setBestSuitedPrograms] =
    useState<CohortCardProps[]>();
  const {
    formData: {
      name,
      contactNo,
      email,
      cohortName,
      school,
      college,
      company,
      profession,
    },
    dispatch,
  } = useBestTechProgramFormData();
  const { data, loading, error, makeRequest } = useApi();

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
      (cohort) =>
        cohort.bestSuitedFor?.find((cohort) => cohort === id) &&
        cohort.active &&
        cohort.isCohort
    );

    dispatch({ type: 'UPDATE_FIELD', field: 'profession', value: id });

    setBestSuitedPrograms(suitedPrograms);
  };

  // On Selecting A Program Card
  const onSelectedProgram = (cohortId: string) => {
    const selectedProgram = PROGRAMS.find(
      (cohort) => cohort.id === cohortId && cohort.active
    )?.title;

    if (selectedProgram) handleFieldChange('cohortName', selectedProgram);
  };

  // On Booking Counselling
  const handleBookCounselling = () => {
    makeRequest({
      method: 'POST',
      url: apiUrls.leadCohort,
      body: {
        name,
        contactNo,
        email,
        cohortName,
        college,
        school,
        company,
        profession,
      },
    });
  };

  console.log('HERE', loading, error, data);

  const cohortRecommendationContainer = profession && (
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
                selectedItemId={profession}
                className='mt-3'
              />
            </FlexContainer>
          </FlexContainer>
          {cohortRecommendationContainer}
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
                className='w-3/4 gap-2 rounded-lg border border-white p-5 md:w-1/2'
              >
                <FlexContainer direction='col' className='w-full gap-3'>
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
                    isOptional={true}
                    onChange={(value) => handleFieldChange('email', value)}
                  />
                  {profession === 'student' && (
                    <InputFieldContainer
                      label='Your School Name'
                      type='text'
                      isOptional={true}
                      onChange={(value) => handleFieldChange('school', value)}
                    />
                  )}
                  {profession === 'college-student' && (
                    <InputFieldContainer
                      label='Your College'
                      type='text'
                      isOptional={true}
                      onChange={(value) => handleFieldChange('college', value)}
                    />
                  )}
                  {profession === 'professional' && (
                    <InputFieldContainer
                      label='Currently Working At'
                      type='text'
                      isOptional={true}
                      onChange={(value) => handleFieldChange('company', value)}
                    />
                  )}
                </FlexContainer>

                <FlexContainer
                  direction='col'
                  className='gap-2.5'
                  itemCenter={true}
                  justifyCenter={true}
                >
                  <Button
                    variant='PRIMARY'
                    text='Book Free Counselling'
                    onClick={handleBookCounselling}
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
