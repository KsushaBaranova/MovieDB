import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './TabNavigation';
import WelcomeScreen from '../screens/WelcomeScreen';

export type RootStackParamList = {
  WelcomeScreen: {};
  MainScreen: {};
};

export type WelcomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'WelcomeScreen'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MainScreen" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppScreen;
