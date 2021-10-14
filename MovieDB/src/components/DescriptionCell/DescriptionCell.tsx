import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {DescriptionCellProps} from '../../interfaces';
import styles from './styles';

const maxNumberOfCharacters = 160;

const sliceAndAddEllipsis = (text: string) => {
  let sliced = text.slice(0, maxNumberOfCharacters);
  sliced += '...';
  return sliced;
};

const DescriptionCell: React.FC<DescriptionCellProps> = (
  props: DescriptionCellProps,
) => {
  return (
    <View style={styles.viewContainerStyle}>
      <View style={styles.viewTitleStyle}>
        <Text style={styles.textNameStyle}>{props.nameFilm}</Text>
      </View>

      <View>
        <Text style={styles.textDescriptionStyle}>
          {props.description.length > maxNumberOfCharacters
            ? sliceAndAddEllipsis(props.description)
            : props.description}
        </Text>
      </View>
    </View>
  );
};

export default DescriptionCell;
