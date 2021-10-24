import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import TrendingScreen from '../screens/TrendingScreen';
import SearchScreen from '../screens/SearchScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import {
  bookmarksIcon,
  mapIcon,
  searchIcon,
  trendingIcon,
} from '../components/TabNavBarIcons/TabNavBarIcons';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="TrendingScreen"
          component={TrendingScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: trendingIcon,
            tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: searchIcon,
            tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
          }}
        />
        <Tab.Screen
          name="BookmarksScreen"
          component={BookmarksScreen}
          options={{
            tabBarIcon: bookmarksIcon,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
          }}
        />
        <Tab.Screen
          name="NavigationScreen"
          component={MapScreen}
          options={{
            tabBarIcon: mapIcon,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
