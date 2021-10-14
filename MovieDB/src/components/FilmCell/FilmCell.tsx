import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {FilmCellProps} from '../../interfaces';
import DescriptionCell from '../DescriptionCell/DescriptionCell';
import styles from './styles';

const FilmCell: React.FC<FilmCellProps> = (props: FilmCellProps) => {
  let {imageUrl} = props.item;

  const onPress = () => {
    console.log(props.item.id);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.viewContainerStyle}>
        <View style={styles.viewImageStyle}>
          <Image
            style={styles.imageStyle}
            resizeMode={'contain'}
            source={{uri: 'https://image.tmdb.org/t/p/original' + imageUrl}}
          />
        </View>

        <View style={styles.viewDescriptionStyle}>
          <DescriptionCell
            nameFilm={props.item.name}
            description={props.item.description}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FilmCell;
