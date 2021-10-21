export interface FilmCellProps {
  item: FilmModel;
  onPress?: () => void;
}

export interface FilmListState {
  item: Array<FilmModel>;
  loading: boolean;
  error: string | null;
}

export interface FilmInfoState {
  movie: InfoFilmModel;
  tv: InfoTVModel;
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
  mediaType?: string;
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

export interface SearchBarProps {
  value: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface SearchingFilmResponse {
  results: Array<SearchDataResponse>;
}

export interface SearchDataResponse {
  id: string;
  poster_path: string;
  overview: string;
  title?: string;
  name?: string;
  media_type: string;
}

export interface FilmInfoResponse {
  id: string;
  poster_path: string;
  overview: string;
  title: string;
  genres: Array<{name: string}>;
  release_date: string;
  vote_average: number;
  production_countries: Array<ProductCountriesResponse>;
  production_companies: Array<ProductCompanyResponse>;
  videos: VideoResponse;
}

export interface TVInfoResponse {
  id: string;
  poster_path: string;
  overview: string;
  name: string;
  genres: Array<{name: string}>;
  vote_average: number;
  number_of_episodes: number;
  number_of_seasons: number;
  status: string;
  created_by: Array<{name: string}>;
  first_air_date: string;
  production_countries: Array<{name: string}>;
  videos: VideoResponse;
}

export interface VideoResponse {
  results: Array<{
    name: string;
    key: string;
    size: number;
    official: boolean;
    id: string;
  }>;
}

export interface GenresFilmResponse {
  name: string;
}

export interface ProductCompanyResponse {
  id: number;
  name: string;
  logo_path: string | null;
  origin_country: string;
}

export interface ProductCountriesResponse {
  name: string;
}

export interface InfoFilmModel {
  id: string;
  imageUrl: string;
  name: string | undefined;
  description: string;
  genres: string[];
  dateRealese: string;
  rating: number;
  videos: VideoModel;
}

export interface InfoTVModel {
  id: string;
  imageUrl: string;
  name: string | undefined;
  description: string;
  genres: string[];
  dateRealese: string;
  rating: number;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  country: [];
  videos: VideoModel;
}

export interface VideoModel {
  name: string | undefined;
  key: string;
  official?: boolean;
}
