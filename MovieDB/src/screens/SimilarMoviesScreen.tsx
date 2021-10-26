import React, {useEffect} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import SimilarMovieCell from '../components/SimilarMovieCell/SimilarMovieCell';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {FilmModel} from '../interfaces/interfaces';
import {SimilarMoviesProps} from '../navigation/StackNavigation';
import {fetchSimilarMovies} from '../redux/actions/async/fetchSimilar';

const SimilarMoviesScreen = ({route, navigation}: SimilarMoviesProps) => {
  const dispatch = useAppDispatch();
  const similarFilms = useAppSelector(state => state.similar.items);
  const numColumns = 2;
  const itemId = route.params.id;
  const mediaType = route.params.mediaType;
  let refreshing = false;

  useEffect(() => {
    dispatch(fetchSimilarMovies([itemId, mediaType]));
  }, [dispatch, itemId, mediaType]);

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const pathForImage = 'https://image.tmdb.org/t/p/original';
    const {item} = itemInfo;
    let imageUrl: string = `${pathForImage}${item.imageUrl}`;

    return (
      <View style={styles.itemContainer}>
        <SimilarMovieCell
          item={item}
          imageUrl={imageUrl}
          onPress={() =>
            navigation.push('FilmInfoScreen', {
              id: item.id,
              nameButton: '',
              mediaType: mediaType,
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
        onRefresh={() => dispatch(fetchSimilarMovies([itemId, mediaType]))}
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
