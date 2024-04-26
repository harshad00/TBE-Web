import { Disclosure } from '@headlessui/react';
import { FlexContainer, Text } from '@/components';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { AccordionProps } from '@/interfaces';

const Accordion = ({ title, children }: AccordionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className='flex w-full justify-between items-center rounded border px-2 py-1 strong-text hover:bg-gray-200'>
            <Text level='span' className='strong-text text-greyDark'>
              {title}
            </Text>
            <ChevronUpIcon
              className={`transition text-greyDark ${
                !open ? 'rotate-180 transform' : ''
              } h-5 w-5`}
            />
          </Disclosure.Button>
          <FlexContainer justifyCenter={false} className='my-1 w-full'>
            {children}
          </FlexContainer>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
