import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import clsx from 'clsx';

import { useAuth } from '@/hooks/useAuth';
import Dropdown from './Dropdown';

interface IProps {
  showLinks?: boolean;
  showBtn?: boolean;
}

export default function Navbar({ showLinks, showBtn }: IProps) {
  const { user } = useAuth();

  return (
    <nav
      className={clsx(
        'fixed top-0 flex items-center justify-between w-full px-12',
        'bg-gradient-to-b from-black/70 via-black/40 z-20 to-transparent'
      )}
    >
      <Link href='/'>
        <a>
          <Image
            src='/static/netflix.svg'
            width={100}
            height={75}
            alt='netflix logo'
          />
        </a>
      </Link>

      <div className='flex items-center justify-between w-full ml-8'>
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
        {showBtn && (
          <Link href='/login'>
            <a
              className={clsx(
                'bg-primary px-4 py-2 rounded-md',
                !showLinks && 'ml-auto'
              )}
            >
              Sign In
            </a>
          </Link>
        )}
        {user && <Dropdown />}
      </div>
    </nav>
  );
}
