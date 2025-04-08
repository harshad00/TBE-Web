import { RadioButtonContainer, GridContainer } from '@/components';
import { StepOccupationProps } from '@/interfaces';

const StepOccupation = ({ value, onChange }: StepOccupationProps) => (
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
);

export default StepOccupation;
