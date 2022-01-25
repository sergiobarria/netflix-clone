import React from 'react';
import Head from 'next/head';
import { InferGetServerSidePropsType } from 'next';

import { getAllContent } from '../lib/getContent';

import CategoryRow from '../components/CategoryRow';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

import styles from '../styles/Browse.module.scss';
import { IVideo } from '../types';

export async function getServerSideProps() {
  const { content } = await getAllContent();

  return {
    props: {
      content,
    },
  };
}

export default function BrowsePage({
  content,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [netflixOriginals, setNetflixOriginals] = React.useState<IVideo[]>([]);

  React.useEffect(() => {
    setNetflixOriginals(content.netflixOriginals);
  }, [content.netflixOriginals]);

  return (
    <>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <div className={styles.container}>
        {/* Navbar */}
        <Navbar />

        {/* Banner */}
        <Banner
          content={
            netflixOriginals &&
            netflixOriginals[
              Math.floor(Math.random() * netflixOriginals.length - 1)
            ]
          }
        />

        {/* Content */}
        <CategoryRow
          title='Netflix Originals'
          content={content.netflixOriginals}
        />
        <CategoryRow title='Top Rated' content={content.topRated} />
        <CategoryRow title='Trending Now' content={content.trending} />
        <CategoryRow title='Action Movies' content={content.actionMovies} />
        <CategoryRow title='Comedy Movies' content={content.comedyMovies} />
        <CategoryRow title='Horror Movies' content={content.horrorMovies} />
        <CategoryRow title='Romance Movies' content={content.romanceMovies} />
        <CategoryRow title='Documentaries' content={content.documentaries} />
      </div>
    </>
  );
}
