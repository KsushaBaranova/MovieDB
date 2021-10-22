import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {BookmarksCellProps} from '../../interfaces/interfaces';
import styles from './styles';
import bookmarkCellStyles from './styles';

const windowHeight = Dimensions.get('window').height;

const BookmarkCell: React.FC<BookmarksCellProps> = (
  props: BookmarksCellProps,
) => {
  let {imageUrl} = props.item;
  const onPress = () => {
    console.log(props.item.id);
  };

  return (
    <View style={bookmarkCellStyles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={bookmarkCellStyles.imageContainer}>
        <Image
          style={bookmarkCellStyles.image}
          resizeMode={windowHeight > 850 ? 'cover' : 'center'}
          source={{uri: 'https://image.tmdb.org/t/p/original' + imageUrl}}
        />
      </TouchableOpacity>
      <View style={bookmarkCellStyles.descriptionContainer}>
        <View style={bookmarkCellStyles.titleContainer}>
          <Text style={bookmarkCellStyles.title}>{props.item.name}</Text>
        </View>
        <View>
          <Text
            style={bookmarkCellStyles.descriptionText}
            ellipsizeMode={'tail'}
            numberOfLines={windowHeight < 800 ? 3 : 5}>
            {'\t' + props.item.description}
          </Text>
          <Text style={styles.counter}>
            {props.itemIndex} / {props.listLength}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BookmarkCell;
