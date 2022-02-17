import React from 'react';

import clsx from 'clsx';

import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';

export default function Dropdown() {
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace('/');
  }

  return (
    <div>
      <button
        id='dropdownNavbarLink'
        data-dropdown-toggle='dropdownNavbar'
        onClick={() => setShowOptions(!showOptions)}
        className={clsx(
          'flex justify-between text-white items-center py-2 pr-4 pl-3 w-full',
          'border-b border-gray-100 hover:bg-gray-50',
          'md:hover:bg-transparent md:border-0 md:p-0 md:w-auto'
        )}
      >
        {user?.email}{' '}
        <svg
          className='ml-1 w-4 h-4'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
      {showOptions && (
        <div
          id='dropdownNavbar'
          className='absolute z-10 w-44 text-base list-none bg-black/80 divide-gray-100 shadow'
        >
          <div className='py-1'>
            <button
              className='block py-2 px-4 text-sm text-gray-200 hover:text-gray-500'
              onClick={handleLogout}
            >
              Sign out of Netflix
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
