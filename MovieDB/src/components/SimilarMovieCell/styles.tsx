import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const similarMoviesStyles = StyleSheet.create({
  container: {
    width: width * 0.4,
    height: 290,
    justifyContent: 'space-evenly',
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 20,
  },
  imageContainer: {
    marginTop: 15,
    marginHorizontal: 15,
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 15,
  },
  title: {
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: 'rgb(58,77,95)',
  },
});
export default similarMoviesStyles;
