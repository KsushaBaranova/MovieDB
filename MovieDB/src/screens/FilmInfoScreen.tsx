import React, {useEffect} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import InformationFilm from '../components/InformationFilm/InformationFilm';
import InformationTV from '../components/InformationTV/InformationTV';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fetchFilmInfo} from '../redux/actions/async/fetchFilmInfo';
import {fetchTVInfo} from '../redux/actions/async/fetchTVInfo';

const FilmInfoScreen: React.FC<{}> = ({route}) => {
  let {id: filmId, nameButton, mediaType} = route.params;
  console.log(mediaType);

  const dispatch = useAppDispatch();
  const infoFilm = useAppSelector(state => state.info.movie);
  const infoTV = useAppSelector(state => state.info.tv);

  useEffect(() => {
    if (mediaType === 'tv') {
      dispatch(fetchTVInfo([filmId]));
    } else {
      dispatch(fetchFilmInfo([filmId]));
    }
  }, [dispatch, filmId, mediaType]);

  console.log(infoFilm);
  console.log(infoTV);

  return (
    <BackgroundForm
      headerProps={{
        title: mediaType === 'tv' ? infoTV.name : infoFilm.name,
      }}
      styleHeight={styles.heightInfoStyle}>
      <View style={styles.viewContainerStyle}>
        <View style={styles.viewContainerVideoStyle}>
          <WebView
            style={styles.viewVideoStyle}
            containerStyle={styles.viewVideoStyle}
            source={{
              uri: `https://www.youtube.com/embed/${
                mediaType === 'tv' ? infoTV.videos.key : infoFilm.videos.key
              }`,
            }}
          />
        </View>

        {mediaType === 'tv' ? (
          <InformationTV tv={infoTV} />
        ) : (
          <InformationFilm film={infoFilm} />
        )}
        <View style={styles.viewButtonStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textButtonStyle}>{nameButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundForm>
  );
};

const screenWidth = Dimensions.get('window').width - 15;
const trailerHeight = 250;

const styles = StyleSheet.create({
  heightInfoStyle: {
    height: '90%',
  },
  viewVideoStyle: {
    flex: 0,
    height: trailerHeight,
    width: screenWidth,
  },
  viewContainerVideoStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  viewContainerStyle: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
  },
  viewButtonStyle: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
});

export default FilmInfoScreen;
