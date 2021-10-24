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
        <View style={styles.viewRatingStyle}>
          <Image
            style={styles.iconStyle}
            source={require('../../../image/rating.png')}
          />
          <Text style={styles.textRatingStyle}>{item.rating}/10</Text>
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

      <View>
        <Text style={styles.textOverviewStyle}>Overview</Text>
        <Text style={styles.textStyle}>{item.description}</Text>
      </View>
    </View>
  );
};

export default InformationFilm;
