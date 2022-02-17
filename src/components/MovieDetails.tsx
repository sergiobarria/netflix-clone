import React from 'react';

import clsx from 'clsx';
import { BiPlay } from 'react-icons/bi';
import { MdStar, MdTimer } from 'react-icons/md';

import axiosInstance from '@/utils/axiosInstance';
import ModalComponent from './ModalComponent';
import useModal from '@/hooks/useModal';
import { IMediaDetail, IMedia } from '@/types';
import YoutubeEmbedVideo from './YoutubeEmbedVideo';
import useConvertHours from '@/hooks/useConvertHours';
import Image from 'next/image';

export default function MovieDetails() {
  const [mediaContent, setMediaContent] = React.useState<
    IMediaDetail | undefined
  >(undefined);
  const [embedId, setEmbedId] = React.useState<string | null>(null);
  const [showVideo, setShowVideo] = React.useState<boolean>(false);
  const { state } = useModal();

  const runtime = useConvertHours(mediaContent?.runtime!);

  const url = `/movie/${state.id}?language=en-US&append_to_response=videos,credits,similar_movies,images&include_image_language=en,null`;

  React.useEffect(() => {
    axiosInstance(url).then((res) => setMediaContent(res.data));
  }, [url]);

  function handleVideoPlay(id: string) {
    setShowVideo(true);
    setEmbedId(id);
    setTimeout(() => {
      setShowVideo(false);
      setEmbedId(null);
    }, 30000);
  }

  return (
    <ModalComponent>
      <div
        className='relative flex flex-col w-full h-auto'
        style={{
          backgroundImage:
            mediaContent &&
            `url(https://image.tmdb.org/t/p/w780/${
              mediaContent?.backdrop_path || mediaContent?.poster_path
            })`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      >
        {showVideo && (
          <div className='w-full h-[400px] z-10'>
            {embedId && <YoutubeEmbedVideo videoId={embedId} />}
            {/* {embedId && <div>Video Container</div>} */}
          </div>
        )}
        {!showVideo && (
          <div className='min-h-[350px] flex items-center relative'>
            <div className='w-[20rem] ml-8  p-2'>
              <h1 className='text-2xl md:text-3xl'>
                {mediaContent?.title || mediaContent?.name}
              </h1>
              <button
                className={clsx(
                  'flex items-center text-black rounded-md my-4 bg-gray-light',
                  'text-lg px-2 py-1'
                )}
                onClick={() =>
                  handleVideoPlay(mediaContent?.videos.results[0].key!)
                }
              >
                <BiPlay className='text-3xl' />
                Play
              </button>
              <p className='text-lg italic'>{mediaContent?.tagline}</p>
            </div>
            <div
              className={clsx(
                'bg-gradient-to-b from-transparent to-gray-dark',
                'w-full h-16 absolute bottom-0'
              )}
            />
          </div>
        )}
      </div>
      {/* Content Body */}
      <div className='p-4'>
        <div className='flex items-center mb-3 space-x-3'>
          <p>
            {mediaContent?.release_date?.split('-')[0] ||
              mediaContent?.first_air_date?.split('-')[0]}
          </p>
          {!mediaContent?.number_of_seasons && (
            <p className='flex items-center'>
              <MdTimer /> {runtime}
            </p>
          )}
          <p className='flex items-center text-yellow-500'>
            <MdStar className='mr-1' /> {mediaContent?.vote_average}
          </p>
        </div>
        <div className='flex gap-8'>
          <p className='flex-[4]'>{mediaContent?.overview}</p>
          <div className='flex-[2] space-y-4'>
            {mediaContent?.credits.cast && (
              <p>
                <Tags
                  text='Cast'
                  tags={mediaContent?.credits.cast.slice(0, 3)!}
                />
              </p>
            )}
            {mediaContent?.genres && (
              <p>
                <Tags text='Genres' tags={mediaContent?.genres!} />
              </p>
            )}
          </div>
        </div>
        <div className='mt-6'>
          <h3 className='text-2xl font-bold'>More Like This</h3>
          <div className='grid grid-cols-3 gap-4 mt-3'>
            {mediaContent?.similar_movies?.results &&
              mediaContent?.similar_movies?.results?.map((item: IMedia) => (
                <div
                  key={item.id}
                  className='overflow-hidden rounded-md bg-gray-primary'
                >
                  <div className='relative w-full h-40'>
                    <Image
                      src={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
                      layout='fill'
                      objectFit='cover'
                      alt={item.name || item.title}
                    />
                  </div>
                  <div className='p-2'>
                    <h4 className='font-bold'>{item.title}</h4>
                    <div className='flex items-center mb-3 space-x-3 text-sm'>
                      <p>{item.release_date.split('-')[0]}</p>
                      <p className='flex items-center text-yellow-500'>
                        <MdStar className='mr-1' />{' '}
                        {item.vote_average.toFixed(1)}
                      </p>
                    </div>
                    <p className='text-sm text-gray-400'>
                      {item.overview.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </ModalComponent>
  );
}

interface TagsProps {
  text: string;
  tags: {
    id?: number;
    cast_id?: number;
    name: string;
  }[];
}

function Tags({ text, tags }: TagsProps) {
  return (
    <>
      <span className='text-gray-light'>{text}:</span>{' '}
      {tags.map((item: any, index: number) => (
        <span key={item.id}>
          {item.name}
          {index !== 2 && ', '}
        </span>
      ))}
    </>
  );
}
