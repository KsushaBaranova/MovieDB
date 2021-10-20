import React from 'react';
import {Dimensions, Text} from 'react-native';
import {View} from 'react-native';
import {DescriptionCellProps} from '../../interfaces';
import styles from './styles';

const windowHeight = Dimensions.get('window').height;
let numberOfLines = 0;

if (windowHeight < 650) {
  numberOfLines = 3;
} else if (windowHeight > 650 && windowHeight < 800) {
  numberOfLines = 4;
} else if (windowHeight > 650 && windowHeight < 900) {
  numberOfLines = 5;
} else if (windowHeight > 900) {
  numberOfLines = 6;
}

const DescriptionCell: React.FC<DescriptionCellProps> = (
  props: DescriptionCellProps,
) => {
  return (
    <View style={styles.viewContainerStyle}>
      <View style={styles.viewTitleStyle}>
        <Text style={styles.textNameStyle}>{props.nameFilm}</Text>
      </View>

      <View>
        <Text
          style={styles.textDescriptionStyle}
          ellipsizeMode={'tail'}
          numberOfLines={numberOfLines}>
          {props.description}
        </Text>
      </View>
    </View>
  );
};

export default DescriptionCell;
