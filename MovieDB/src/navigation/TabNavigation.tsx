import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  BookmarksStackScreen,
  SearchStackScreen,
  TrendingStackScreen,
} from './StackNavigation';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="TrendingStackScreen"
          component={TrendingStackScreen}
        />
        <Tab.Screen name="SearchStackScreen" component={SearchStackScreen} />
        <Tab.Screen
          name="BookmarksStackScreen"
          component={BookmarksStackScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigation;
