import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  bookmarksIcon,
  mapIcon,
  searchIcon,
  trendingIcon,
} from '../components/TabNavBarIcons/TabNavBarIcons';
import MapScreen from '../screens/MapScreen';
import {
  BookmarksStackScreen,
  SearchStackScreen,
  TrendingStackScreen,
} from './StackNavigation';
import {useAppSelector} from '../hooks/hooks';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  const sessionId = useAppSelector(state => state.bookmarks.session_id);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="TrendingScreenTab"
        component={TrendingStackScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: trendingIcon,
          tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
        }}
      />
      <Tab.Screen
        name="SearchScreenTab"
        component={SearchStackScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: searchIcon,
          tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
        }}
      />
      {sessionId ? (
        <Tab.Screen
          name="BookmarksScreenTab"
          component={BookmarksStackScreen}
          options={{
            tabBarIcon: bookmarksIcon,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
          }}
        />
      ) : null}
      <Tab.Screen
        name="NavigationScreenTab"
        component={MapScreen}
        options={{
          tabBarIcon: mapIcon,
          tabBarShowLabel: false,
          tabBarActiveBackgroundColor: 'rgba(203,178,184,0.6)',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
