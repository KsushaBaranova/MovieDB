import React from 'react';
import {
  ListRenderItemInfo,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import BookmarkCell from '../components/BookmarkCell/BookmarkCell';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {FilmModel} from '../interfaces/interfaces';
import {createSession} from '../redux/actions/async/createSession';
import {createSessionToken} from '../redux/actions/async/createSessionToken';
import {fetchBookmarks} from '../redux/actions/async/fetchBookmarks';

let bookmarksFetched = false;
const deviceWidth = Dimensions.get('window').width;

const tokenConfirmationRequest = async (token: string) => {
  Platform.OS === 'ios'
    ? await InAppBrowser.openAuth(
        `https://www.themoviedb.org/authenticate/${token}`,
        '',
      )
    : await InAppBrowser.open(
        `https://www.themoviedb.org/authenticate/${token}`,
      );
  return token;
};

const BookmarksScreen = () => {
  const dispatch = useAppDispatch();
  const bookmarks = useAppSelector(state => state.bookmarks.items);
  const sessionId = useAppSelector(state => state.bookmarks.session_id);
  const sessionInitiated = useAppSelector(
    state => state.bookmarks.sessionInitiated,
  );
  let refreshing = false;

  !sessionInitiated
    ? dispatch(createSessionToken())
        .then(response => tokenConfirmationRequest(response.payload as string))
        .then(response => {
          dispatch(createSession(response));
        })
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
        refreshing={refreshing}
        onRefresh={() => dispatch(fetchBookmarks(sessionId))}
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
