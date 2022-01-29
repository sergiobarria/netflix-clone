import React from 'react';

import clsx from 'clsx';

import { BiPlay } from 'react-icons/bi';

interface Props {
  movieId?: number;
  isLarge?: boolean;
  playButtonFunction: Function;
}

export default function PlayButton({
  playButtonFunction,
  movieId,
  isLarge,
}: Props) {
  function handleOnClick() {
    playButtonFunction();
  }

  return (
    <button
      className={clsx(
        'flex items-center text-black rounded-md my-4 bg-gray-light',
        !isLarge && 'text-lg px-2 py-1',
        isLarge && 'text-2xl px-4 py-2'
      )}
      onClick={handleOnClick}
    >
      <BiPlay className='text-3xl' />
      Play
    </button>
  );
}
