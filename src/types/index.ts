export interface IVideo {
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
  popularity: number;
}
