import {
  RequestSessionResponse,
  RequestTokenResponse,
  SearchingFilmResponse,
  TrendingFilmResponse,
  UserAccount,
} from '../interfaces';
import {request, RequestType} from './apiManager';

export interface FilmApiInterface<T> {
  fetchTrendingDefault(): Promise<T>;
  searchFilms(query: object): Promise<T>;
}

class FilmApi<T> implements FilmApiInterface<T> {
  private token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTM2NmIzM2IyY2IzZDU0ZGY5ZDgxZGZiYWUxYWRlMyIsInN1YiI6IjYxNjQ4YTJiOGM0MGY3MDAyYTc0MDFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nRzDNXNo9CxvJClIqjwYzheIgU80WObEswCn4ypjfnM';

  async fetchTrendingDefault(): Promise<T> {
    return request<T>(RequestType.fetchTrendingDefault, {
      token: this.token,
    });
  }

  async searchFilms(query: object): Promise<T> {
    return request<T>(RequestType.searchFilms, {
      token: this.token,
      urlParams: query,
    });
  }

  async createRequestToken(): Promise<T> {
    return request<T>(RequestType.createRequestToken, {
      token: this.token,
    });
  }

  async createSession(requestedToken: string): Promise<T> {
    return request<T>(RequestType.createSession, {
      body: {request_token: requestedToken},
      token: this.token,
    });
  }

  async fetchBookmarks(session_id: string, account_id: string): Promise<T> {
    return request<T>(RequestType.fetchBookmarks, {
      token: this.token,
      urlParams: {
        session_id: session_id,
      },
      params: [account_id],
    });
  }

  async fetchAccount(id: string): Promise<T> {
    return request<T>(RequestType.fetchAccount, {
      token: this.token,
      urlParams: {session_id: id},
    });
  }
}

export const filmApi = new FilmApi<TrendingFilmResponse>();
export const searchApi = new FilmApi<SearchingFilmResponse>();
export const requestTokenApi = new FilmApi<RequestTokenResponse>();
export const requestSessionIdApi = new FilmApi<RequestSessionResponse>();
export const bookmarksApi = new FilmApi<TrendingFilmResponse>();
export const accountApi = new FilmApi<UserAccount>();
