import {Dimensions, StyleSheet} from 'react-native';

const width = Dimensions.get('window').width;

const bookmarkCellStyles = StyleSheet.create({
  container: {
    flex: 0.95,
    width: width * 0.9,
    marginHorizontal: 10,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderWidth: 4,
    borderColor: 'rgba(203,178,184,0.6)',
  },
  imageContainer: {
    marginTop: 20,
    flex: 0.9,
    overflow: 'visible',
    alignSelf: 'center',
    width: width < 380 ? '75%' : '80%',
  },
  image: {
    flex: 1,
    borderRadius: 20,
  },
  descriptionContainer: {
    flex: 0.3,
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: 'black',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'justify',
    lineHeight: 18,
    color: 'rgb(58,77,95)',
  },
  counter: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'rgba(58,77,95,0.4)',
    marginVertical: 5,
  },
});

export default bookmarkCellStyles;
