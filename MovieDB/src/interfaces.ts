export interface FilmCellProps {
  item: FilmModel;
  onPress?: () => void;
}

export interface TrendingState {
  item: Array<FilmModel>;
  loading: boolean;
  error: string | null;
}

export interface SearchState {
  item: Array<FilmModel>;
  loading: boolean;
  error: string | null;
}

export interface FilmInfoState {
  item: InfoFilmModel;
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
  title: string;
}

export interface FilmInfoResponse {
  id: string;
  poster_path: string;
  overview: string;
  title: string;
  genres: Array<GenresFilmResponse>;
  release_date: string;
  vote_average: number;
  production_countries: Array<ProductCountriesResponse>;
  production_companies: Array<ProductCompanyResponse>;
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
}
