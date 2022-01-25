const API_KEY = process.env.MOVIE_DB_API_KEY;

const endpoints = {
  httpTrendring: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  httpNetfflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  httpTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  httpActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  httpComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  httpHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  httpRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  httpDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default endpoints;
