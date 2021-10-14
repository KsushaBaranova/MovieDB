export interface FilmCellProps {
  item: FilmModel;
}

export interface FilmsState {
  items: Array<FilmModel>;
  loading: boolean;
  error: string | null;
}

export interface DescriptionCellProps {
  nameFilm: string | undefined;
  description: string;
}

export interface FilmModel {
  id: string;
  imageUrl: string;
  name: string | undefined;
  description: string;
}

export interface TrendingFilmResponse {
  results: Array<FilmDataResponse>;
}

export interface FilmDataResponse {
  id: string;
  poster_path: string;
  overview: string;
  title?: string;
  name?: string;
}
