import React from 'react';

import Image from 'next/image';
import clsx from 'clsx';

import { MOVIE_IMAGE_BASE_URL } from '@/constants';

import { IMedia } from '@/types';

export default function MediaCard({ content }: { content: IMedia }) {
  return (
    <article
      className={clsx(
        'w-[18.75rem] h-[10.625rem] px-1 shrink-0 cursor-pointer',
        'hover:scale-105 transition duration-200'
      )}
    >
      <div className='relative w-full h-full overflow-hidden rounded-lg'>
        <Image
          src={`${MOVIE_IMAGE_BASE_URL}${
            content?.backdrop_path || content?.poster_path
          }`}
          alt={content?.name || content?.title}
          layout='fill'
          objectFit='contain'
        />
      </div>
    </article>
  );
}
