import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import FilmInfoScreen from '../screens/FilmInfoScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendingScreen from '../screens/TrendingScreen';
import BookmarksScreen from '../screens/BookmarksScreen';
import SimilarMoviesScreen from '../screens/SimilarMoviesScreen';
import {Image, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/routers';

export type RootStackParamList = {
  FilmInfoScreen: {
    id: string;
    nameButton: string;
    mediaType: string;
    fromScreen: string;
  };
  TrendingScreen: {};
  SearchScreen: {};
  BookmarksScreen: {};
  SimilarMoviesScreen: {id: string};
};
export type FilmInfoProps = NativeStackScreenProps<
  RootStackParamList,
  'FilmInfoScreen'
>;
export type SimilarMoviesProps = NativeStackScreenProps<
  RootStackParamList,
  'SimilarMoviesScreen'
>;
type SearchScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchScreen'
>;
type TrendingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TrendingScreen'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export const TrendingStackScreen = ({navigation}: TrendingScreenProps) => {
  return (
    <Stack.Navigator
      screenOptions={
        Platform.OS === 'ios'
          ? {
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: '',
              headerTransparent: true,
              headerBackVisible: false,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.dispatch(StackActions.pop(1))}>
                  <Image
                    source={require('../../image/back.png')}
                    style={backButton.container}
                  />
                </TouchableOpacity>
              ),
            }
          : {headerShown: false}
      }>
      <Stack.Screen
        name="TrendingScreen"
        component={TrendingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
    </Stack.Navigator>
  );
};

export const SearchStackScreen = ({navigation}: SearchScreenProps) => {
  return (
    <Stack.Navigator
      screenOptions={
        Platform.OS === 'ios'
          ? {
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: '',
              headerTransparent: true,
              headerBackVisible: false,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.dispatch(StackActions.pop(1))}>
                  <Image
                    source={require('../../image/back.png')}
                    style={backButton.container}
                  />
                </TouchableOpacity>
              ),
            }
          : {headerShown: false}
      }>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="FilmInfoScreen" component={FilmInfoScreen} />
      <Stack.Screen
        name="SimilarMoviesScreen"
        component={SimilarMoviesScreen}
      />
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

const backButton = StyleSheet.create({
  container: {
    marginTop: 5,
    width: 22,
    height: 22,
  },
});
