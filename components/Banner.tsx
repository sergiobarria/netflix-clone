import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { IVideo } from '../types';

import styles from './Banner.module.scss';
import { IMAGE_BASE_URL } from '../constants';

interface IProps {
  content: IVideo;
}

export default function Banner({ content }: IProps) {
  return (
    <header
      className={styles.banner}
      style={
        content && {
          backgroundImage: `url(${IMAGE_BASE_URL}${content?.backdrop_path})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }
      }
    >
      <div className={styles.banner__content}>
        <div className={styles.banner__category}>
          <Image
            src='/static/Netflix_Symbol_RGB.png'
            alt='netflix symbol'
            width={40}
            height={60}
          />
          <span>Series</span>
        </div>
        <div className={styles.banner__seriesData}>
          <h1>{content?.name || content?.title}</h1>
          <div className={styles.banner__btnContainer}>
            <Link href={`/watch/${content?.id}?cat=tv`}>
              <a className={styles.btnWhite}>
                <Image
                  src='/static/play_arrow.svg'
                  alt='Play icon'
                  width='32px'
                  height='32px'
                />
                Play
              </a>
            </Link>
            <Link href={`/watch/${content?.id}?cat=tv`}>
              <a className={styles.btnGray}>
                <Image
                  src='/static/info_black_24dp.svg'
                  alt='Play icon'
                  width='32px'
                  height='32px'
                  className={styles.info}
                />
                Info
              </a>
            </Link>
          </div>
          <p>{content?.overview.substring(0, 200)}...</p>
        </div>
      </div>
      <div className={styles.overlay} />
    </header>
  );
}
