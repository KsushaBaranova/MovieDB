import React from 'react';
import {Image} from 'react-native';
import tabNavBarIconStyles from './tabNavBarIconStyles';

export const trendingIcon = () => (
  <Image
    source={require('../../../image/trend.png')}
    style={tabNavBarIconStyles.container}
  />
);

export const searchIcon = () => (
  <Image
    source={require('../../../image/search.png')}
    style={tabNavBarIconStyles.container}
  />
);

export const bookmarksIcon = () => (
  <Image
    source={require('../../../image/bookmark.png')}
    style={tabNavBarIconStyles.container}
  />
);

export const mapIcon = () => (
  <Image
    source={require('../../../image/navigation.png')}
    style={tabNavBarIconStyles.container}
  />
);
