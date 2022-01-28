import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';
import { RiArrowRightSFill } from 'react-icons/ri';

import { MOVIE_IMAGE_BASE_URL } from '@/constants';
import { IVideo } from '@/../types';

export default function Banner({ content }: { content?: IVideo }) {
  return (
    <div
      className='h-[700px] mb-6 relative flex items-center'
      style={{
        backgroundImage: `url(${MOVIE_IMAGE_BASE_URL}${
          content && content.backdrop_path
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <article className='bg-black/50 p-4 z-10 rounded-md ml-12 max-w-[40rem]'>
        <p className='flex items-center'>
          <Image
            src='/static/Netflix_Symbol_RGB.png'
            alt='netflix symbol'
            width={40}
            height={60}
          />
          <span className='text-2xl'>Series</span>
        </p>
        <h1 className='mb-4'>{content && (content.name || content.title)}</h1>
        <button
          className={clsx(
            'flex items-center text-black text-2xl rounded-md',
            'my-4 bg-gray-light px-4 py-2'
          )}
        >
          <RiArrowRightSFill className='text-3xl' />
          Play
        </button>
        <p className='text-xl'>
          {content && content.overview.substring(0, 150)}...
        </p>
      </article>
      <div className='bg-black/30 absolute inset-0' />
      <div
        className={clsx(
          'bg-gradient-to-b from-transparent to-gray-dark',
          'w-full h-20 absolute bottom-0'
        )}
      />
    </div>
  );
}
