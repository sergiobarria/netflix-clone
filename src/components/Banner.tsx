import React from 'react';

import Image from 'next/image';

import clsx from 'clsx';

import { MOVIE_IMAGE_BASE_URL } from '@/constants';
import { IMedia } from '@/types';
import useModal from '@/hooks/useModal';
import { showModal } from '@/context/modal.actions';
import PlayButton from './PlayButton';

export default function Banner({ content }: { content?: IMedia }) {
  const { dispatch } = useModal();

  function playButtonAction() {
    dispatch(showModal(content?.id!));
  }

  return (
    <div
      className='h-[700px] mb-6 relative flex items-center'
      style={{
        backgroundImage:
          content &&
          `url(${MOVIE_IMAGE_BASE_URL}${content && content.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
      }}
    >
      <article className='bg-black/50 p-4 rounded-md ml-12 max-w-[40rem]'>
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
        <PlayButton
          movieId={content?.id!}
          playButtonFunction={playButtonAction}
        />
        <p className='text-xl'>
          {content && content.overview.substring(0, 150)}...
        </p>
      </article>
      <div
        className={clsx(
          'bg-gradient-to-b from-transparent to-gray-dark',
          'w-full h-20 absolute bottom-0'
        )}
      />
    </div>
  );
}
