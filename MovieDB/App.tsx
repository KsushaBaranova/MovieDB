import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import TrendingScreen from './src/screens/TrendingScreen';
import SearchScreen from './src/screens/SearchScreen';

const App: React.FC<{}> = () => {
  return <Provider store={store}>{<TrendingScreen />}</Provider>;
};

export default App;
