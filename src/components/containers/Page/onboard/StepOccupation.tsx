import { RadioButtonContainer, GridContainer, Text } from '@/components';
import { StepOccupationProps } from '@/interfaces';

const StepOccupation = ({ value, onChange }: StepOccupationProps) => (
  <>
    <Text level='h4' className='heading-4 p-1 mb-2'>
      2. What do You do?
    </Text>
    <GridContainer className='grid-row-2 gap-4'>
      <RadioButtonContainer
        options={[
          { label: 'Student', value: 'Student' },
          { label: 'Working Professional', value: 'Working Professional' },
        ]}
        selectedValue={value}
        onChange={onChange}
      />
    </GridContainer>
  </>
);

export default StepOccupation;
