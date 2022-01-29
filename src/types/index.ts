export interface IMedia {
  id: number;
  title?: string;
  name?: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_count: number;
  vote_average: number;
  genre_ids: number[];
  release_date: string;
  popularity: number;
}

export interface IVideo {
  id: string;
  key: string;
  name: string;
  publishedAt: string;
  type: string;
}

export interface IMediaDetail {
  id: number;
  title: string;
  name?: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  tagline: string;
  number_of_seasons?: number;
  similar_movies: {
    results: IMedia[];
  };
  runtime: number;
  release_date: string;
  first_air_date?: string;
  videos: {
    results: IVideo[];
  };
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  poster_path: string;
  credits: {
    cast: [
      {
        cast_id: number;
        name: string;
      }
    ];
  };
}
