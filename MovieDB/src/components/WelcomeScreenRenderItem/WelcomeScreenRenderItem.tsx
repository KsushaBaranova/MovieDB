import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../WelcomeScreenRenderItem/styles';

interface welcomeScreenItem {
  message: string;
  info: string;
  image: ImageSourcePropType;
}

const renderItem = (
  item: ListRenderItemInfo<welcomeScreenItem>,
  initiateSession: () => void,
  redirect: () => void,
) => {
  const {message, info, image} = item.item;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode={'contain'} />
      </View>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.info}>{info}</Text>
      {item.index === 0 ? (
        <TouchableOpacity style={styles.touchable} onPress={redirect}>
          <Text style={styles.touchableText}> Skip info {'>'} </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity style={styles.signIn} onPress={initiateSession}>
            <Text style={styles.signInText}> Sign in </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable} onPress={redirect}>
            <Text style={styles.touchableText}> continue without signing</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default renderItem;
