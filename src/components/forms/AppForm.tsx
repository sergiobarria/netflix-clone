import React from 'react';

import { useRouter } from 'next/router';
import { Form, useFormikContext } from 'formik';

import InputField from '../InputField';
import SubmitButton from './SubmitButton';
import Link from 'next/link';

export default function LoginForm() {
  const router = useRouter();
  const { isSubmitting } = useFormikContext();

  return (
    <div className='bg-black/70 p-10 rounded-md'>
      <h2 className='text-4xl mb-6'>
        Sign {router.pathname === '/register' ? 'Up' : 'In'}
      </h2>

      <div className='w-[20rem]'>
        <Form className='space-y-4'>
          <InputField
            name='email'
            type='text'
            label='Email'
            placeholder='Email'
          />
          <InputField
            name='password'
            type='password'
            label='Password'
            placeholder='Password'
          />
          <SubmitButton className='w-full' isLoading={isSubmitting}>
            Sign {router.pathname === '/register' ? 'Up' : 'In'}
          </SubmitButton>

          <p className='text-gray-400'>
            {router.pathname === '/register'
              ? 'Already have an account?'
              : 'New to Netflix?'}{' '}
            <Link
              href={router.pathname === '/register' ? '/login' : '/register'}
            >
              <a className='text-white'>
                {router.pathname === '/register'
                  ? 'Login Instead'
                  : 'Sign up now'}
              </a>
            </Link>
            .
          </p>
        </Form>
      </div>
    </div>
  );
}
