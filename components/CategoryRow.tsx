import React from 'react';

import Link from 'next/link';

import { IVideo } from '../types';
import Card from './Card';

import styles from './CategoryRow.module.scss';

interface IProps {
  title: string;
  content: IVideo[];
}

export default function CategoryRow({ title, content }: IProps) {
  return (
    <section className={styles.sectionContainer}>
      <h2>{title}</h2>
      <div className={styles.rowContainer}>
        {content.map((item: IVideo) => (
          <Link key={item.id} href={`/watch/${item.id}`}>
            <a>
              <Card id={item.id} video={item} />
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
