import React, {useEffect} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {fetchFilmInfo} from '../redux/actions/async/fetchFilmInfo';
import {fetchTVInfo} from '../redux/actions/async/fetchTVInfo';
import Information from '../components/Information/Information';
import {bookmarksApi} from '../services/network';
import {FilmInfoProps} from '../navigation/StackNavigation';
import {setScreen} from '../redux/reducers/filmInfoReducer';
import {updateFavoriteState} from '../redux/reducers/filmInfoReducer';

const FilmInfoScreen = ({navigation, route}: FilmInfoProps) => {
  let {id, nameButton, mediaType, fromScreen} = route.params;

  const dispatch = useAppDispatch();
  const sessionId = useAppSelector(state => state.bookmarks.session_id);
  const infoTrend = useAppSelector(state => state.info.itemTrend);
  const infoSearch = useAppSelector(state => state.info.itemSearch);
  const infoSimilar = useAppSelector(state => state.info.itemSimilar);
  const infoBookmarks = useAppSelector(state => state.info.itemBookmarks);

  const accountId = useAppSelector(state => state.bookmarks.account_id);

  useEffect(() => {
    if (mediaType === 'tv') {
      dispatch(fetchTVInfo([id, sessionId]));
    } else {
      dispatch(fetchFilmInfo([id, sessionId]));
    }
  }, [dispatch, id, mediaType, sessionId]);

  useEffect(() => {
    dispatch(setScreen(fromScreen));
  }, [dispatch, fromScreen]);

  const info =
    fromScreen === 'trend'
      ? infoTrend
      : fromScreen === 'search'
      ? infoSearch
      : fromScreen === 'similar'
      ? infoSimilar
      : infoBookmarks;

  const videoUrl = `https://www.youtube.com/embed/${info.videos?.key}`;

  let bookmarkState = info.account_state?.favorite;

  return (
    <BackgroundForm
      headerProps={{
        title: info.name ? info.name : '',
      }}
      styleHeight={styles.heightInfoStyle}>
      <ScrollView
        style={styles.scrollViewContainerStyle}
        contentContainerStyle={styles.scrollViewContantStyle}
        alwaysBounceVertical={false}>
        <View style={styles.viewContainerVideoStyle}>
          <WebView
            style={styles.viewVideoStyle}
            containerStyle={styles.viewVideoStyle}
            source={{
              uri: videoUrl,
            }}
          />
        </View>

        <Information item={info} />

        {sessionId ? (
          <View style={styles.viewButtonStyle}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() =>
                !bookmarkState
                  ? (bookmarksApi.addBookmark(
                      info.id,
                      mediaType,
                      accountId,
                      sessionId,
                    ),
                    dispatch(
                      updateFavoriteState(!info.account_state!.favorite),
                    ))
                  : (bookmarksApi.removeBookmark(
                      info.id,
                      mediaType,
                      accountId,
                      sessionId,
                    ),
                    dispatch(
                      updateFavoriteState(!info.account_state!.favorite),
                    ))
              }>
              <Text style={styles.textButtonStyle}>
                {!bookmarkState ? 'Add to bookmarks' : 'Remove from bookmarks'}
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

        {nameButton === 'Show similar movies' ? (
          <View style={styles.viewButtonStyle}>
            <TouchableOpacity
              style={styles.similarButtonStyle}
              onPress={() =>
                navigation.push('SimilarMoviesScreen', {
                  id: id,
                  mediaType: mediaType,
                })
              }>
              <Text style={styles.textButtonStyle}>{nameButton}</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </BackgroundForm>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  heightInfoStyle: {
    height: '90%',
  },
  viewVideoStyle: {
    height: 250,
    width: screenWidth,
    justifyContent: 'center',
  },
  viewContainerVideoStyle: {
    marginTop: 15,
    marginBottom: 15,
  },
  scrollViewContainerStyle: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollViewContantStyle: {
    flexGrow: 1,
  },
  buttonStyle: {
    backgroundColor: '#d0abb4',
    borderRadius: 20,
    height: 50,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'rgba(203,178,184, 0.6)',
  },
  textButtonStyle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    textAlignVertical: 'center',
  },
  viewButtonStyle: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  similarButtonStyle: {
    height: 35,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(51, 122, 240, 0.8)',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'rgba(51, 122, 240, 0.6)',
  },
});

export default FilmInfoScreen;
