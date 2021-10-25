import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {numberLinesNormalize} from '../../helper/normalize';
import {DescriptionCellProps} from '../../interfaces/interfaces';
import styles from './styles';

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
          numberOfLines={numberLinesNormalize()}>
          {props.description}
        </Text>
      </View>
    </View>
  );
};

export default DescriptionCell;
