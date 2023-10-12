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
import {
  CHOOSE_COHORT_HEADER_TITLES,
  PROGRAMS,
  apiUrls,
  chooseTechCohortItems,
  routes,
} from '@/constant';
import { useApi, useBestTechProgramFormData } from '@/hooks';
import {
  ChooseTechCohortFormFields,
  ChooseTechCohortProps,
  CohortCardProps,
} from '@/interfaces';

const ChooseTechCohort = ({
  preSelectedCohortName,
  headerTitle = CHOOSE_COHORT_HEADER_TITLES.default,
}: ChooseTechCohortProps) => {
  const [bestSuitedPrograms, setBestSuitedPrograms] =
    useState<CohortCardProps[]>();
  const [errors, setErrors] = useState({ formError: '', apiError: '' });
  const {
    formData: {
      name,
      contactNo,
      email,
      cohortName,
      profession,
      school,
      college,
      workExperience,
    },
    dispatch,
  } = useBestTechProgramFormData({ cohortName: preSelectedCohortName ?? '' });
  const { data, loading, error: apiError, makeRequest } = useApi();

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

    dispatch({ type: 'UPDATE_FIELD', field: 'college', value: '' });
    dispatch({ type: 'UPDATE_FIELD', field: 'school', value: '' });
    dispatch({ type: 'UPDATE_FIELD', field: 'workExperience', value: '' });
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
    if (!name) {
      setErrors({
        ...errors,
        formError: 'Please enter correct name',
      });
      return;
    } else if (!contactNo) {
      setErrors({
        ...errors,
        formError: 'Please enter correct contact no.',
      });
      return;
    }

    setErrors({ ...errors, formError: '' });

    makeRequest({
      method: 'POST',
      url: apiUrls.leadCohort,
      body: {
        name,
        contactNo,
        email,
        profession,
        cohortName,
        college,
        school,
        workExperience,
      },
    });
  };

  const cohortRecommendationContainer = profession &&
    !preSelectedCohortName && (
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

  // If any error comes from API
  if (apiError) {
    setErrors({
      ...errors,
      apiError,
    });
  }

  return (
    <Section>
      <FlexContainer direction='col'>
        <GradientContainer
          className='gradient-5'
          childrenClassName='flex flex-col px-2 py-4 md:p-6 gap-16'
        >
          <FlexContainer direction='col'>
            <Text
              level='h3'
              className='heading-4 md:heading-3 text-contentDark md:text-contentDark'
              textCenter={true}
            >
              {headerTitle}
            </Text>
            <FlexContainer direction='col' className='mt-6' fullWidth={true}>
              <Text
                level='h5'
                className='heading-5 text-contentDark'
                textCenter={true}
              >
                What you're doing now
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
                className='w-full gap-4 rounded-lg border border-white px-3 py-3 md:w-2/3 md:p-5'
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
                    onChange={(value) => handleFieldChange('contactNo', value)}
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
                  {profession === 'working-professional' && (
                    <InputFieldContainer
                      label='Years of Experience'
                      type='number'
                      isOptional={true}
                      onChange={(value) =>
                        handleFieldChange('workExperience', value)
                      }
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
                    isLoading={loading}
                  />
                  {errors && (
                    <Text
                      level='p'
                      className='mt-1'
                      variant='ERROR'
                      textCenter={true}
                    >
                      {errors.formError || errors.apiError}
                    </Text>
                  )}
                  {data?.message && (
                    <Text
                      level='p'
                      className='mt-1'
                      variant='SUCCESS'
                      textCenter={true}
                    >
                      {data?.message}
                    </Text>
                  )}
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
