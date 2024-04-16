import { Link } from '@/components';
import { NavbarDropdownContainerProps } from '@/interfaces';

const NavbarDropdownContainer = ({ links }: NavbarDropdownContainerProps) => {
  return (
    <div className='p-2'>
      {links.map(({ name, href, description, target }) => {
        return (
          <div
            key={name}
            className='group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-100'
          >
            <div>
              <Link
                href={href}
                className='text-base font-semibold text-black'
                target={target}
              >
                {name}
                <span className='absolute inset-0' />
              </Link>
              <p className='text-gray-600'>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarDropdownContainer;
