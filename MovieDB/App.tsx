import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import MapScreen from './src/screens/MapScreen';

const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <MapScreen />
    </Provider>
  );
};

export default App;
