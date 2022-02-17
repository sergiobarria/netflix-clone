import React from 'react';

import { useRouter } from 'next/router';
import clsx from 'clsx';
import { IoIosArrowForward } from 'react-icons/io';

export default function HomeForm() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const router = useRouter();

  async function handleLoginWithEmail(email: string) {
    console.log(email);
  }
  return (
    <form>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div
        className={clsx(
          'flex flex-col items-center mt-4 justify-center',
          'space-y-4 md:space-y-0 md:flex-row'
        )}
      >
        <div className='relative flex flex-col text-black'>
          <input
            id='email'
            type='email'
            placeholder='Email address'
            className={clsx(
              'peer border-0 w-[22rem] md:w-[26rem] py-4 placeholder-transparent',
              'focus:ring-primary focus:border-0'
            )}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor='email'
            className={clsx(
              'peer-placeholder-shown:text-base',
              'peer-placeholder-shown:top-4 transition-all',
              'peer-focus:top-1 peer-focus:text-gray-light peer-focus:text-xs',
              'absolute left-3 text-xs top-1 text-gray-light'
            )}
          >
            Email address
          </label>
        </div>
        <button
          className='p-4 bg-primary'
          onClick={(e) => {
            e.preventDefault();
            handleLoginWithEmail(email);
          }}
        >
          {loading ? (
            'Loading'
          ) : (
            <span className='flex items-center'>
              Get Started <IoIosArrowForward />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
