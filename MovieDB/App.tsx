import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import SimilarMoviesScreen from './src/screens/SimilarMoviesScreen';

const App: React.FC<{}> = () => {
  return <Provider store={store}>{<SimilarMoviesScreen />}</Provider>;
};

export default App;
