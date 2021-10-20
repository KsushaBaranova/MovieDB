import {Dimensions, StyleSheet} from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  viewContainerStyle: {
    paddingHorizontal: 15,
  },
  textNameStyle: {
    fontSize: windowHeight < 900 ? 15 : 16,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  textDescriptionStyle: {
    fontSize: windowHeight < 900 ? 14 : 15,
    textAlign: 'justify',
    fontWeight: '500',
    lineHeight: 18,
    color: 'rgb(58,77,95)',
  },
  viewTitleStyle: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default styles;
