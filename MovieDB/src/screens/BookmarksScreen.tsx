import React from 'react';
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
import {useAppDispatch, useAppSelector} from '../hooks';
import {FilmModel} from '../interfaces';
import {createSession} from '../redux/actions/async/createSession';
import {fetchBookmarks} from '../redux/actions/async/fetchBookmarks';

let bookmarksFetched = false;
const deviceWidth = Dimensions.get('window').width;

const BookmarksScreen = () => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(state => state.bookmarks.items);
  const sessionId = useAppSelector(state => state.bookmarks.session_id);
  const sessionInitiated = useAppSelector(
    state => state.bookmarks.sessionInitiated,
  );

  !sessionInitiated
    ? dispatch(createSession())
    : !bookmarksFetched
    ? (dispatch(fetchBookmarks(sessionId)), (bookmarksFetched = true))
    : null;

  const renderItem = (itemInfo: ListRenderItemInfo<FilmModel>) => {
    const {item} = itemInfo;
    return (
      <BookmarkCell
        item={item}
        itemIndex={itemInfo.index + 1}
        listLength={bookmarks.length}
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
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        ItemSeparatorComponent={ItemSeparatorComponent}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
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
