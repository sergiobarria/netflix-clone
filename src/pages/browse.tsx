import React from 'react';

import Modal from 'react-modal';

import axiosInstance from '@/utils/axiosInstance';
import { genres } from '@/lib/genres';
import { MOVIE_DB_BASE_URL } from '@/constants';

import RowContainer from '@/components/RowContainer';
import Navbar from '@/components/Navbar';

import { IMedia } from '@/types';
import Banner from '@/components/Banner';
import MovieDetails from '@/components/MovieDetails';
import useModal from '@/hooks/useModal';

Modal.setAppElement('#__next');

export default function BrowsePage() {
  const [mediaData, setMediaData] = React.useState<IMedia[] | undefined>();
  const [randomBanner, setRandomBanner] = React.useState(1);
  const { state } = useModal();

  React.useEffect(() => {
    axiosInstance(`${MOVIE_DB_BASE_URL}${genres[0].url}`)
      .then((res) => setMediaData(res.data.results))
      .catch((err) => console.error(err));

    setRandomBanner(Math.floor(Math.random() * 20));
  }, []);

  const bannerContent = mediaData && mediaData[randomBanner];

  return (
    <>
      <Navbar showLinks />
      <Banner content={bannerContent && bannerContent} />
      {state.isModalOpen && <MovieDetails />}
      {genres.slice(1).map((genre) => (
        <RowContainer key={genre.id} data={genre} />
      ))}
    </>
  );
}
