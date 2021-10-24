import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmInfoScreen from '../screens/FilmInfoScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendingScreen from '../screens/TrendingScreen';
import BookmarksScreen from '../screens/BookmarksScreen';

const Stack = createNativeStackNavigator();

export const TrendingStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="TrendingScreen" component={TrendingScreen} />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
    </Stack.Navigator>
  );
};

export const SearchStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
    </Stack.Navigator>
  );
};

export const BookmarksStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookmarksScreen" component={BookmarksScreen} />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
    </Stack.Navigator>
  );
};
