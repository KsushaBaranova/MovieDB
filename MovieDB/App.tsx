import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import TrendingScreen from './src/screens/TrendingScreen';
import SearchScreen from './src/screens/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import BookmarksScreen from './src/screens/BookmarksScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="TrendingScreen" component={TrendingScreen} />
          <Tab.Screen name="SearchScreen" component={SearchScreen} />
          <Tab.Screen name="BookmarksScreen" component={BookmarksScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
