import React, { InputHTMLAttributes } from 'react';

import { useField } from 'formik';
import clsx from 'clsx';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export default function InputField(props: InputFieldProps) {
  const { name, label, ...rest } = props;
  const [field, meta] = useField(name);

  return (
    <div className='relative w-full'>
      <div>
        <input
          {...field}
          {...rest}
          className={clsx(
            'peer border-0 w-full py-4 px-3',
            'focus:ring-primary focus:border-0',
            'placeholder-transparent focus:outline-none',
            'bg-[#333333] text-gray-300 rounded-md'
          )}
        />
        <label
          className={clsx(
            'peer-placeholder-shown:text-base',
            'peer-placeholder-shown:top-4 transition-all',
            'peer-focus:top-1 peer-focus:text-gray-light',
            'peer-focus:text-xs',
            'absolute left-3 text-xs top-1 text-gray-light'
          )}
        >
          {label}
        </label>
      </div>
      {meta.touched && meta.error && (
        <p className='text-sm text-[#CB6C04]'>{meta.error}</p>
      )}
    </div>
  );
}
