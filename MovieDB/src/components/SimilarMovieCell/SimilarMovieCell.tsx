import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FilmCellProps} from '../../interfaces/interfaces';
import similarMoviesStyles from './styles';

const SimilarMovieCell: React.FC<FilmCellProps> = (props: FilmCellProps) => {
  let {item, imageUrl} = props;
  const onPress = () => {
    console.log(item.id);
  };

  return (
    <TouchableOpacity onPress={onPress} style={similarMoviesStyles.container}>
      <View style={similarMoviesStyles.imageContainer}>
        <Image
          style={similarMoviesStyles.image}
          resizeMode={'cover'}
          source={{uri: imageUrl}}
        />
      </View>
      <View>
        <View>
          <Text style={similarMoviesStyles.title}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SimilarMovieCell;
