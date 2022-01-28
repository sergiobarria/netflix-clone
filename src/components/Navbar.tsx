import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import clsx from 'clsx';

interface IProps {
  showLinks?: boolean;
}

export default function Navbar({ showLinks }: IProps) {
  return (
    <nav
      className={clsx(
        'fixed top-0 flex items-center justify-between w-full px-12',
        'bg-gradient-to-b from-black/70 via-black/40 z-20 to-transparent'
      )}
    >
      <Image
        src='/static/netflix.svg'
        width={100}
        height={75}
        alt='netflix logo'
      />

      <div className='ml-8 w-full flex items-center justify-between'>
        {showLinks && (
          <div className='space-x-6'>
            <Link href='/'>
              <a>Home</a>
            </Link>
            <Link href='/my-list'>
              <a>My List</a>
            </Link>
          </div>
        )}
        <Link href='/signin'>
          <a
            className={clsx(
              'bg-primary px-4 py-2 rounded-md',
              !showLinks && 'ml-auto'
            )}
          >
            Sign In
          </a>
        </Link>
      </div>
    </nav>
  );
}
