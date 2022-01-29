import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import axiosInstance from '@/utils/axiosInstance';
import { IMedia } from '@/types';
import MediaCard from './MediaCard';
import clsx from 'clsx';

import useModal from '@/hooks/useModal';
import { showModal } from '@/context/modal.actions';

interface IProps {
  data: {
    title: string;
    url: string;
  };
}

export default function RowContainer({ data }: IProps) {
  const [mediaData, setMediaData] = React.useState<IMedia[] | null>(null);
  const { dispatch } = useModal();
  // const [scrollX, setScrollX] = React.useState<number>(0);

  const { title, url } = data;

  React.useEffect(() => {
    axiosInstance(url).then((res) => setMediaData(res.data.results));
  }, [url]);

  function handleCardClick(id: number) {
    dispatch(showModal(id));
  }

  return (
    <section className='container relative mx-auto overflow-x-scroll'>
      <h3 className='mb-4 text-2xl md:text-3xl'>{title}</h3>
      <div className='flex pb-8 overflow-x-scroll overflow-y-hidden'>
        {mediaData &&
          mediaData.map((item: IMedia) => (
            <button key={item.id} onClick={() => handleCardClick(item.id)}>
              <MediaCard content={item} />
            </button>
          ))}
      </div>
    </section>
  );
}
