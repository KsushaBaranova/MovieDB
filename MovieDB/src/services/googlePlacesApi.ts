const baseUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

const apiKey = 'AIzaSyAOiABhZwXo7mHdOtauPfab12e2ll2IgpE';

export interface PlacePhoto {
  height: number;
  width: number;
  photo_reference: string;
}

export interface googlePlacesResponseItem {
  geometry: {
    location: {lat: number; lng: number};
    viewport: {
      northeast: {lat: number; lng: number};
      southwest: {lat: number; lng: number};
    };
  };
  name: string;
  vicinity?: string;
  photos?: Array<PlacePhoto>;
  rating?: number;
  user_ratings_total: number;
  types: [];
  place_id: string;
}

export interface placeDetailsResponse {
  result: {
    website?: string;
    opening_hours?: {
      open_now?: boolean;
      weekday_text?: Array<string>;
    };
  };
}

export interface googlePlacesResponse {
  results: googlePlacesResponseItem[];
  status: string;
}

export interface placesApiInterface<T> {
  fetchPlaces(lat: number, long: number): Promise<T>;
}

export interface placeDetailsApiInterface<T> {
  fetchPlaceDetails(id: string): Promise<T>;
}

class placesApi<T> implements placesApiInterface<T> {
  private async init(lat: number, long: number): Promise<Response> {
    return fetch(
      baseUrl +
        '?' +
        'keyword=cinema' +
        `&location=${lat}%2C${long}` +
        '&radius=8000' +
        '&type=movie_theater' +
        `&key=${apiKey}`,
    );
  }

  async fetchPlaces(lat: number, long: number): Promise<T> {
    return this.init(lat, long)
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
}

class placeDetailsApi<T> implements placeDetailsApiInterface<T> {
  private async init(id: string): Promise<Response> {
    return fetch(
      'https://maps.googleapis.com/maps/api/place/details/json' +
        '?fields=website%2Copening_hours' +
        `&place_id=${id}` +
        `&key=${apiKey}`,
    );
  }
  async fetchPlaceDetails(id: string): Promise<T> {
    return this.init(id)
      .then(response => response.json())
      .then(data => {
        return data as T;
      });
  }
}

export const placeDetails = new placeDetailsApi<placeDetailsResponse>();
export const places = new placesApi<googlePlacesResponse>();
