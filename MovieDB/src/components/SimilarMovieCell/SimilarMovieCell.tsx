import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FilmCellProps} from '../../interfaces';
import similarMoviesStyles from './styles';

const SimilarMovieCell: React.FC<FilmCellProps> = (props: FilmCellProps) => {
  let {imageUrl} = props.item;
  const onPress = () => {
    console.log(props.item.id);
  };

  return (
    <TouchableOpacity onPress={onPress} style={similarMoviesStyles.container}>
      <View style={similarMoviesStyles.imageContainer}>
        <Image
          style={similarMoviesStyles.image}
          resizeMode={'cover'}
          source={{uri: 'https://image.tmdb.org/t/p/original' + imageUrl}}
        />
      </View>
      <View>
        <View>
          <Text style={similarMoviesStyles.title}>{props.item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SimilarMovieCell;
