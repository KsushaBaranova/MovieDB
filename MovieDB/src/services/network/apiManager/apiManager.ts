export enum URLType {
  api = 'https://',
}

export enum Domain {
  movieDB = 'api.themoviedb.org/3/',
}

export enum RequestType {
  fetchTrending,
  searchFilms,
  fetchFilmInfo,
  fetchTVInfo,
  createRequestToken,
  createSession,
  fetchBookmarks,
  fetchAccount,
  fetchSimilarMovies,
  fetchSimilarTV,
  addToBookmarks,
  fetchAccountStates,
  fetchAccountStatesTV,
  fetchBookmarksTV,
}

const getRequestService = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.fetchTrending:
      return 'trending/';
    case RequestType.searchFilms:
      return 'search/multi';
    case RequestType.fetchFilmInfo:
      return 'movie/';
    case RequestType.fetchTVInfo:
      return 'tv/';
    case RequestType.createRequestToken:
      return 'authentication/token/new';
    case RequestType.createSession:
      return 'authentication/session/new';
    case RequestType.fetchBookmarks:
    case RequestType.fetchBookmarksTV:
      return 'account/';
    case RequestType.fetchAccount:
      return 'account';
    case RequestType.fetchSimilarMovies:
      return 'movie/';
    case RequestType.fetchSimilarTV:
      return 'tv/';
    case RequestType.addToBookmarks:
      return 'account/';
    case RequestType.fetchAccountStates:
      return 'movie/';
    case RequestType.fetchAccountStatesTV:
      return 'tv/';
    default:
      return '';
  }
};

const getRequestString = (requestType: RequestType, params: string[]) => {
  const serviceType = getRequestService(requestType);

  switch (requestType) {
    case RequestType.fetchTrending:
    case RequestType.fetchFilmInfo:
      return serviceType + params[0];
    case RequestType.fetchTVInfo:
      return serviceType + params[0];
    case RequestType.searchFilms:
    case RequestType.createRequestToken:
    case RequestType.createSession:
    case RequestType.fetchAccount:
      return serviceType;
    case RequestType.fetchBookmarks:
      return serviceType + params[0] + '/favorite/movies';
    case RequestType.fetchBookmarksTV:
      return serviceType + params[0] + '/favorite/tv';
    case RequestType.fetchSimilarMovies:
      return serviceType + params[0] + '/similar';
    case RequestType.fetchSimilarTV:
      return serviceType + params[0] + '/similar';
    case RequestType.addToBookmarks:
      return serviceType + params[0] + '/favorite';
    case RequestType.fetchAccountStates:
    case RequestType.fetchAccountStatesTV:
      return serviceType + params[0] + '/account_states';
    default:
      return '';
  }
};

const getContentType = (requestType: RequestType) => {
  switch (requestType) {
    default:
      return 'application/json;charset=utf-8';
  }
};

const getRequestType = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.fetchTrending:
    case RequestType.searchFilms:
    case RequestType.fetchFilmInfo:
    case RequestType.fetchTVInfo:
    case RequestType.createRequestToken:
    case RequestType.fetchBookmarks:
    case RequestType.fetchBookmarksTV:
    case RequestType.fetchAccount:
    case RequestType.fetchAccountStates:
    case RequestType.fetchAccountStatesTV:
    case RequestType.fetchSimilarMovies:
    case RequestType.fetchSimilarTV:
      return 'GET';
    case RequestType.createSession:
    case RequestType.addToBookmarks:
      return 'POST';
  }
};

const needAuthorization = (requestType: RequestType) => {
  switch (requestType) {
    default:
      return true;
  }
};

const createBody = (requestType: RequestType, body?: Object | undefined) => {
  switch (requestType) {
    default:
      return JSON.stringify(body);
  }
};

export const request = async <T>(
  requestType: RequestType,
  params: {
    body?: Object;
    token?: string;
    urlParams?: Object;
    params?: string[];
  },
  serverType: URLType = URLType.api,
  domain: Domain = Domain.movieDB,
) => {
  let headers: HeadersInit_ = {
    'Content-Type': getContentType(requestType),
  };
  if (needAuthorization(requestType)) {
    headers = {...headers, Authorization: 'Bearer ' + params.token || ''};
  }

  let paramsString = '';
  if (params.urlParams) {
    for (const [key, value] of Object.entries(params.urlParams)) {
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => {
            paramsString += paramsString.length === 0 ? '?' : '&';
            paramsString += key + '=' + item;
          });
        } else {
          paramsString += paramsString.length === 0 ? '?' : '&';
          paramsString += key + '=' + value;
        }
      }
    }
  }

  const url =
    serverType +
    domain +
    getRequestString(requestType, params.params || []) +
    paramsString;
  return new Promise<T>((resolve, reject) => {
    fetch(url, {
      method: getRequestType(requestType),
      headers,
      body: createBody(requestType, params.body),
    })
      .then(response => {
        if (response.status === 401) {
          reject('Unauthorized');
        } else {
          response
            .json()
            .then((data: T) => {
              resolve(data);
            })
            .catch(err => {
              reject(err.message);
            });
        }
      })
      .catch(err => {
        console.log('err', err);
        reject(err);
      });
  });
};
