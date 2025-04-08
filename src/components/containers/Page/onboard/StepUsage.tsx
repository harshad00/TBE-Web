import { CheckboxButtonContainer } from '@/components';
import { StepUsageProps } from '@/interfaces';
import { usageOptions } from '@/constant';

const StepUsage = ({ selected, onChange }: StepUsageProps) => (
  <CheckboxButtonContainer
    options={usageOptions.map((opt) => ({ label: opt.label, value: opt.id }))}
    selectedValues={selected}
    onChange={onChange}
  />
);

export default StepUsage;
