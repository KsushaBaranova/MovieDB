export enum URLType {
  api = 'https://',
}

export enum Domain {
  movieDB = 'api.themoviedb.org/3/',
}

export enum RequestType {
  fetchTrending,
  searchFilms,
  createRequestToken,
  createSession,
  fetchBookmarks,
  fetchAccount,
}

const getRequestService = (requestType: RequestType) => {
  switch (requestType) {
    case RequestType.fetchTrending:
      return 'trending/';
    case RequestType.searchFilms:
      return 'search/multi';
    case RequestType.createRequestToken:
      return 'authentication/token/new';
    case RequestType.createSession:
      return 'authentication/session/new';
    case RequestType.fetchBookmarks:
      return 'account/';
    case RequestType.fetchAccount:
      return 'account';
    default:
      return '';
  }
};

const getRequestString = (requestType: RequestType, params: string[]) => {
  const serviceType = getRequestService(requestType);

  switch (requestType) {
    case RequestType.fetchTrending:
      return serviceType + params[0];
    case RequestType.searchFilms:
    case RequestType.createRequestToken:
    case RequestType.createSession:
    case RequestType.fetchAccount:
      return serviceType;
    case RequestType.fetchBookmarks:
      return serviceType + params[0] + '/favorite/movies';
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
    case RequestType.createRequestToken:
    case RequestType.fetchBookmarks:
    case RequestType.fetchAccount:
      return 'GET';
    case RequestType.createSession:
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
