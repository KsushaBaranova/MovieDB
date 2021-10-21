import {
  FilmInfoResponse,
  SearchingFilmResponse,
  TrendingFilmResponse,
  TVInfoResponse,
} from '../interfaces';
import {request, RequestType} from './apiManager';

export interface FilmApiInterface<T> {
  fetchTrending(orderBy: string[]): Promise<T>;
  searchFilms(query: object): Promise<T>;
  fetchFilmInfo(filmId: string[], append: object): Promise<T>;
  fetchTVInfo(filmId: string[], append: object): Promise<T>;
}

class FilmApi<T> implements FilmApiInterface<T> {
  private token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTM2NmIzM2IyY2IzZDU0ZGY5ZDgxZGZiYWUxYWRlMyIsInN1YiI6IjYxNjQ4YTJiOGM0MGY3MDAyYTc0MDFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nRzDNXNo9CxvJClIqjwYzheIgU80WObEswCn4ypjfnM';

  async fetchTrending(orderBy: string[]): Promise<T> {
    return request<T>(RequestType.fetchTrending, {
      token: this.token,
      params: orderBy,
    });
  }

  async searchFilms(query: object): Promise<T> {
    return request<T>(RequestType.searchFilms, {
      token: this.token,
      urlParams: query,
    });
  }

  async fetchFilmInfo(filmId: string[], append: object): Promise<T> {
    return request<T>(RequestType.fetchFilmInfo, {
      token: this.token,
      params: filmId,
      urlParams: append, // 'append_to_response=videos',
    });
  }

  async fetchTVInfo(filmId: string[], append: object): Promise<T> {
    return request<T>(RequestType.fetchTVInfo, {
      token: this.token,
      params: filmId,
      urlParams: append, // 'append_to_response=videos',
    });
  }
}

export const filmApi = new FilmApi<TrendingFilmResponse>();
export const searchApi = new FilmApi<SearchingFilmResponse>();
export const infoFilmApi = new FilmApi<FilmInfoResponse>();
export const infoTVApi = new FilmApi<TVInfoResponse>();
