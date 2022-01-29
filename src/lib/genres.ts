let page = Math.floor(Math.random() * 3) + 1;

export const genres = [
  { id: 1, title: 'Banner Content', url: `/trending/movie/week`, isTv: true },
  { id: 2, title: 'Top 10 Today', url: `/trending/movie/week` },
  { id: 3, title: 'Top Movies', url: `/movie/popular?&page=1` },
  {
    id: 4,
    title: 'Action',
    url: `/discover/movie?&page=${page}&with_genres=28`,
  },
  {
    id: 5,
    title: 'Comedy',
    url: `/discover/movie?&page=${page}&with_genres=35`,
  },
  {
    id: 6,
    title: 'Adventure',
    url: `/discover/movie?&page=${page}&with_genres=12`,
  },
  {
    id: 7,
    title: 'Netflix Originals',
    url: `/discover/tv?&page=1&with_networks=213`,
  },
  {
    id: 8,
    title: 'Drama',
    url: `/discover/movie?&page=${page}&with_genres=18`,
  },
  {
    id: 9,
    title: 'Family',
    url: `/discover/movie?&page=${page}&with_genres=10751`,
  },
  {
    id: 10,
    title: 'Science Fiction',
    url: `/discover/movie?&page=${page}&with_genres=878`,
  },
  {
    id: 11,
    title: 'Documentary',
    url: `/discover/movie?&page=${page}&with_genres=99`,
  },
  {
    id: 12,
    title: 'Horror',
    url: `/discover/movie?&page=${page}&with_genres=27`,
  },
  {
    id: 13,
    title: 'History',
    url: `/discover/movie?&page=${page}&with_genres=36`,
  },
  {
    id: 14,
    title: 'Romance',
    url: `/discover/movie?&page=${page}&with_genres=10749`,
  },
];

// const gens = [
//   { id: 16, name: 'Animation' },
//   { id: 80, name: 'Crime' },
//   { id: 99, name: 'Documentary' },
//   { id: 18, name: 'Drama' },
//   { id: 10751, name: 'Family' },
//   { id: 14, name: 'Fantasy' },
//   { id: 36, name: 'History' },
//   { id: 27, name: 'Horror' },
//   { id: 10402, name: 'Music' },
//   { id: 9648, name: 'Mystery' },
//   { id: 10749, name: 'Romance' },
//   { id: 878, name: 'Science Fiction' },
//   { id: 10770, name: 'TV Movie' },
//   { id: 53, name: 'Thriller' },
//   { id: 10752, name: 'War' },
//   { id: 37, name: 'Western' },
// ];
