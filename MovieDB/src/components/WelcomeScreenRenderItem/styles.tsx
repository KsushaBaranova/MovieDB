import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  flatListStyle: {
    flex: 1,
  },
  containerStyle: {
    paddingHorizontal: 20,
    width: width,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 0.7,
  },
  imageContainer: {
    paddingHorizontal: 40,
    width: '100%',
    height: '40%',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: '80%',
  },
  message: {
    fontSize: 24,
    fontWeight: '400',
    color: '#0d253f',
    textAlign: 'center',
  },
  touchable: {
    padding: 5,
    color: '#01b4e4',
    marginVertical: 10,
  },
  touchableText: {
    color: 'rgba(13, 37, 63, 0.7)',
    marginVertical: 15,
    fontSize: 18,
  },
  info: {
    color: 'rgba(13, 37, 63, 0.99)',
    fontSize: 18,
    textAlign: 'center',
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: '#347af0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotContainer: {
    marginTop: 30,
  },
  signIn: {
    backgroundColor: 'rgba(51, 122, 240, 0.99)',
    padding: 10,
    borderRadius: 10,
  },
  signInText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
