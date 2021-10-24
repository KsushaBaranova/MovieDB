import React, {useEffect} from 'react';
import {Dimensions, ScrollView, TouchableOpacity, View} from 'react-native';
import {StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import {useAppDispatch, useAppSelector} from '../hooks/hooks';
import {fetchFilmInfo} from '../redux/actions/async/fetchFilmInfo';
import {fetchTVInfo} from '../redux/actions/async/fetchTVInfo';
import Information from '../components/Information/Information';

const FilmInfoScreen: React.FC<{}> = ({route}) => {
  let {id, nameButton, mediaType} = route.params;

  const dispatch = useAppDispatch();
  const info = useAppSelector(state => state.info.item);

  useEffect(() => {
    if (mediaType === 'tv') {
      dispatch(fetchTVInfo([id]));
    } else {
      dispatch(fetchFilmInfo([id]));
    }
  }, [dispatch, id, mediaType]);

  return (
    <BackgroundForm
      headerProps={{
        title: info.name,
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
              uri: `https://www.youtube.com/embed/${info.videos.key}`,
            }}
          />
        </View>

        <Information item={info} />

        <View style={styles.viewButtonStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textButtonStyle}>{nameButton}</Text>
          </TouchableOpacity>
        </View>
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
    flex: 0,
    height: 250,
    width: screenWidth,
  },
  viewContainerVideoStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  viewButtonStyle: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
});

export default FilmInfoScreen;
