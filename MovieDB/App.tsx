import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const App: React.FC<{}> = () => {
  return <Provider store={store}>{/* add screen  */}</Provider>;
};

export default App;
