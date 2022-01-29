import React from 'react';

interface Props {
  videoId: string;
}

export default function YoutubeEmbedVideo({ videoId }: Props) {
  return (
    <div className='relative h-full overflow-hidden pb-[20.25%]'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&playsinline=1`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Youtube Embedded'
        className='absolute inset-0 w-full h-full'
      />
    </div>
  );
}
