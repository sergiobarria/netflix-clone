import React from 'react';

import Image from 'next/image';
import clsx from 'clsx';

interface IProps {
  feature: {
    id: number;
    title: string;
    subTitle: string;
    alt: string;
    image: string;
    direction: string;
  };
}

export default function Features({ feature }: IProps) {
  return (
    <section className='custom-border bg-black py-20'>
      <div
        className={clsx(
          `flex flex-col md:flex-${feature.direction}`,
          'px-12 justify-center items-center'
        )}
      >
        <div className='flex-1 text-center md:text-left space-y-3'>
          <h2 className='text-4xl md:text-5xl font-normal'>{feature.title}</h2>
          <p className='text-xl md:text-2xl'>{feature.subTitle}</p>
        </div>
        <div
          className={clsx(
            'md:flex-1 mt-8 md:mt-0 w-full md:w-24 h-60 lg:h-72 relative'
          )}
        >
          <Image
            src={feature.image}
            alt={feature.alt}
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
}
