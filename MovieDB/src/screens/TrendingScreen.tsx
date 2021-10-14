import React, {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import FilmCell from '../components/FilmCell/FilmCell';
import {useAppDispatch, useAppSelector} from '../hooks';
import {FilmModel} from '../interfaces';
import {fetchTrendingDefault} from '../redux/actions/async/fetchTrendingDefault';

const TrendingScreen: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const trendingFilms = useAppSelector(state => state.films.items);

  useEffect(() => {
    dispatch(fetchTrendingDefault());
  }, [dispatch]);

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const {item} = itemInfo;
    return (
      <View style={styles.imageContainerStyle}>
        <FilmCell item={item} />
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
      }}>
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
  additionViewStyle: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    alignItems: 'center',
    borderTopRightRadius: 20,
    paddingHorizontal: 0,
    paddingTop: 30,
    paddingBottom: 50,
  },
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
});

export default TrendingScreen;
