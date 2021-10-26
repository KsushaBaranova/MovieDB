import React, {useEffect} from 'react';
import {
  ListRenderItemInfo,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import BookmarkCell from '../components/BookmarkCell/BookmarkCell';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {FilmModel} from '../interfaces/interfaces';
import {BookmarkScreenProps} from '../navigation/StackNavigation';
import {fetchBookmarks} from '../redux/actions/async/fetchBookmarks';

const deviceWidth = Dimensions.get('window').width;

const BookmarksScreen = ({navigation}: BookmarkScreenProps) => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(state => state.bookmarks.items);
  const sessionId = useAppSelector(state => state.bookmarks.session_id);
  const accountId = useAppSelector(state => state.bookmarks.account_id);
  let refreshing = false;

  const bookmarkStateTrend = useAppSelector(
    state => state.info.itemTrend.account_state?.favorite,
  );
  const bookmarkStateSearch = useAppSelector(
    state => state.info.itemSearch.account_state?.favorite,
  );
  const bookmarkStateSimilar = useAppSelector(
    state => state.info.itemSimilar.account_state?.favorite,
  );
  const bookmarkStateBookmark = useAppSelector(
    state => state.info.itemBookmarks.account_state?.favorite,
  );

  useEffect(() => {
    dispatch(fetchBookmarks([sessionId, accountId]));
  }, [
    accountId,
    dispatch,
    sessionId,
    bookmarkStateTrend,
    bookmarkStateSearch,
    bookmarkStateSimilar,
    bookmarkStateBookmark,
  ]);

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const {item} = itemInfo;

    return (
      <BookmarkCell
        item={item}
        itemIndex={itemInfo.index + 1}
        listLength={bookmarks.length}
        onPress={() =>
          navigation.navigate('FilmInfoScreen', {
            id: item.id,
            nameButton: '',
            mediaType: item.mediaType!,
            fromScreen: 'bookmarks',
          })
        }
      />
    );
  };

  const ListEmptyComponent = (
    <View style={styles.emptyContainerStyle}>
      <Text style={styles.emptyTextStyle}>No bookmarks yet</Text>
    </View>
  );

  const ItemSeparatorComponent = () => null;
  return (
    <BackgroundForm
      headerProps={{
        title: 'Bookmarks',
      }}
      styleHeight={styles.heightListTrendingStyle}>
      <FlatList
        keyExtractor={(_, index) => String(index)}
        style={styles.flatListStyle}
        data={bookmarks}
        extraData={bookmarks}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={() => dispatch(fetchBookmarks([sessionId, accountId]))}
        initialNumToRender={3}
      />
    </BackgroundForm>
  );
};

const styles = StyleSheet.create({
  emptyContainerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginLeft: 20,
  },
  emptyTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#C4C4C4',
  },
  imageContainerStyle: {
    flex: 1,
    width: '100%',
  },
  flatListStyle: {
    flex: 1,
    width: deviceWidth * 0.9 + 20,
    marginBottom: 20,
  },
  heightListTrendingStyle: {
    height: '90%',
  },
});

export default BookmarksScreen;
