import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ItemType} from 'react-native-dropdown-picker';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import Dropdown from '../components/Dropdown/Dropdown';
import FilmCell from '../components/FilmCell/FilmCell';
import {useAppDispatch, useAppSelector} from '../hooks';
import {FilmModel} from '../interfaces';
import {fetchTrending} from '../redux/actions/async/fetchTrending';

const TrendingScreen: React.FC<{}> = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const trendingFilms = useAppSelector(state => state.trending.item);
  const [valueMediaType, setValueMediaType] = useState('all');
  const [valueTimeWindow, setValueTimeWindow] = useState('week');

  const mediaType: Array<ItemType> = [
    {label: 'all', value: 'all'},
    {label: 'movie', value: 'movie'},
    {label: 'tv', value: 'tv'},
  ];

  const timeWindow: Array<ItemType> = [
    {label: 'day', value: 'day'},
    {label: 'week', value: 'week'},
  ];

  useEffect(() => {
    dispatch(fetchTrending([`${valueMediaType}/${valueTimeWindow}`]));
  }, [dispatch, valueMediaType, valueTimeWindow]);

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const {item} = itemInfo;
    return (
      <View style={styles.imageContainerStyle}>
        <FilmCell
          item={item}
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

  const ItemSeparatorComponent = () => <Stack size={20} />;

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
  },
  viewDropdownStyle: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  heightListTrendingStyle: {
    height: '85%',
  },
});

export default TrendingScreen;
