import React, {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import SimilarMovieCell from '../components/SimilarMovieCell/SimilarMovieCell';
import {useAppDispatch, useAppSelector} from '../hooks';
import {FilmModel} from '../interfaces';
import {fetchSimilarMovies} from '../redux/actions/async/fetchSimilar';

const SimilarMoviesScreen: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const similarFilms = useAppSelector(state => state.similar.items);
  const numColumns = 2;
  let refreshing = false;

  useEffect(() => {
    dispatch(fetchSimilarMovies('385128')); //hardcoded value to change for movie id
  }, [dispatch]);

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const {item} = itemInfo;
    return (
      <View style={styles.itemContainer}>
        <SimilarMovieCell item={item} />
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
        title: 'Similar movies',
      }}
      styleHeight={styles.heightListTrendingStyle}>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={similarFilms}
        renderItem={renderItem}
        numColumns={numColumns}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        refreshing={refreshing}
        onRefresh={() => dispatch(fetchSimilarMovies('385128'))}
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

  flatListStyle: {
    flex: 1,
    width: '90%',
  },
  heightListTrendingStyle: {
    height: '90%',
  },
  itemContainer: {
    margin: 10,
  },
});

export default SimilarMoviesScreen;
