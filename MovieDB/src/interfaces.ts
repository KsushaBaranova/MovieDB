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

export interface RequestTokenResponse {
  success: string;
  request_token: string;
}

export interface RequestSessionResponse {
  success: string;
  session_id: string;
}

export interface BookmarksState {
  items: Array<FilmModel>;
  sessionInitiated: boolean;
  session_id: string;
  error: string | null;
}

export interface UserAccount {
  id: string;
}

export interface BookmarksCellProps {
  item: FilmModel;
  listLength: number;
  itemIndex: number;
}
