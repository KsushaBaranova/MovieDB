import React, {useEffect, useState} from 'react';
import {Alert, Linking, Platform, View} from 'react-native';
import MapView, {Callout, LatLng, Marker} from 'react-native-maps';
import {
  googlePlacesResponse,
  placeDetailsResponse,
  placeDetails,
  PlacePhoto,
  places,
} from '../../services/googlePlacesApi';
import Geolocation from 'react-native-geolocation-service';
import {
  permissionAndroid,
  requestAndroidLocation,
  permissionIos,
  requestIOSLocation,
} from '../../services/requsetLocation';
import {mapNavigationStyles} from './mapNavigationStyles';
import MarkerCallout from './MarkerCallout';

interface cinemaMarkers {
  title: string;
  coordinate: LatLng;
  description: {
    formatted_adress?: string;
    photos?: Array<PlacePhoto>;
    rating?: number;
    website?: string;
    user_ratings_total: number;
    opening_hours?: {
      open_now?: boolean;
      weekday_text?: Array<string>;
    };
    id: string;
  };
  types: [];
}

let coordinates = {
  latitude: 50.005743,
  longitude: 36.229128,
};
let locationDefined = false;

const MapNavigation = () => {
  const [markers, setMarkers] = useState<cinemaMarkers[]>([]);

  let mapRef: MapView | null;

  const fetchMarkers = () => {
    places
      .fetchPlaces(coordinates.latitude, coordinates.longitude)
      .then((values: googlePlacesResponse) => {
        let response: cinemaMarkers[] = values.results.map(item => {
          return {
            title: item.name,
            coordinate: {
              latitude: item.geometry.location.lat,
              longitude: item.geometry.location.lng,
            },
            description: {
              formatted_adress: item.vicinity,
              photos: item.photos,
              rating: item.rating,
              user_ratings_total: item.user_ratings_total,
              id: item.place_id,
            },
            types: item.types,
          };
        });

        response = response.filter(
          item =>
            item.types.length < 4 && item.description.user_ratings_total > 100,
        );

        const fetchDetails = async () => {
          for (let item of response) {
            await placeDetails
              .fetchPlaceDetails(item.description.id)
              .then((value: placeDetailsResponse) => {
                item.description.website = value.result.website;
                item.description.opening_hours = value.result.opening_hours;
              });
          }
        };

        fetchDetails().then(() => {
          setMarkers(response);
        });
      })
      .catch(error => {
        console.log('fetch error: ', error);
      });
  };

  if (!locationDefined) {
    if (Platform.OS === 'android' && !permissionAndroid) {
      requestAndroidLocation();
    } else if (Platform.OS === 'ios' && !permissionIos) {
      requestIOSLocation();
    }

    Geolocation.getCurrentPosition(
      data => {
        coordinates = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
        };
        fetchMarkers();
        locationDefined = true;
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    locationDefined = true;
  }

  useEffect(() => {
    const fitToCoordinates = function () {
      let coordinatesList = markers.map(item => {
        return item.coordinate;
      });
      if (mapRef) {
        mapRef.fitToCoordinates(coordinatesList, {animated: true});
      }
    };
    return fitToCoordinates();
  });

  return (
    <View style={mapNavigationStyles.viewContainer}>
      <MapView
        ref={map => {
          mapRef = map;
        }}
        style={mapNavigationStyles.mapViewContainer}
        region={{
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
        mapPadding={{
          top: 15,
          right: 15,
          bottom: 15,
          left: 15,
        }}>
        <Marker
          coordinate={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
          }}
          image={require('../../images/youPin.png')}
        />
        {markers.map((marker, index) => {
          return (
            <Marker
              coordinate={marker.coordinate}
              key={index}
              calloutOffset={{x: 0, y: 7}}
              calloutAnchor={{x: 0.5, y: 7}}
              image={require('../../images/movieTheaterPin.png')}
              onCalloutPress={() => {
                marker.description.website
                  ? Alert.alert(
                      `Visit ${marker.title} website?`,
                      undefined,
                      [
                        {
                          text: 'No',
                          onPress: () => console.log('Cancel Pressed'),
                        },
                        {
                          text: 'Yes',
                          onPress: () =>
                            Linking.openURL(`${marker.description.website}`),
                        },
                      ],
                      {cancelable: true},
                    )
                  : null;
              }}>
              <Callout tooltip={true}>
                <MarkerCallout
                  title={marker.title}
                  formatted_adress={marker.description.formatted_adress}
                  photos={marker.description.photos}
                  rating={marker.description.rating}
                  user_ratings_total={marker.description.user_ratings_total}
                  opening_hours={marker.description.opening_hours}
                  website={marker.description.website}
                />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapNavigation;
