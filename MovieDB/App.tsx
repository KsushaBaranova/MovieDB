import React from 'react';
import {Provider} from 'react-redux';
import TabNavigation from './src/navigation/TabNavigation';
import {store} from './src/redux/store';

const App: React.FC<{}> = () => {
  return <Provider store={store}>{<TabNavigation />}</Provider>;
};

export default App;
