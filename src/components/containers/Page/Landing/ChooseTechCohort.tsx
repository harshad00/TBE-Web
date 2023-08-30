import {
  Button,
  ChooseTechCohortCard,
  FlexContainer,
  GradientContainer,
  InputFieldContainer,
  InputRadioContainer,
  Section,
  SelectInput,
  Text,
} from '@/components';
import { PROGRAMS, chooseTechCohortItems, routes } from '@/constant';
import { ProgramCardProps } from '@/interfaces';
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  useReducer,
  useState,
} from 'react';

type ChooseTechCohortInitialFormDataType = {
  name: string;
  contact: string;
  profession: string;
  program?: string;
};

type ChooseTechCohortFormFields = 'name' | 'contact' | 'profession' | 'program';

type ChooseTechCohortActionType = {
  type: 'UPDATE_FIELD';
  value: string;
  field: ChooseTechCohortFormFields;
};

// Reducer function to manage form field data
const chooseTechCohortFormReducer = (
  state: ChooseTechCohortInitialFormDataType,
  action: ChooseTechCohortActionType
) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const ChooseTechCohort = () => {
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [bestSuitedPrograms, setBestSuitedPrograms] =
    useState<ProgramCardProps[]>();

  const initialFormData: ChooseTechCohortInitialFormDataType = {
    name: '',
    contact: '',
    profession: '',
    program: '',
  };

  const [formData, dispatch] = useReducer(
    chooseTechCohortFormReducer,
    initialFormData
  );

  const handleFieldChange = (
    field: ChooseTechCohortFormFields,
    value: string
  ) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

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

    // setSelectedProgram(selectedProgram);

    if (selectedProgram) handleFieldChange('program', selectedProgram);
  };

  console.log('HERE', formData);

  const programRecommendationContainer = selectedOptionId && (
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
                selectedItemId={selectedOptionId}
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
                  <FlexContainer
                    direction='col'
                    className='gap-2.5'
                    itemCenter={false}
                  >
                    <Text level='label' className='pre-title text-white'>
                      Your profession
                    </Text>
                    <SelectInput
                      list={chooseTechCohortItems.map(
                        (chooseTechCohortItem) => chooseTechCohortItem.label
                      )}
                      selectedItem={formData.profession}
                      onChange={(value) =>
                        handleFieldChange('profession', value)
                      }
                    />
                  </FlexContainer>
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
