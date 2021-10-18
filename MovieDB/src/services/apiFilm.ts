import {SearchingFilmResponse, TrendingFilmResponse} from '../interfaces';
import {request, RequestType} from './apiManager';

export interface FilmApiInterface<T> {
  fetchTrendingDefault(orderBy: string[]): Promise<T>;
  searchFilms(query: object): Promise<T>;
}

class FilmApi<T> implements FilmApiInterface<T> {
  private token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTM2NmIzM2IyY2IzZDU0ZGY5ZDgxZGZiYWUxYWRlMyIsInN1YiI6IjYxNjQ4YTJiOGM0MGY3MDAyYTc0MDFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nRzDNXNo9CxvJClIqjwYzheIgU80WObEswCn4ypjfnM';

  async fetchTrendingDefault(orderBy: string[]): Promise<T> {
    return request<T>(RequestType.fetchTrendingDefault, {
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
}

export const filmApi = new FilmApi<TrendingFilmResponse>();
export const searchApi = new FilmApi<SearchingFilmResponse>();