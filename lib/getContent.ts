import { MOVIE_DB_BASE_URL } from '../constants';

import endpoints from './endpoints';

const API_KEY = process.env.MOVIE_DB_API_KEY;

export const fetchData = async (endpoint: string) => {
  try {
    const response = await fetch(`${MOVIE_DB_BASE_URL}${endpoint}`);
    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error('Something went wrong fetching data', error.message);
    return [];
  }
};

export const getAllContent = async () => {
  const { results: netflixOriginals } = await fetchData(
    endpoints.httpNetfflixOriginals
  );

  const { results: topRated } = await fetchData(endpoints.httpTopRated);
  const { results: trending } = await fetchData(endpoints.httpTrendring);
  const { results: actionMovies } = await fetchData(endpoints.httpActionMovies);
  const { results: comedyMovies } = await fetchData(endpoints.httpComedyMovies);
  const { results: horrorMovies } = await fetchData(endpoints.httpHorrorMovies);
  const { results: romanceMovies } = await fetchData(
    endpoints.httpRomanceMovies
  );
  const { results: documentaries } = await fetchData(
    endpoints.httpDocumentaries
  );

  return {
    content: {
      netflixOriginals,
      topRated,
      trending,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    },
  };
};
