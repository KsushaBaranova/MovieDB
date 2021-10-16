import React from 'react';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import MapNavigation from '../components/MapNavigation/MapNavigation';

const MapScreen = () => {
  return (
    <BackgroundForm
      headerProps={{title: 'Movie theaters around'}}
      styleHeight={{height: '92%'}}>
      <MapNavigation />
    </BackgroundForm>
  );
};
export default MapScreen;
