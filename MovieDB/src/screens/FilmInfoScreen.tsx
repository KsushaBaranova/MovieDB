import React, {useEffect} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import BackgroundForm from '../components/BackgroundForm/BackgroundForm';
import {useAppDispatch, useAppSelector} from '../hooks';
import {fetchFilmInfo} from '../redux/actions/async/fetchFilmInfo';

const FilmInfoScreen: React.FC<{}> = ({route}) => {
  let {id: filmId, nameButton} = route.params;

  const dispatch = useAppDispatch();
  const infoFilm = useAppSelector(state => state.info);

  useEffect(() => {
    dispatch(fetchFilmInfo([filmId]));
  }, [dispatch, filmId]);

  return (
    <BackgroundForm
      headerProps={{
        title: infoFilm.item.name,
      }}
      styleHeight={styles.heightInfoStyle}>
      <View style={styles.viewVideoStyle} />

      <View style={styles.viewInfoStyle}>
        <Text style={styles.textGenreStyle}>Genre: {infoFilm.item.genres}</Text>
        <Text style={styles.textDescriptionStyle}>
          {infoFilm.item.description}
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.textButtonStyle}>{nameButton}</Text>
      </TouchableOpacity>
    </BackgroundForm>
  );
};

const screenWidth = Dimensions.get('window').width;
const trailerHeight = 250;

const styles = StyleSheet.create({
  heightInfoStyle: {
    height: '90%',
  },
  viewVideoStyle: {
    backgroundColor: 'white',
    height: trailerHeight,
    width: screenWidth,
    marginBottom: 25,
  },
  textDescriptionStyle: {
    textAlign: 'justify',
    fontSize: 16,
  },
  viewInfoStyle: {
    paddingHorizontal: 15,
  },
  textGenreStyle: {
    textAlign: 'left',
    fontSize: 16,
    paddingBottom: 10,
  },
  buttonStyle: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 50,
    width: 220,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonStyle: {
    fontSize: 15,
  },
});

export default FilmInfoScreen;
