import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ItemType} from 'react-native-dropdown-picker';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import Dropdown from '../components/Dropdown/Dropdown';
import FilmCell from '../components/FilmCell/FilmCell';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {FilmModel} from '../interfaces/interfaces';
import {fetchTrending} from '../redux/actions/async/fetchTrending';

enum Media {
  all = 'All',
  movie = 'Movie',
  tv = 'TV',
}

enum Time {
  day = 'Day',
  week = 'Week',
}

const TrendingScreen: React.FC<{}> = ({navigation, route}) => {
  const pathForImage = 'https://image.tmdb.org/t/p/original';

  const dispatch = useAppDispatch();
  const trendingFilms = useAppSelector(state => state.trending.item);
  const [valueMediaType, setValueMediaType] = useState('all');
  const [valueTimeWindow, setValueTimeWindow] = useState('week');

  const mediaType: Array<ItemType> = [
    {label: Media.all, value: Media.all.toLowerCase()},
    {label: Media.movie, value: Media.movie.toLowerCase()},
    {label: Media.tv, value: Media.tv.toLowerCase()},
  ];

  const timeWindow: Array<ItemType> = [
    {label: Time.day, value: Time.day.toLowerCase()},
    {label: Time.week, value: Time.week.toLowerCase()},
  ];

  useEffect(() => {
    dispatch(fetchTrending([`${valueMediaType}/${valueTimeWindow}`]));
  }, [dispatch, valueMediaType, valueTimeWindow]);

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const {item} = itemInfo;
    let imageUrl: string = `${pathForImage}${item.imageUrl}`;

    return (
      <View style={styles.imageContainerStyle}>
        <FilmCell
          item={item}
          imageUrl={imageUrl}
          onPress={() =>
            navigation.navigate('FilmInfoScreen', {
              id: item.id,
              nameButton: 'Show where to watch',
            })
          }
        />
      </View>
    );
  };

  const ListEmptyComponent = (
    <View style={styles.emptyContainerStyle}>
      <Text style={styles.emptyTextStyle}>No filmes yet</Text>
    </View>
  );

  const ItemSeparatorComponent = () => <Stack size={10} />;

  return (
    <BackgroundForm
      headerProps={{
        title: 'Trending',
      }}
      prepearComponent={
        <View style={styles.viewPrepearComponent}>
          <View style={styles.viewDropdownStyle}>
            <Dropdown
              value={valueTimeWindow}
              setValue={setValueTimeWindow}
              data={timeWindow}
            />
            <Dropdown
              value={valueMediaType}
              setValue={setValueMediaType}
              data={mediaType}
            />
          </View>
        </View>
      }
      styleHeight={styles.heightListTrendingStyle}>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={trendingFilms}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </BackgroundForm>
  );
};

const styles = StyleSheet.create({
  emptyContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  emptyTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#C4C4C4',
  },
  imageContainerStyle: {
    width: '100%',
  },
  flatListStyle: {
    flex: 1,
    width: '90%',
  },
  viewPrepearComponent: {
    flexWrap: 'nowrap',
    zIndex: 1000,
    marginTop: 10,
  },
  viewDropdownStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  heightListTrendingStyle: {
    height: '85%',
  },
});

export default TrendingScreen;
