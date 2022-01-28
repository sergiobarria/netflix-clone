import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import axiosInstance from '@/utils/axiosInstance';
import { IVideo } from '@/../types';
import MediaCard from './MediaCard';
import clsx from 'clsx';

interface IProps {
  data: {
    title: string;
    url: string;
  };
}

export default function RowContainer({ data }: IProps) {
  const [mediaData, setMediaData] = React.useState<IVideo[] | null>(null);
  // const [scrollX, setScrollX] = React.useState<number>(0);

  const { title, url } = data;

  React.useEffect(() => {
    axiosInstance(url).then((res) => setMediaData(res.data.results));
  }, [url]);

  return (
    <section className='container mx-auto overflow-x-scroll relative'>
      <h3 className='text-2xl md:text-3xl mb-4'>{title}</h3>
      <div className='flex overflow-y-hidden overflow-x-scroll pb-8'>
        {mediaData &&
          mediaData.map((item: IVideo) => (
            <MediaCard key={item.id} content={item} />
          ))}
      </div>
    </section>
  );
}
