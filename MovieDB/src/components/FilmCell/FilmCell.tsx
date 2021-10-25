import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {FilmCellProps} from '../../interfaces/interfaces';
import DescriptionCell from '../DescriptionCell/DescriptionCell';
import styles from './styles';

const FilmCell: React.FC<FilmCellProps> = (props: FilmCellProps) => {
  let {item, imageUrl} = props;

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
      <View style={styles.viewContainerStyle}>
        <View style={styles.viewImageStyle}>
          <Image
            style={styles.imageStyle}
            resizeMode={'contain'}
            source={{uri: imageUrl}}
          />
        </View>

        <View style={styles.viewDescriptionStyle}>
          <DescriptionCell
            nameFilm={item.name}
            description={item.description}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FilmCell;
