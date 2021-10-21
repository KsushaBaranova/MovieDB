import React from 'react';
import {Text, View} from 'react-native';
import {InfoFilmModel} from '../../interfaces';
import styles from './styles';

export interface InformationFilmProps {
  film: InfoFilmModel;
}

const InformationFilm: React.FC<InformationFilmProps> = ({film}) => {
  return (
    <View style={styles.viewInfoStyle}>
      <View style={styles.viewRatingAndRealeseStyle}>
        <View style={styles.viewRatingAndRealeseStyle}>
          <Text style={styles.textTitleStyle}>Realese: </Text>
          <Text style={styles.textDescriptionStyle}>{film.dateRealese}</Text>
        </View>
        <View style={styles.viewRatingAndRealeseStyle}>
          <Text style={styles.textTitleStyle}>Rating:</Text>
          <Text style={styles.textDescriptionStyle}>{film.rating}</Text>
        </View>
      </View>

      <View style={styles.viewGenresStyle}>
        <Text style={styles.textGenreStyle}>
          Genre: {film.genres.join(', ')}
        </Text>
      </View>

      <Text style={styles.textTitleStyle}>Overview</Text>
      <Text style={styles.textDescriptionStyle}>{film.description}</Text>
    </View>
  );
};

export default InformationFilm;
