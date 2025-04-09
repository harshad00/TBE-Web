import { CheckboxButtonContainer } from '@/components';
import { StepUsageProps } from '@/interfaces';
import { usageOptions } from '@/constant';
import { Text } from '@/components';

const StepUsage = ({ selected, onChange }: StepUsageProps) => (
  <>
    <Text level='h4' className='heading-4 p-1 mb-2'>
      3. How would You use the Platform?
    </Text>
    <CheckboxButtonContainer
      options={usageOptions.map((opt) => ({ label: opt.label, value: opt.id }))}
      selectedValues={selected}
      onChange={onChange}
    />
  </>
);

export default StepUsage;
