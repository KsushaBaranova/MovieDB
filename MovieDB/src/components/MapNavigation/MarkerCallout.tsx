import React from 'react';
import {Text, View} from 'react-native';
import {mapNavigationStyles} from './mapNavigationStyles';
import {PlacePhoto} from '../../services/googlePlacesApi';

interface MarkerCalloutProps {
  title: string;
  formatted_adress?: string;
  photos?: Array<PlacePhoto>;
  rating?: number;
  website?: string;
  user_ratings_total?: number;
  opening_hours?: {open_now?: boolean; weekday_text?: Array<string>};
}

const today = new Date();
const getWeekDay = () => {
  return today.getDay() !== 0 ? today.getDay() - 1 : 6;
};

const MarkerCallout = (props: MarkerCalloutProps) => {
  return (
    <View style={mapNavigationStyles.markerCalloutView}>
      <Text style={mapNavigationStyles.markerTitle}>{props.title}</Text>
      <Text style={mapNavigationStyles.markerText}>
        <Text style={mapNavigationStyles.markerFieldDescriptor}> Adress: </Text>{' '}
        {props.formatted_adress}
      </Text>
      <Text style={mapNavigationStyles.markerText}>
        <Text style={mapNavigationStyles.markerFieldDescriptor}> Rating: </Text>
        {props.rating} / 5, based on {props.user_ratings_total} reviews.
      </Text>
      {props.opening_hours ? (
        <>
          <Text style={mapNavigationStyles.markerText}>
            This place is
            <Text
              style={
                props.opening_hours?.open_now
                  ? mapNavigationStyles.openTextStyle
                  : mapNavigationStyles.closedTextStyle
              }>
              {props.opening_hours?.open_now ? ' open ' : ' closed '}
            </Text>
            now.
          </Text>
          <Text style={mapNavigationStyles.markerText}>
            {props.opening_hours?.weekday_text
              ? props.opening_hours?.weekday_text[getWeekDay()]
              : null}
          </Text>
        </>
      ) : (
        <Text style={mapNavigationStyles.warningText}>
          Schedule for this movie theater is not available.
        </Text>
      )}
      {props.website ? (
        <Text style={mapNavigationStyles.markerInfo}>
          Press me to visit {props.title}`s website
        </Text>
      ) : null}
    </View>
  );
};

export default MarkerCallout;
