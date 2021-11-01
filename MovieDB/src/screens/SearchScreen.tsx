import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Stack} from 'react-native-spacing-system';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import FilmCell from '../components/FilmCell/FilmCell';
import SearchBar from '../components/SearchBar/SearchBar';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import useDelay from '../hooks/useDelay';
import {FilmModel} from '../interfaces/interfaces';
import {FilmInfoProps} from '../navigation/StackNavigation';
import {searchFilms} from '../redux/actions/async/searchFilms';
import {emptyList} from '../redux/reducers/searchReducer';

const SearchScreen = ({navigation}: FilmInfoProps) => {
  const pathForImage = 'https://image.tmdb.org/t/p/original';

  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const searchingFilms = useAppSelector(state => state.search.item);
  const [isFocusOnSearch, setIsFocusOnSearch] = useState<boolean>(false);
  let valueInputWithDelay = useDelay(inputValue, 1000);

  useEffect(() => {
    if (valueInputWithDelay !== '') {
      dispatch(searchFilms(valueInputWithDelay));
    }
  }, [dispatch, valueInputWithDelay]);

  const onChangeValueSearch = (value: string): void => {
    setInputValue(value);
  };

  const onFocus = (): void => {
    setIsFocusOnSearch(true);
    if (isFocusOnSearch === false && inputValue === '') {
      dispatch(emptyList());
    }
  };

  const onBlur = (): void => {
    setIsFocusOnSearch(false);
    if (isFocusOnSearch === true && inputValue === '') {
      dispatch(emptyList());
    }
  };

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
              nameButton: 'Show similar movies',
              mediaType: item.mediaType ? item.mediaType : '',
              fromScreen: 'search',
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
        title: 'Search',
      }}
      prepearComponent={
        <View style={styles.viewPrepearComponent}>
          <SearchBar
            value={inputValue}
            onChangeText={onChangeValueSearch}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </View>
      }
      styleHeight={styles.heightListSearchingStyle}>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={searchingFilms}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </BackgroundForm>
  );
};

const styles = StyleSheet.create({
  emptyContainerStyle: {
    marginTop: 20,
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
    width: '100%',
    alignItems: 'center',
    zIndex: 1000,
    marginTop: 10,
  },
  heightListSearchingStyle: {
    height: '85%',
  },
});

export default SearchScreen;
