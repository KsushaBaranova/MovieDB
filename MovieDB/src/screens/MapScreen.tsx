import React from 'react';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import MapNavigation from '../components/MapNavigation/MapNavigation';
import {mapNavigationStyles} from '../components/MapNavigation/mapNavigationStyles';

const MapScreen = () => {
  return (
    <BackgroundForm
      headerProps={{title: 'Movie theaters around'}}
      styleHeight={mapNavigationStyles.mapHeight}>
      <MapNavigation />
    </BackgroundForm>
  );
};
export default MapScreen;
