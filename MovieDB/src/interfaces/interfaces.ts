export interface FilmCellProps {
  item: FilmModel;
  onPress?: () => void;
  imageUrl: string;
}

export interface FilmListState {
  item: Array<FilmModel>;
  loading: boolean;
  error: string | undefined;
}

export interface FilmInfoState {
  item: InfoFilmModel;
  loading: boolean;
  error: string | undefined;
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

export interface ListFilmResponse {
  results: Array<FilmDataResponse>;
}

export interface FilmDataResponse {
  id: string;
  poster_path: string;
  overview: string;
  title?: string;
  name?: string;
  media_type?: string;
}

export interface SearchBarProps {
  value: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface FilmInfoResponse {
  id: string;
  overview: string;
  title: string;
  genres: Array<{name: string}>;
  release_date: string;
  vote_average: number;
  production_countries: Array<{name: string}>;
  videos: VideoResponse;
}

export interface TVInfoResponse {
  id: string;
  overview: string;
  name: string;
  genres: Array<{name: string}>;
  first_air_date: string;
  vote_average: number;
  production_countries: Array<{name: string}>;
  videos: VideoResponse;
}

export interface VideoResponse {
  results: Array<{
    name: string;
    key: string;
    id: string;
    type: string;
  }>;
}

export interface InfoFilmModel {
  id: string;
  name: string | undefined;
  description: string;
  genres: string[];
  dateRealese: string;
  rating: number;
  country: string[];
  videos: VideoModel | undefined;
}

export interface VideoModel {
  name: string | undefined;
  key: string;
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
  onPress?: () => void;
}
