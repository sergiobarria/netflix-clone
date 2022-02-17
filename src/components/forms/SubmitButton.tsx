import React, { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';
import Spinner from '../Spinner';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { children, className, isLoading, ...rest } = props;

  return (
    <button
      type='submit'
      {...rest}
      className={clsx(
        'bg-primary px-4 py-3 rounded-md',
        'flex items-center justify-center',
        className
      )}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}
