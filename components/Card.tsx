import React from 'react';

import Image from 'next/image';

import styles from './Card.module.scss';
import { IMAGE_BASE_URL } from '../constants';

import { IVideo } from '../types';

interface IProps {
  id: number;
  video: IVideo;
}

export default function Card({ id, video }: IProps) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={`${IMAGE_BASE_URL}${video?.backdrop_path}`}
          layout='fill'
          objectFit='cover'
          alt={video?.name || video?.title}
        />
      </div>
    </article>
  );
}
