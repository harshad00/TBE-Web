import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Text } from '@/components';
import { SelectInputProps } from '@/interfaces';

const SelectInput = ({
  list,
  selectedItem,
  onChange,
  className = '',
}: SelectInputProps) => {
  const [search, setSearch] = useState('');

  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Listbox value={selectedItem} onChange={onChange}>
      <div className={`relative ${className}`}>
        {/* Button */}
        <Listbox.Button className='flex items-center gap-2 border border-grey rounded px-2 py-1 strong-text focus:outline-none focus:ring focus:ring-grey'>
          <Text level='span' className='truncate'>
            {selectedItem}
          </Text>
          <ChevronUpDownIcon className='h-3 w-4 text-grey ml-auto' />
        </Listbox.Button>

        {/* Dropdown */}
        <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-grey bg-white text-sm shadow-sm'>
          {/* Search */}
          <div className='px-2 py-1 border-b border-grey'>
            <input
              type='text'
              placeholder='Search...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-full rounded px-2 py-1 text-sm border border-grey focus:outline-none focus:ring focus:ring-grey'
            />
          </div>

          {/* Options */}
          {filteredList.map((item, idx) => (
            <Listbox.Option
              key={idx}
              value={item}
              className='cursor-pointer px-2 py-1 hover:bg-grey/10'
            >
              <Text level='span' className='truncate'>
                {item}
              </Text>
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default SelectInput;
