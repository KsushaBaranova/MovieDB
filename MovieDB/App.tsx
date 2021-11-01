import React from 'react';
import {Provider} from 'react-redux';
import AppScreen from './src/navigation/AppScreen';
import {store} from './src/redux/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppScreen />
    </Provider>
  );
};

export default App;
