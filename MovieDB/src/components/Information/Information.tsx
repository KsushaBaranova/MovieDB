import React from 'react';
import {Image, Text, View} from 'react-native';
import {InfoFilmModel} from '../../interfaces/interfaces';
import styles from './styles';

export interface InformationFilmProps {
  item: InfoFilmModel;
}

const InformationFilm: React.FC<InformationFilmProps> = ({item}) => {
  return (
    <View style={styles.viewInfoStyle}>
      <View style={styles.viewRatingAndRealeseStyle}>
        <View style={styles.viewTitleAndYearStyle}>
          <Text style={styles.textTitleStyle}>{item.name} </Text>
          <Text style={styles.textYearStyle}>({item.dateRealese})</Text>
        </View>
      </View>

      <View style={styles.viewGenresAndContriesStyle}>
        <View>
          <Text style={styles.textStyle}>{item.genres.join(', ')}</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>{item.country.join(', ')}</Text>
        </View>
      </View>

      <View style={styles.viewRatingStyle}>
        <Text style={styles.textRatingStyle}>Rating: </Text>
        <Image
          style={styles.iconStyle}
          source={require('../../../image/rating.png')}
        />
        <Text style={styles.textRatingStyle}> {item.rating}/10</Text>
      </View>

      {item.number_of_seasons ? (
        <View>
          <Text style={styles.textStyle}>
            Number of seasons: {item.number_of_seasons}
          </Text>
        </View>
      ) : null}
      {item.number_of_episodes ? (
        <View>
          <Text style={styles.textStyle}>
            Number of episodes: {item.number_of_episodes} {'\n'}
          </Text>
        </View>
      ) : null}

      <View>
        <Text style={styles.textOverviewStyle}>Overview</Text>
        <Text style={styles.textStyle}>{item.description}</Text>
      </View>
    </View>
  );
};

export default InformationFilm;
