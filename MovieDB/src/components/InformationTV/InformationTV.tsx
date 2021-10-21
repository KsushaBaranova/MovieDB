import React from 'react';
import {Text, View} from 'react-native';
import {InfoTVModel} from '../../interfaces';
import styles from './styles';

export interface InformationFilmProps {
  tv: InfoTVModel;
}

const InformationFilm: React.FC<InformationFilmProps> = ({tv}) => {
  return (
    <View style={styles.viewInfoStyle}>
      <View style={styles.viewNumbersStyle}>
        <Text style={styles.textDescriptionStyle}>
          {tv.numberOfSeasons} seasons,
        </Text>

        <Text style={styles.textDescriptionStyle}>
          {tv.numberOfEpisodes} episodes
        </Text>
      </View>

      <View style={styles.viewRatingAndRealeseStyle}>
        <View style={styles.viewYearAndContryStyle}>
          <Text style={styles.textDescriptionStyle}>{tv.dateRealese}, </Text>
          <Text style={styles.textDescriptionStyle}>
            {tv.country.join(', ')}
          </Text>
        </View>
        <Text style={styles.textDescriptionStyle}>{tv.rating}/10</Text>
      </View>

      <View style={styles.viewGenresStyle}>
        <Text style={styles.textGenreStyle}>{tv.genres.join(', ')}</Text>
      </View>

      <Text style={styles.textTitleStyle}>Overview</Text>
      <Text style={styles.textDescriptionStyle}>{tv.description}</Text>
    </View>
  );
};

export default InformationFilm;
