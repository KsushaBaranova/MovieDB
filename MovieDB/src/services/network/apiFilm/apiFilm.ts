import {request, RequestType} from '..';
import {
  AccountStateResponse,
  FilmInfoResponse,
  ListFilmResponse,
  RequestSessionResponse,
  RequestTokenResponse,
  TVInfoResponse,
  UserAccount,
} from '../../../interfaces/interfaces';

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
  async fetchBookmarksTV(session_id: string, account_id: string): Promise<T> {
    return request<T>(RequestType.fetchBookmarksTV, {
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

  async fetchFilmInfo(filmId: string[], append: object): Promise<T> {
    return request<T>(RequestType.fetchFilmInfo, {
      token: this.token,
      params: filmId,
      urlParams: append,
    });
  }

  async fetchTVInfo(filmId: string[], append: object): Promise<T> {
    return request<T>(RequestType.fetchTVInfo, {
      token: this.token,
      params: filmId,
      urlParams: append,
    });
  }

  async fetchSimilar(movie_id: string): Promise<T> {
    return request<T>(RequestType.fetchSimilarMovies, {
      token: this.token,
      params: [movie_id],
    });
  }
  async fetchSimilarTV(movie_id: string): Promise<T> {
    return request<T>(RequestType.fetchSimilarTV, {
      token: this.token,
      params: [movie_id],
    });
  }

  async addBookmark(
    movie_id: string,
    media_type: string,
    accountId: string,
    session_id: string,
  ): Promise<T> {
    return request<T>(RequestType.addToBookmarks, {
      token: this.token,
      urlParams: {session_id: session_id},
      body: {media_type: media_type, media_id: movie_id, favorite: true},
      params: [accountId],
    });
  }

  async removeBookmark(
    movie_id: string,
    media_type: string,
    accountId: string,
    session_id: string,
  ): Promise<T> {
    return request<T>(RequestType.addToBookmarks, {
      token: this.token,
      urlParams: {session_id: session_id},
      body: {media_type: media_type, media_id: movie_id, favorite: false},
      params: [accountId],
    });
  }

  async fetchAccountState(filmId: string[], session_id: string): Promise<T> {
    return request<T>(RequestType.fetchAccountStates, {
      token: this.token,
      params: filmId,
      urlParams: {session_id: session_id},
    });
  }

  async fetchAccountStateTV(filmId: string[], session_id: string): Promise<T> {
    return request<T>(RequestType.fetchAccountStatesTV, {
      token: this.token,
      params: filmId,
      urlParams: {session_id: session_id},
    });
  }
}

export const filmApi = new FilmApi<ListFilmResponse>();
export const searchApi = new FilmApi<ListFilmResponse>();
export const requestTokenApi = new FilmApi<RequestTokenResponse>();
export const requestSessionIdApi = new FilmApi<RequestSessionResponse>();
export const bookmarksApi = new FilmApi<ListFilmResponse>();
export const accountApi = new FilmApi<UserAccount>();
export const infoFilmApi = new FilmApi<FilmInfoResponse>();
export const infoTVApi = new FilmApi<TVInfoResponse>();
export const accountStateApi = new FilmApi<AccountStateResponse>();
export const similarMoviesApi = new FilmApi<ListFilmResponse>();
