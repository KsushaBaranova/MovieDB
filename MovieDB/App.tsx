import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import TabNavigation from './src/navigation/TabNavigation';

function App() {
  return (
    <Provider store={store}>
      <TabNavigation />
    </Provider>
  );
}

export default App;
