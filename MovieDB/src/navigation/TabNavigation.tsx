import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TrendingScreen from '../screens/TrendingScreen';
import SearchScreen from '../screens/SearchScreen';
import BookmarksScreen from '../screens/BookmarksScreen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="TrendingScreen" component={TrendingScreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="BookmarksScreen" component={BookmarksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
