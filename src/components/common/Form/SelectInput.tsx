import { SelectInputProps } from '@/interfaces';

const SelectInput = ({ list, onChange, selectedItem }: SelectInputProps) => {
  return (
    <select className='w-full rounded' onChange={onChange}>
      {list.map((listItem, key) => {
        return (
          <option
            className='paragraph'
            key={key}
            value={listItem}
            selected={listItem === selectedItem}
          >
            {listItem}
          </option>
        );
      })}
    </select>
  );
};

export default SelectInput;
