export interface INetflixOriginal {
  backdrop_path: string;
  first_air_date: string;
  id: number;
  name: string;
  origin_country: string[];
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IVideo {
  id: number;
  name?: string;
  title?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
}
