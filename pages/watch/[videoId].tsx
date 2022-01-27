import React from 'react';

import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';

import Modal from 'react-modal';
import Youtube, { Options } from 'react-youtube';
// @ts-ignore
import movieTrailer from 'movie-trailer';

import Navbar from '../../components/Navbar';

import { MOVIE_DB_BASE_URL, API_KEY } from '../../constants';
import styles from '../../styles/Watch.module.scss';

Modal.setAppElement('#__next');

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { videoId } = context.query;
  const { cat } = context.query;

  // example query
  // https://api.themoviedb.org/3/tv/63174?api_key=API_KEY

  const response = await fetch(
    `${MOVIE_DB_BASE_URL}/${cat}/${videoId}?api_key=${API_KEY}`
  );

  const videoInfo = await response.json();
  // console.log(videoInfo);

  return {
    props: {
      videoInfo,
    },
  };
}

export default function VideoIdPage({
  videoInfo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [video, setVideo] = React.useState<string | null>('');
  const router = useRouter();

  React.useEffect(() => {
    movieTrailer(videoInfo?.name || videoInfo.title || videoInfo.original_name)
      .then((url: string) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setVideo(urlParams.get('v'));
      })
      .catch(() => {
        // console.error(error)
        setVideo('Pj0wz7zu3Ms');
      });
  }, [videoInfo]);

  const opts: Options = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className={styles.container}>
      <Navbar />
      {/* Video Page {videoInfo.name || videoInfo.title} */}
      <Modal
        isOpen={true}
        contentLabel='Watch the video'
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        {video && <Youtube videoId={video} opts={opts} />}

        {/* Modal Content */}
        <div className={styles.modalBody}>
          <div className={styles.modalBody__content}>
            <div className={styles.modalBody__colOne}>
              <p className={styles.modalBody__publishedTime}>
                {videoInfo?.first_air_date || videoInfo?.last_air_date}
              </p>
              <h3 className={styles.modalBody__title}>
                {videoInfo?.name || videoInfo?.title}
              </h3>
              <p className={styles.modalBody__description}>
                {videoInfo?.overview}
              </p>
            </div>
            <div className={styles.modalBody__tags}>
              {videoInfo.number_of_seasons && (
                <p>
                  <span>Number of Seasons:</span> {videoInfo.number_of_seasons}
                </p>
              )}
              {videoInfo.vote_average && (
                <p>
                  <span>Vote Avg:</span> {videoInfo.vote_average}
                </p>
              )}
              {videoInfo.vote_count && (
                <p>
                  <span>Vote Count:</span> {videoInfo.vote_count}
                </p>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
