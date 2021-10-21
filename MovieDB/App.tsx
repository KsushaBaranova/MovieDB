import React from 'react';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import TrendingScreen from './src/screens/TrendingScreen';
import SearchScreen from './src/screens/SearchScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmInfoScreen from './src/screens/FilmInfoScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TrendingStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="TrendingScreen" component={TrendingScreen} />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
    </Stack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="TrendingStackScreen"
            component={TrendingStackScreen}
          />
          <Tab.Screen name="SearchStackScreen" component={SearchStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
